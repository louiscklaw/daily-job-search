const fs = require('fs-extra');
const sharp = require('sharp');

const {ERROR_SETUP_NEW_APPLICATION_LETTER} = require('../errors')
const {
  IGNORE_SC_PATH,
  NEW_SC_PATH,
  APPLICATION_LETTER_QUEUE_PATH,
  CTGOODJOBS_APPLICATION_LETTER_TEMPLATE_PATH
} = require( '../../../config' );
const {consoleLogError} = require('../../util')

const {getPngHead, getPngHeadHelloworld} = require('./getPngHead');
const {sendSlackMessage} = require('./sendSlackMessage');
const {getCtgoodjobJobDetailLink} = require('../getCtgoodjobJobDetailLink')
const {updateApplicationLetter} = require('./updateApplicationLetter')
const {addJobToIgnoreDb} = require('./addJobToIgnoreDb')

const {getPathnameFromPngFilename } = require('./getPathnameFromPngFilename')
const {movePngToIgnore} = require('./movePngToIgnore');
const { cosnoleLogHighlight } = require( '../../util' );

async function setupNewApplicationLetter(){
  var png_filenames = fs.readdirSync(NEW_SC_PATH)
    .filter(x => x.search(/ctgoodjobs_.+?.png/) > -1)

  try {
    var num_of_png_files = png_filenames.length
    cosnoleLogHighlight(`number of png files in screencapture directory ${num_of_png_files} files`)

    for (i=0;i<num_of_png_files;i++){
      var png_filename = png_filenames[i]

      var new_application_letter_path = getPathnameFromPngFilename(png_filename)
      console.log(png_filename)
      var splitted = png_filename.split('_')
      var jobs_id = splitted[2].replace('.png','')
      var position = splitted[1]
      var jobs_link = getCtgoodjobJobDetailLink(position, jobs_id)

      var full_new_application_letter_path=`${APPLICATION_LETTER_QUEUE_PATH}/${new_application_letter_path}`;

      var png_in_new_sc = `${NEW_SC_PATH}/${png_filename}`;
      var png_in_new_sc_head = `${full_new_application_letter_path}/head_${png_filename}`;

      if (!fs.existsSync(full_new_application_letter_path)) {
        fs.mkdirSync(full_new_application_letter_path)

        await fs.copySync(CTGOODJOBS_APPLICATION_LETTER_TEMPLATE_PATH, full_new_application_letter_path)

        await fs.copySync(`${NEW_SC_PATH}/${png_filename}`, `${full_new_application_letter_path}/${png_filename}`)

        updateApplicationLetter(`${full_new_application_letter_path}/email.md`, jobs_link)

        const semiTransparentRedPng = await sharp(`${full_new_application_letter_path}/${png_filename}`)
          .extract({left:0,width:960,top:0,height:900})
          .toBuffer();

        await fs.writeFileSync(png_in_new_sc_head, semiTransparentRedPng)

        await sendSlackMessage(
          png_in_new_sc_head
          , `x.jobs_link`)
        // move png to ignore folder after success
        // movePngToIgnore(x)
        // addJobToIgnoreDb()

        addJobToIgnoreDb(png_filename)
        fs.unlinkSync(png_in_new_sc)

      }else{
        console.log('application letter path already exist, delete png file')
        try {
          // movePngToIgnore(png_in_new_sc)
          addJobToIgnoreDb(png_filename)
          fs.unlinkSync(png_in_new_sc)

        } catch (error) {
          console.log(error.message)
          consoleLogError(`error during move file ${png_in_new_sc}, delete directly`)

          throw error

        }
      }
    }

  } catch (error) {
    console.log(error.message)
    consoleLogError('error during making application letter directory')
    process.exit(ERROR_SETUP_NEW_APPLICATION_LETTER)
  }

}

function helloworld_setupNewApplicationLetter(){
  console.log('helloworld')
}

module.exports={
  helloworld_setupNewApplicationLetter,
  setupNewApplicationLetter
}