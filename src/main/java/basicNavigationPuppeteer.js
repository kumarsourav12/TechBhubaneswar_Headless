const puppeteer = require('puppeteer');
var d=new Date();
console.log(d);
puppeteer.launch({headless: true}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('http://techbhubaneswar.com/');
  await page.screenshot({ path: '../screenshots/1.png'});

  await page.waitFor('#menu-item-25 > a');
  await page.click('#menu-item-25 > a');
  await page.screenshot({ path: '../screenshots/2.png' });

  await page.waitFor('#menu-item-2485 > a');
  await page.click('#menu-item-2485 > a');
  await page.screenshot({ path: '../screenshots/2.png' });

    await page.waitFor('#menu-item-142 > a');
  await page.click('#menu-item-142 > a');
  await page.screenshot({ path: '../screenshots/3.png' });

    await page.waitFor('#menu-item-22 > a');
  await page.click('#menu-item-22 > a');
  await page.screenshot({ path: '../screenshots/4.png'});

    await page.waitFor('#menu-item-2551 > a');
  await page.click('#menu-item-2551 > a');
  await page.screenshot({ path: '../screenshots/5.png' });

    await page.waitFor('#menu-item-139 > a');
  await page.click('#menu-item-139 > a');
  await page.screenshot({ path: '../screenshots/6.png'});
  await browser.close();
  var d=new Date();
  console.log(d);
});
