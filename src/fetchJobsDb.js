const path = require('path');
const puppeteer = require( 'puppeteer' );
const fs = require('fs');

const {PROJ_HOME, screencapture_path, ignore_sc_path, new_job_sc_path} = require('./config');

const {getFilenameByJobLink} = require('./getFilenameByJobLink')

async function fetchJobsDb(jobsdb_fetch_config){
  const categories = Object.keys(jobsdb_fetch_config)
  const CATEGORIES_LEN = categories.length;

  for(i=0;i<CATEGORIES_LEN;i++){
    var category = categories[i]
    var keywords = jobsdb_fetch_config[category]
    var keywords_len = keywords.length

    for (ii=0;ii<keywords_len;ii++){
      var keyword = keywords[ii]

      await fetchJobsDbByCategoryAndKeywords(category,keyword)

    }
  }
}

async function fetchJobsDbByCategoryAndKeywords(category,keywords) {
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
  await page.screenshot( {
    path: `jobsdb_${keywords}.png`
  } );

  var page_content = await page.content()
  fs.writeFileSync( `jobs_${keywords}_list.html`, page_content, {
    encoding: 'utf-8'
  } )
  console.log( page_content.search( /href/g ) )

  var test_in_html = page_content
  var raw_job_links = test_in_html.match( /href="(\/hk\/en\/job\/.+?)"/g ).sort();
  var job_link_and_jobid = raw_job_links.map( x => {
    var job_link = x.replace( 'href="', 'https://hk.jobsdb.com' ).replace( '"', '' )
    var job_id = x.match( /jobId=(\d+)/ )[ 1 ]

    var job_screencapture_filename = `jobs_sc_${getFilenameByJobLink(job_link)}.png`

    return {
      job_link,
      job_id,
      job_screencapture_filename
    }

  } )

  // for (i=0;i<2;i++){
  for ( i = 0; i < job_link_and_jobid.length; i++ ) {
    var active_job_link = job_link_and_jobid[ i ]

    // console.log(`capture job ${active_job_link.job_link}`)
    console.log( `saving screencapture ${active_job_link.job_screencapture_filename}` )

    await page.goto( active_job_link.job_link )

    await page.screenshot( {
      path: `${screencapture_path}/${active_job_link.job_screencapture_filename}`
    } );

  }

  await browser.close();

}

function helloworld(){
  console.log('helloworld')
}

module.exports={
  fetchJobsDb,
  helloworld
}