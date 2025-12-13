import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Set viewport to HD
  await page.setViewport({ width: 1280, height: 800 });

  const baseUrl = "http://localhost:3000";
  const outDir = path.join(__dirname, "../public/screenshots");

  // Ensure directory exists
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  try {
    // 1. Home Page
    console.log("Capturing Home Page...");
    await page.goto(baseUrl, { waitUntil: "networkidle0", timeout: 60000 });
    await page.screenshot({ path: path.join(outDir, "home.png") });

    // 2. Quiz Page
    console.log("Capturing Quiz Page...");
    await page.goto(`${baseUrl}/en/quiz`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    // Wait for questions to load
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(outDir, "quiz.png") });

    // 3. Results Page (Inject Mock Session Data)
    console.log("Capturing Results Page...");
    // We navigate to home first to set the session storage for the origin
    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

    const mockResults = {
      economic: 4.5,
      social: -3.0,
      answers: { 1: 2, 2: -1 }, // Dummy answers
    };

    await page.evaluate((data) => {
      sessionStorage.setItem("quizResults", JSON.stringify(data));
    }, mockResults);

    await page.goto(`${baseUrl}/en/results`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    // Wait for animations/rendering
    await new Promise((r) => setTimeout(r, 3000));
    await page.screenshot({ path: path.join(outDir, "results.png") });

    // 4. Leaders Page
    console.log("Capturing Leaders Page...");
    await page.goto(`${baseUrl}/en/leaders`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    await page.screenshot({ path: path.join(outDir, "leaders.png") });

    console.log(`Successfully captured 4 screenshots to ${outDir}`);
  } catch (error) {
    console.error("Error capturing screenshots:", error);
  } finally {
    await browser.close();
  }
})();
