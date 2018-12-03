const puppeteer = require('puppeteer');
 const headless = process.argv[2] === "headless";
(async () => {
  const browser = await puppeteer.launch({
                                                 headless: headless,

                                                 args: ['--window-size=1360,768']
                                             });
  const page = await browser.newPage();
   await page.setViewport({ width: 1280, height: 800 })
   // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto('http://www.techbhubaneswar.com');
  await page.screenshot({path: 'example.png'});
  //await page.waitForSelector('#menu-item-2485');
 // await page.screenshot({path: 'waitingForSelector.png'});
  await page.click('#menu-item-142');
  await page.waitForSelector('#post-15 > div > div.fusion-fullwidth.fullwidth-box.fusion-blend-mode.fusion-parallax-none.main-banner.nonhundred-percent-fullwidth > div > div > div > h1');
  await page.screenshot({path: 'ClickedOnSelector.png'});

  await page.waitForSelector("#post-15 > div > div:nth-child(2) > h2");
  const text1 =  page.evaluate(() => document.querySelector('#post-15 > div > div:nth-child(2) > h2').textContent);
    //await page.waitForSelector('#FirstName');
    //await page.focus('#FirstName');
    //await page.screenshot({path: 'focusOnElement.png'});
    //await page.type('#FirstName','Kumar');
    //await page.screenshot({path: 'First Name entered.png'});

    console.log("text is "+ text1);
    console.timeEnd(label);
  await browser.close();
})();