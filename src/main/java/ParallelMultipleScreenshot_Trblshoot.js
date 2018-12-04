const puppeteer = require('puppeteer')
const parallel = 13;
const headless = true;

const pages = [
   { name: 'TechBhubaneswar Homepage', url: 'http://www.techbhubaneswar.com/'},
   { name: 'TechBhubaneswar  Event Schedule', url: 'http://www.techbhubaneswar.com/event-schedule/'},
   { name: 'TechBhubaneswar Homepage', url: 'http://www.techbhubaneswar.com/'},
      { name: 'TechBhubaneswar  Event Schedule', url: 'http://www.techbhubaneswar.com/event-schedule/'},
   { name: 'TechBhubaneswar Speakers', url: 'http://www.techbhubaneswar.com/#_key-speakers'},
   { name: 'TechBhubaneswar Registration', url: 'http://www.techbhubaneswar.com/free-registration/'},
   { name: 'TechBhubaneswar Speaker registration', url: 'http://www.techbhubaneswar.com/be-a-speaker/'},
   { name: 'TechBhubaneswar Blog', url: 'http://www.techbhubaneswar.com/blog/'},
   { name: 'TechBhubaneswar Contact Us', url: 'http://www.techbhubaneswar.com/contact-us/'},
   { name: 'TechBhubaneswar  Who are we', url: 'http://www.techbhubaneswar.com/who-are-we/'},
   { name: 'TechBhubaneswar 2016 speakers', url: 'http://www.techbhubaneswar.com/speakers-2016/'},
   { name: 'TechBhubaneswar 2017 speakers', url: 'http://www.techbhubaneswar.com/speakers-2017/'},
   { name: 'Mindfire Homepage', url: 'http://www.mindfiresolutions.com/'},
   { name: 'Mindfire About Us', url: 'http://www.mindfiresolutions.com/aboutus.htm'},
   { name: 'Mindfire Services', url: 'http://www.mindfiresolutions.com/services.htm'},
]

const screenshotPages = async (pages, parallel) => {
  const parallelBatches = Math.ceil(pages.length / parallel)
var start = new Date().getTime();
  console.log('\nI have gotten the task of taking screenshots of ' + pages.length + ' TechBhubaneswar and mindfire and will take ' + parallel + ' of them in paralell.')

  console.log(' This will result in ' + parallelBatches + ' batches.')

  // Split up the Array of pages
  let k = 0
  for (let i = 0; i < pages.length; i += parallel) {

    k++
    console.log('\nBatch ' + k + ' of ' + parallelBatches)
    // Launch and Setup Chromium
    var d=new Date();
    console.log(d);
    const browser = await puppeteer.launch({args: ["--proxy-server='direct://'", '--proxy-bypass-list=*',"--deterministic-fetch"]});
    // Fun with puppeteer
    //const context = await browser.createIncognitoBrowserContext();
    const context = await browser.defaultBrowserContext();
    const page = await context.newPage();
    page.setJavaScriptEnabled(true)

    const promises = []
    for (let j = 0; j < parallel; j++) {
      let elem = i + j
      // only proceed if there is an element
      if (pages[elem] != undefined) {
        // Promise to take Screenshots
        // promises push
        console.log('🖖 I promise to screenshot: ' + pages[elem].name)
        promises.push(browser.newPage().then(async page => {
          await page.setViewport({ width: 1280, height: 800 })
          try {
            // Only create screenshot if page.goto get's no error
            await page.goto(pages[elem].url)
            await page.screenshot({ path: '../screenshots/'+"headless-"+headless+elem + ' ' + pages[elem].name +'.png' }).then(console.log('🤞 I have kept my promise to screenshot ' + pages[elem].name))
          } catch (err) {
            console.log('Sorry! I couldn\'t keep my promise to screenshot ' + pages[elem].name)
          }
        }))
      }
    }

    // await promise all and close browser
    await Promise.all(promises)
    await browser.close()
var d1=new Date();


    console.log('\nI finished this batch. I\'m ready for the next batch');
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
  }
  var end = new Date().getTime();
      var time = end - start;
      console.log('Execution time: ' + time);
}

screenshotPages(pages, parallel)
