const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
   await page.setViewport({ width: 1280, height: 800 })
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto('http://www.techbhubaneswar.com');
  await page.screenshot({path: 'example.png'});
  //await page.waitForSelector('#menu-item-2485');
 // await page.screenshot({path: 'waitingForSelector.png'});
  await page.click('#menu-item-142');
  await page.waitForSelector('#post-15 > div > div.fusion-fullwidth.fullwidth-box.fusion-blend-mode.fusion-parallax-none.main-banner.nonhundred-percent-fullwidth > div > div > div > h1');
  await page.screenshot({path: 'ClickedOnSelector.png'});
    await page.waitForSelector('#FirstName');
    await page.focus('#FirstName');
    await page.screenshot({path: 'focusOnElement.png'});
    await page.type('#FirstName','Kumar');
    await page.screenshot({path: 'First Name entered.png'});
  await browser.close();
})();