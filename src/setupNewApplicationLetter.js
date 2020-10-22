const fs = require('fs-extra');
const sharp = require('sharp');

const {getPngHead, getPngHeadHelloworld} = require('./getPngHead');
const {sendSlackMessage} = require('./sendSlackMessage');
const {getJobsDbJobLink} = require('./getJobsDbJobLink')
const {updateApplicationLetter} = require('./updateApplicationLetter')

const {
  IGNORE_SC_PATH,
  NEW_SC_PATH,
  APPLICATION_LETTER_QUEUE_PATH,
  APPLICATION_LETTER_TEMPLATE_PATH
} = require( './config' );

const {getPathnameFromPngFilename } = require('./getPathnameFromPngFilename')
const {movePngToIgnore} = require('./movePngToIgnore')

async function setupNewApplicationLetter(){
  var png_filenames = fs.readdirSync(NEW_SC_PATH)

  try {
    png_filenames.map(x => (async () => {
      var new_application_letter_path = getPathnameFromPngFilename(x)
      console.log(x)
      var jobs_id = x.match(/.+?(\d+)\.png/)[1]
      var jobs_link = getJobsDbJobLink(jobs_id)

      var full_new_application_letter_path=`${APPLICATION_LETTER_QUEUE_PATH}/${new_application_letter_path}`;
      var png_in_new_sc = `${NEW_SC_PATH}/${x}`;
      var png_in_new_sc_head = `${full_new_application_letter_path}/head_${x}`;

      // console.log(full_new_application_letter_path);
      if (!fs.existsSync(full_new_application_letter_path)) {
        fs.mkdirSync(full_new_application_letter_path)

        // define the content
        await fs.copySync(APPLICATION_LETTER_TEMPLATE_PATH, full_new_application_letter_path)

        await fs.copySync(`${NEW_SC_PATH}/${x}`, `${full_new_application_letter_path}/${x}`)

        updateApplicationLetter(`${full_new_application_letter_path}/email.md`, jobs_link)


        const semiTransparentRedPng = await sharp(`${full_new_application_letter_path}/${x}`)
          .extract({left:0,width:960,top:0,height:900})
          .toBuffer();

        await fs.writeFileSync(png_in_new_sc_head, semiTransparentRedPng)

        await sendSlackMessage(
          png_in_new_sc_head
          , `x.jobs_link`)
        // move png to ignore folder after success
        movePngToIgnore(x)

      }else{
        console.log('path already exist, delete png file')
        try {
          movePngToIgnore(png_in_new_sc)
        } catch (error) {
          console.log(`error during move file ${png_in_new_sc}, delete directly`)
          fs.unlinkSync(png_in_new_sc)
        }
      }
    })())
  } catch (error) {
    console.log(error.message)
    console.log('error during making application letter directory')
    process.exit(-1)
  }



}

function helloworld_setupNewApplicationLetter(){
  console.log('helloworld')
}

module.exports={
  helloworld_setupNewApplicationLetter,
  setupNewApplicationLetter
}