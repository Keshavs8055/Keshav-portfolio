// scripts/prerender-puppeteer.js (fixed)
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import puppeteer from "puppeteer";

const ROUTES = ["/", "/case-study"];
const PORT = 5000;
const BASE = `http://localhost:${PORT}`;

/** Start static server using 'serve -s dist -l <PORT>' */
function startStaticServer() {
  const proc = spawn("npx", ["serve", "-s", "dist", "-l", String(PORT)], {
    stdio: "inherit",
    shell: true,
  });
  return proc;
}

async function prerender() {
  console.log("Starting static server...");
  const server = startStaticServer();

  // wait longer for server startup in CI / slow machines
  await new Promise((r) => setTimeout(r, 1500));

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of ROUTES) {
      // normalize route -> remove leading slash for creating outDir
      const cleanRoute = route === "/" ? "" : route.replace(/^\//, "");
      const url = `${BASE}${route}`;
      console.log(`Prerendering ${url} ...`);

      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

      // if your page has lazy-rendering, you can optionally wait for a selector:
      // await page.waitForSelector('main', { timeout: 5000 }).catch(() => {});

      const html = await page.evaluate(
        () => document.documentElement.outerHTML
      );

      const outDir = path.join(process.cwd(), "dist", cleanRoute);
      fs.mkdirSync(outDir, { recursive: true });

      const outFile = path.join(outDir, "index.html");
      fs.writeFileSync(outFile, "<!doctype html>\n" + html, "utf8");

      console.log(`Wrote prerendered HTML -> ${outFile}`);

      await page.close();
    }
  } catch (err) {
    console.error("Prerender error:", err);
  } finally {
    await browser.close();
    server.kill();
    process.exit();
  }
}

prerender();
