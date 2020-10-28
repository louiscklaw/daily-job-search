const path = require('path');
const puppeteer = require( 'puppeteer' );
const fs = require('fs');

const {ERROR_FETCH_ERROR} = require('./errors')
const {screencapture_path, consoleLogError} = require('../config')
const {grepCtgoodjobsJobLink} = require('./grepCtgoodjobsJobLink')
const  {getPathnamebyJobLink} = require('./ctgoodjobs/getPathnamebyJobLink')
const {lookupJobArea} = require('./ctgoodjobs/lookupJobArea')

const MAIN_PAGE_HTML_TEMP = './ctgoodjobs_index.html'

async function fetchCtgoodjobs( config_in ) {
  var categories =Object.keys(config_in)
  var categories_length = categories.length

  for ( i = 0; i < categories_length; i++ ) {
    var category = categories[i]
    var keywords = config_in[category]
    var keywords_length = keywords.length
    var area_id = lookupJobArea(category)

    var max_length = process.argv[2] || 999
    var keywords_length = Math.min( keywords_length, max_length )

    for ( ii = 0; ii < keywords_length; ii++ ) {
      var keyword = keywords[ii]
      var keyword_in_url = keyword.replace(' ','%20')

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

        var site_address = `https://www.ctgoodjobs.hk/ctjob/listing/joblist.asp?keywordForQuickSearch=${keyword_in_url}&job_area=${area_id}`
        await page.goto( site_address );
        await page.screenshot( { path: `ctgoodjobs.png` } );

        var page_content = await page.content()
        // fs.writeFileSync('./ctgoodjobs_index.html',page_content,{encoding:'utf-8'})

        // console.log(page_content)
        var joblinks = grepCtgoodjobsJobLink(page_content)
        var joblinks_length = joblinks.length
        console.log(`fetching "${keyword}", ${joblinks_length} fetched ...`)

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

          try {
            await job_detail_page.goto( joblink )
            await job_detail_page.screenshot( {
              path: `${screencapture_path}/${getPathnamebyJobLink(joblink)}.png`
            } );

          } catch ( error ) {
            consoleLogError(`error during fetching ${joblink}`)
            throw error
          }

        }
        await job_detail_browser.close();
        // scrape job detail page done

        await browser.close();

      } catch (error) {
        throw error
      }
    }

  }

}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  fetchCtgoodjobs,
  helloworld
}