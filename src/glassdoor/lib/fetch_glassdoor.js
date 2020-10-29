const path = require('path');
const puppeteer = require( 'puppeteer' );
const fs = require('fs');

const {GLASSDOOR_LIB_HOME} = require('../../config')

const {ERROR_FETCH_ERROR} = require('../../errors')
const {checkPossibleLinksFound} = require(`${GLASSDOOR_LIB_HOME}/checkPossibleLinksFound`)
const {grepGlassdoorJobLink} = require(`${GLASSDOOR_LIB_HOME}/grepGlassdoorJobLink`)
const {getJobPositionFromContent} = require(`${GLASSDOOR_LIB_HOME}/getJobPositionFromContent`)

async function fetchGlassdoor(config_in){


  // const browser = await puppeteer.launch( {
  //   defaultViewport: {
  //     width: 960,
  //     height: 10800
  //   },
  //   ignoreHTTPSErrors: true,
  //   // headless: false
  // } );

  // var site_address = `https://www.glassdoor.com.hk/Job/hong-kong-test-engineer-jobs-SRCH_IL.0,9_IC2308631_KO10,23.htm`

  // const page = await browser.newPage();

  // await page.goto( site_address );
  // await page.screenshot( { path: `glassdoor.png` } );

  // var page_content = await page.content()
  // await browser.close();


  // const browser = await puppeteer.launch( {
  //   defaultViewport: {
  //     width: 960,
  //     height: 1080*2
  //   },
  //   ignoreHTTPSErrors: true,
  //   // headless: false
  // } );

  var page_content = fs.readFileSync('/home/logic/_workspace/daily-job-search/main/tests/glassdoor/test_glassdoor_index.html',{encoding:'utf-8'})

  // console.log(page_content)

  if (checkPossibleLinksFound(page_content)){
    var job_links = grepGlassdoorJobLink(page_content)
    var job_links_length = job_links.length

    for(i=0;i<job_links_length;i++){
      var site_address = job_links[i]

      // const page = await browser.newPage();
      // var page_content = await page.content()

      var job_position = getJobPositionFromContent(page_content)
      console.log(job_position)

      // await page.goto( site_address );
      // await page.screenshot( { path: `glassdoor.png` } );

    }
  }


  // await browser.close();

}

module.exports={
  fetchGlassdoor
}
