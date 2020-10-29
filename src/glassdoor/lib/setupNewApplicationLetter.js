const fs = require('fs-extra');
const sharp = require('sharp');

const {ERROR_SETUP_NEW_APPLICATION_LETTER} = require('../errors')

const {
  IGNORE_SC_PATH,
  NEW_SC_PATH,
  APPLICATION_LETTER_QUEUE_PATH,
  CTGOODJOBS_APPLICATION_LETTER_TEMPLATE_PATH
} = require( '../../config' );

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
    .filter(x => x.search(/glassdoor_.+?.png/) > -1)


  try {

  } catch (error) {

  }
}

module.exports={
  setupNewApplicationLetter
}