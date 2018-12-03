const puppeteer = require('puppeteer');

const headless = process.argv[2] === "headless";

(async () => {
    const timeout = 30000
    const browser = await puppeteer.launch({
        headless: headless,
        timeout,
        args: ['--window-size=1360,768']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1360, height: 768 })
	const label = "Go to Bing " + (headless?"without": "with") + " head."
	console.time(label)
    await page.goto("https://www.bing.com/", { timeout })
	const title = await page.title()
	console.log("Title: " + title);



    await page.waitForSelector("#id_l");
    await page.click("#id_1");

    await page.waitForSelector("#i0116");
    await page.type("#i0116","testuserName");
const title3= await page.title();
    console.log("Title: " + title3);

	console.timeEnd(label);
    await browser.close();
})();