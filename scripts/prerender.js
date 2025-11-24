// scripts/prerender.mjs
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import http from "http";
import puppeteer from "puppeteer";

const PORT = process.env.PRERENDER_PORT || 5000;
const BASE = `http://localhost:${PORT}`;
const DIST_DIR = path.join(process.cwd(), "dist");

// ROUTE config (single page)
const ROUTES = [
  { path: "/", waitForSelector: "#root" }, // adjust selector if your main content uses a different id
];

const SERVE_CMD = `npx vite preview --port ${PORT}`;
const START_TIMEOUT = 30_000; // ms
const NAV_TIMEOUT = 60_000; // ms

function startStaticServer() {
  // spawn via shell for cross-platform. stdio=inherit helps debugging in CI logs.
  const proc = spawn(SERVE_CMD, { stdio: "inherit", shell: true });
  return proc;
}

async function waitForServer(url, timeout = START_TIMEOUT) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const ok = await new Promise((resolve) => {
        const req = http.request(
          url,
          { method: "HEAD", timeout: 3000 },
          (res) => {
            resolve(res.statusCode >= 200 && res.statusCode < 400);
          }
        );
        req.on("error", () => resolve(false));
        req.on("timeout", () => {
          req.destroy();
          resolve(false);
        });
        req.end();
      });
      if (ok) return;
    } catch (e) {
      // continue polling
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not respond at ${url} within ${timeout}ms`);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function prerenderOne(page, route) {
  const url = `${BASE}${route.path}`;
  console.log(`-> Navigating to ${url}`);
  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
  );

  await page.goto(url, { waitUntil: "networkidle2", timeout: NAV_TIMEOUT });

  if (route.waitForSelector) {
    try {
      await page.waitForSelector(route.waitForSelector, { timeout: 10_000 });
    } catch (err) {
      console.warn(
        `Warning: selector "${route.waitForSelector}" not found for ${route.path}; continuing anyway.`
      );
    }
  } else {
    await page.waitForTimeout(500);
  }

  // debug screenshot when requested
  if (process.env.PRERENDER_DEBUG === "1") {
    const safeName =
      route.path === "/"
        ? "root"
        : route.path.replace(/\//g, "_").replace(/^_/, "");
    const screenshotPath = path.join(DIST_DIR, `prerender-${safeName}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved debug screenshot: ${screenshotPath}`);
  }

  const html = await page.evaluate(() => document.documentElement.outerHTML);
  // write to dist/index.html for root
  if (route.path === "/") {
    const outFile = path.join(DIST_DIR, "index.html");
    fs.writeFileSync(outFile, "<!doctype html>\n" + html, "utf8");
    console.log(`Wrote prerendered HTML -> ${outFile}`);
  } else {
    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ""));
    ensureDir(routeDir);
    const outFile = path.join(routeDir, "index.html");
    fs.writeFileSync(outFile, "<!doctype html>\n" + html, "utf8");
    console.log(`Wrote prerendered HTML -> ${outFile}`);
  }
}

async function main() {
  // ensure dist exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error(
      "dist directory not found. Run your build first (e.g. `npm run build`)."
    );
    process.exit(1);
  }

  console.log("Starting static server...");
  const server = startStaticServer();

  try {
    await waitForServer(`${BASE}/`);
  } catch (err) {
    console.error("Server failed to start:", err);
    server.kill();
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: true,
  });

  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(NAV_TIMEOUT);

    for (const r of ROUTES) {
      await prerenderOne(page, r);
    }

    await page.close();
  } catch (err) {
    console.error("Prerender error:", err);
    await browser.close();
    server.kill();
    process.exit(1);
  }

  await browser.close();
  server.kill();
  console.log("Prerender completed successfully.");
  process.exit(0);
}

main();
