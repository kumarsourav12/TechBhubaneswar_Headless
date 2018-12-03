const puppeteer = require('puppeteer');

const headless = process.argv[2] === "headless";

(async () => {
    const timeout = 30000
    const browser = await puppeteer.launch({
        headless: headless,
        timeout,
    });
    const page = await browser.newPage();
	const label = "Go to Bing " + (headless?"without": "with") + " head."
	console.time(label)
    await page.goto("https://www.bing.com/", { timeout })
	const title = await page.title()
	console.log("Title: " + title);
	await page.waitForSelector("#scpl1");
	await page.click("#scpl1");
	const title2 = await page.title();
    console.log("Title: " + title2);
	console.timeEnd(label);
    await browser.close();
})();