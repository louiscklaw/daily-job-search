const fs = require('fs');
const PNG = require( 'pngjs' ).PNG;
const pixelmatch = require( 'pixelmatch' );
const puppeteer = require( 'puppeteer' );
const child_process=require('child_process');

const {IGNORE_SC_PATH, NEW_SC_PATH} = require('./config');

const {sendSlackMessage} = require('./sendSlackMessage');
const {getJobsDbJobLink} = require('./getJobsDbJobLink')
const {getJobLinkByFilename} = require('./getJobLinkByFilename')

async function pngCompare(){
  var new_sc_PNG_path = fs.readdirSync(NEW_SC_PATH).map(x => `${NEW_SC_PATH}/${x}`);

  var ignore_PNG_filenames = fs.readdirSync(IGNORE_SC_PATH).map(x => `${IGNORE_SC_PATH}/${x}`);

  var ignore_PNGs = ignore_PNG_filenames.map( x => {
    var temp_png=PNG.sync.read(
      fs.readFileSync(x)
    )
    return {
      filepath: x,
      png_data: temp_png
    }
  })

  var new_PNGs = new_sc_PNG_path.map( x => {
    var temp_png = PNG.sync.read(
      fs.readFileSync(x)
    )
    return {
      filepath: x,
      png_data: temp_png
    }
  })

  var all_matching_results = new_PNGs.map(new_png => {
    var matching_results = ignore_PNGs.map(ignore_png => {
      var diff_png = new PNG ({
        width: 1920/2,
        height: 5080
      })
      var new_png_data = new_png.png_data;
      var ignore_png_data = ignore_png.png_data;

      var diff_value = pixelmatch(new_png_data.data, ignore_png_data.data, diff_png.data, 1920/2, 5080, {
        threshold: 0.5
      })
      return {
        diff_value,
        diff_png
      }
    })

    var diff_values = matching_results.map(x => x.diff_value)
    var found_same_png = diff_values.includes(0)
    var filepath = new_png.filepath
    var job_id = filepath.match(/.+?jobs_sc_(.+)\.png/)

    // var jobs_link = getJobsDbJobLink(job_id)
    var jobs_link = getJobLinkByFilename(filepath)

    return {
      job_id,
      jobs_link,
      found_same_png,
      filepath,
      matching_results
    }
  })

  all_matching_results.forEach(x => {
    if (!x.found_same_png){
      // found same png in ignore sc, old job post
      console.log(`${x.filepath} is new`)

    }else{
      // not founding same png in ignore sc, new job post
      // remove png file
      var file_to_delete = x.filepath
      console.log(`delete file ${file_to_delete}`)
      fs.unlinkSync(file_to_delete)
    }
  })
}


module.exports={
  pngCompare
}