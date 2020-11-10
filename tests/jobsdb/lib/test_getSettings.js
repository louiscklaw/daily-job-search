const fs = require('fs')
const assert = require('assert')
const YAML = require('yaml')

const {
  JOBSDB_SRC_DIR,
  JOBSDB_LIB_DIR,
  TEST_DIR,
  JOBSDB_TEST_SRC_DIR ,
  JOBSDB_SAMPLE_HTML_DUMP,
  ENV_PRODUCTION,
} = require( '../../config' )

const {consoleLogWarn, consoleLogError} = require(`${TEST_DIR}/util`)
const {getSettings} = require(`${JOBSDB_SRC_DIR}/getSettings`)

function test_getJobsdbConfig(){
  var jobsdb_fetch_settings = test_getSettings().jobsdb
  var categories = Object.keys(jobsdb_fetch_settings)
  var keywords = jobsdb_fetch_settings.test_category

  assert(categories.includes('test_category'))
  assert(keywords.includes('test_keyword1'))
  assert(keywords.includes('test_keyword2'))

}

function test_getSettings(){
  if (!ENV_PRODUCTION){
    console.log(`${TEST_DIR}/test.yaml`)
  }
  var temp = getSettings(`${TEST_DIR}/test.yaml`)
  return temp
}


function test(){
  test_getSettings()
  test_getJobsdbConfig()
}

test()