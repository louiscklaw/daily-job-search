const path = require('path');
const puppeteer = require( 'puppeteer' );
const fs = require('fs');

const {ERROR_FETCH_ERROR} = require('./errors')
const {consoleLogError, consoleLogWarn, ENV_PRODUCTION, FETCH_RETRY_COUNT} = require('./config')

const {PROJ_HOME, screencapture_path, ignore_sc_path, new_job_sc_path} = require('./config');

const {getFilenameByJobLink} = require('./getFilenameByJobLink')

async function fetchJobsDb( jobsdb_fetch_config ) {
  try {
    const categories = Object.keys( jobsdb_fetch_config )

      const CATEGORIES_LEN = categories.length;

      for ( i = 0; i < CATEGORIES_LEN; i++ ) {
        var category = categories[ i ]
        var keywords = jobsdb_fetch_config[ category ]
        var keywords_len = keywords.length

        for ( ii = 0; ii < keywords_len; ii++ ) {
          var keyword = keywords[ ii ]
          if (category == 'self-test'){
            // test call handle separately
            return keyword
          }else{
            await fetchJobsDbByCategoryAndKeywords( category, keyword )
          }
        }
      }


  } catch ( error ) {
    consoleLogError( error.message )

    if ( ENV_PRODUCTION ) {
      process.exit( ERROR_FETCH_ERROR )
    } else {
      throw error
    }
  }
}

async function fetchJobsDbByCategoryAndKeywords(category,keywords) {
  var retry_countdown = FETCH_RETRY_COUNT;
  var fetch_done = false;

  while (!fetch_done && retry_countdown >= 0 ){
    try {
      if (retry_countdown != FETCH_RETRY_COUNT){
        consoleLogWarn(`retrying fetch page, remaining ${retry_countdown}`)

      }

      console.log( `getting list using ${category}, ${keywords}` )
      const browser = await puppeteer.launch( {
        defaultViewport: {
          width: 1920 / 2,
          height: 5080
        },
        ignoreHTTPSErrors: true
      } );
      const page = await browser.newPage();

      await page.goto( `https://hk.jobsdb.com/hk/jobs/${category}/1?Key=${keywords}` );
      await page.screenshot( { path: `jobsdb_${keywords}.png` } );

      var page_content = await page.content()
      fs.writeFileSync( `jobs_${keywords}_list.html`, page_content, {
        encoding: 'utf-8'
      } )
      var herf_found =  page_content.search( /href/g )
      var num_of_href_found = herf_found.length
      console.log( `${num_of_href_found} number of href found` )

      var test_in_html = page_content
      var raw_job_links = test_in_html.match( /href="(\/hk\/en\/job\/.+?)"/g ).sort();
      var num_of_job_links_found = raw_job_links.length
      console.log(`${num_of_job_links_found} number of job links found`)

      // get one link only when testing
      // var job_links_to_fetch = ENV_PRODUCTION ? raw_job_links: [raw_job_links[0],raw_job_links[1]]
      var job_links_to_fetch = raw_job_links

      var job_link_and_jobid = job_links_to_fetch.map( x => {
        var job_link = x.replace( 'href="', 'https://hk.jobsdb.com' ).replace( '"', '' )
        var job_screencapture_filename = `jobs_sc_${getFilenameByJobLink(job_link)}.png`

        var job_id = x.match( /jobId=(\d+)/ )[ 1 ]

        return {
          job_link,
          job_id,
          job_screencapture_filename
        }

      } )

      for ( i = 0; i < job_link_and_jobid.length; i++ ) {

        var active_job_link = job_link_and_jobid[ i ]
        // console.log(`capture job ${active_job_link.job_link}`)
        await page.goto( active_job_link.job_link )
        await page.screenshot( {
          path: `${screencapture_path}/${active_job_link.job_screencapture_filename}`
        } );
      }

      await browser.close();

      console.log('fetch done')
      fetch_done= true

    } catch (error) {
      console.log(error.message)
      retry_countdown = retry_countdown - 1;
    }
  }


}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  fetchJobsDb,
  helloworld
}