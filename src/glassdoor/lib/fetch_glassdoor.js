const path = require('path');
const puppeteer = require( 'puppeteer' );
const fs = require('fs');

const {GLASSDOOR_LIB_HOME, consoleLogWarn} = require('../../config')

const {ERROR_FETCH_ERROR} = require('../../errors')
const {checkPossibleLinksFound} = require(`${GLASSDOOR_LIB_HOME}/checkPossibleLinksFound`)
const {grepGlassdoorJobLink} = require(`${GLASSDOOR_LIB_HOME}/grepGlassdoorJobLink`)

const {getJobPositionFromContent} = require(`${GLASSDOOR_LIB_HOME}/getJobPositionFromContent`)
const {getJobIdFromContent}= require('./getJobIdFromContent');
const {getFilenameFromPageContent} = require( './getFilenameFromPageContent' );
const {getJobDetailScreenCapture} = require('./getJobDetailScreenCapture')


async function fetchGlassdoor(config_in){


  const browser = await puppeteer.launch( {
    defaultViewport: {
      width: 960,
      height: 10800
    },
    ignoreHTTPSErrors: true,
    // headless: false
  } );

  var site_address = `https://www.glassdoor.com.hk/Job/hong-kong-test-engineer-jobs-SRCH_IL.0,9_IC2308631_KO10,23.htm`

  const page = await browser.newPage();

  await page.goto( site_address );
  await page.screenshot( { path: `glassdoor.png` } );

  var page_content = await page.content()
  await browser.close();


  const job_detail_browser = await puppeteer.launch( {
    defaultViewport: {
      width: 960,
      height: 1080*2
    },
    ignoreHTTPSErrors: true,
    // headless: false
  } );

  // var page_content = fs.readFileSync('/home/logic/_workspace/daily-job-search/main/tests/glassdoor/test_glassdoor_index.html',{encoding:'utf-8'})

  if (checkPossibleLinksFound(page_content)){
    var job_links = grepGlassdoorJobLink(page_content)
    var job_links_length = job_links.length

    for(i=0;i<job_links_length;i++){

      var fetch_done = false
      var fetch_countdown_remain = 5

      var site_address = job_links[i]

      while (!fetch_done && fetch_countdown_remain > 0 ){
        try {
          var job_detail_page = await job_detail_browser.newPage();
          await job_detail_page.goto( site_address );

          var job_detail_content = await job_detail_page.content()
          var test_filename = getFilenameFromPageContent(job_detail_content)
          var job_detail_png_path = getJobDetailScreenCapture(test_filename)

          await job_detail_page.screenshot( { path: job_detail_png_path } );
          fetch_done=true
        } catch (error) {
          consoleLogWarn(`fetch failed for address ${site_address} ... retry remain ${fetch_countdown_remain}`)
          fetch_countdown_remain --;
        }

      }

    }
  }

  await job_detail_browser.close();

}

module.exports={
  fetchGlassdoor
}
