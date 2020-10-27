const path = require('path');
const puppeteer = require( 'puppeteer' );
const fs = require('fs');

const {ERROR_FETCH_ERROR} = require('./errors')
const {screencapture_path} = require('../config')
const {grepCtgoodjobsJobLink} = require('./grepCtgoodjobsJobLink')
const  {getPathnamebyJobLink} = require('./ctgoodjobs/getPathnamebyJobLink')

const MAIN_PAGE_HTML_TEMP = './ctgoodjobs_index.html'


async function fetchCtgoodjobs( address_to_fetch ) {

  try {
    const browser = await puppeteer.launch( {
      defaultViewport: {
        width: 960,
        height: 10800
      },
      ignoreHTTPSErrors: true,
      // headless: false
    } );
    const page = await browser.newPage();

    await page.goto( `https://www.ctgoodjobs.hk/ctjob/listing/joblist.asp?keywordForQuickSearch=QA&job_area=021_jc` );
    await page.screenshot( { path: `ctgoodjobs.png` } );

    var page_content = await page.content()
    // fs.writeFileSync('./ctgoodjobs_index.html',page_content,{encoding:'utf-8'})


    // console.log(page_content)
    var joblinks = grepCtgoodjobsJobLink(page_content)
    var joblinks_length = joblinks.length
    console.log(`${joblinks_length} fetched ...`)


    // scrape job detail page start
    const job_detail_browser = await puppeteer.launch( {
      defaultViewport: {
        width: 960,
        height: 1080*2
      },
      ignoreHTTPSErrors: true,
      // headless: false
    } );
    const job_detail_page = await job_detail_browser.newPage();

    for (i=0;i<joblinks_length;i++){
      var joblink = joblinks[i]

      await job_detail_page.goto(joblink)
      await job_detail_page.screenshot( { path: `${screencapture_path}/${getPathnamebyJobLink(joblink)}.png` } );
      break
    }
    await job_detail_browser.close();
    // scrape job detail page done

    await browser.close();

  } catch (error) {
    throw error
  }
}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  fetchCtgoodjobs,
  helloworld
}