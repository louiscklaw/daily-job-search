const path = require('path');
const chalk = require('chalk');
const moment = require('moment-timezone');


const SRC_HOME= __dirname;
const PROJ_HOME = path.resolve(`${__dirname}/..`);

const screencapture_path = `${PROJ_HOME}/screencapture`;

// ignored screencapture path
// local test
const ignore_sc_path = `${PROJ_HOME}/ignore`;
const gh_ignore_sc_path = `${PROJ_HOME}/ignored_screen_capture`;
const IGNORE_SC_PATH = ENV_PRODUCTION? gh_ignore_sc_path:ignore_sc_path;

const APPLICATION_LETTER_TEMPLATE_PATH = `${SRC_HOME}/application_letter_template`;
const APPLICATION_LETTER_QUEUE_PATH=`${PROJ_HOME}/appliation_letter_queue`

const new_job_sc_path = screencapture_path;

const NEW_SC_PATH= new_job_sc_path

// the channel name to post to
const debug_channel = '_debug';
const production_channel = 'jobs_alert';

// production means building on ci for cron job
const ENV_PRODUCTION=process.env.CI;
const conversationId=ENV_PRODUCTION ? production_channel : debug_channel;
// const conversationId = '_debug';

const TODAY = moment();
const TODAY_HK = TODAY.tz('Asia/Hong_Kong').format('LL');

const SETTINGS_FILE_LOC = `${SRC_HOME}/settings.yml`

function consoleLogWarn(text_input){
  console.warn(chalk.yellow(`WARN: ${text_input}`))
}

function consoleLogError(text){
  console.error(chalk.red(`ERROR: ${text}`))
}

if (conversationId==debug_channel){
  consoleLogWarn('will post to slack debug channel');
}

module.exports={
  PROJ_HOME,
  screencapture_path,
  ignore_sc_path,
  new_job_sc_path,
  IGNORE_SC_PATH,
  NEW_SC_PATH,
  conversationId,

  consoleLogWarn,
  consoleLogError,

  APPLICATION_LETTER_TEMPLATE_PATH,
  APPLICATION_LETTER_QUEUE_PATH,

  TODAY_HK,
  SETTINGS_FILE_LOC,
  ENV_PRODUCTION
}