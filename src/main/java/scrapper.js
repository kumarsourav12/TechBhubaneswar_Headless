const puppeteer = require('puppeteer');
const headless = process.argv[2] === "headless";
var start = new Date().getTime();
function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({
            headless: headless,
                    args: ['--window-size=1360,768']
            });
            const page = await browser.newPage();
            await page.goto("https://news.ycombinator.com/");
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('a.storylink');
                items.forEach((item) => {
                    results.push({
                        url:  item.getAttribute('href'),
                        text: item.innerText,
                    });
                });
                return results;
            })

             var end = new Date().getTime();
                  var time = end - start;
                  console.log('Execution time: ' + time);
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);