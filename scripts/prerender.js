import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import puppeteer from "puppeteer";

const ROUTES = ["/"];
const PORT = 5000;
const BASE = `http://localhost:${PORT}`;

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

  // Give server extra time to start (CI-safe)
  await new Promise((r) => setTimeout(r, 1500));

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const route = "/";
    const url = `${BASE}${route}`;
    console.log(`Prerendering ${url} ...`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

    // Optional: ensure your main landing content is actually rendered
    // await page.waitForSelector("#home", { timeout: 5000 }).catch(() => {});

    const html = await page.evaluate(() => document.documentElement.outerHTML);

    const outDir = path.join(process.cwd(), "dist");
    fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, "index.html");
    fs.writeFileSync(outFile, "<!doctype html>\n" + html, "utf8");

    console.log(`Wrote prerendered HTML -> ${outFile}`);

    await page.close();
  } catch (err) {
    console.error("Prerender error:", err);
  } finally {
    await browser.close();
    server.kill();
    process.exit();
  }
}

prerender();
