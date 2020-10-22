const fs = require('fs')
const assert = require('assert')
const YAML = require('yaml')

const {PROJ_HOME, TEST_DIR, SRC_DIR} = require('./config')
const {consoleLogWarn, consoleLogError} = require('./util')
const {getSettings} = require(`${SRC_DIR}/getSettings`)

function test_getJobsdbConfig(){
  var jobsdb_fetch_settings = test_getSettings().jobsdb
  var categories = Object.keys(jobsdb_fetch_settings)
  var keywords = jobsdb_fetch_settings.test_category

  assert(categories.includes('test_category'))
  assert(keywords.includes('test_keyword1'))
  assert(keywords.includes('test_keyword2'))

}

function test_getSettings(){
  var temp = getSettings(`${TEST_DIR}/test.yaml`)
  return temp
}


function test(){
  test_getSettings()
  test_getJobsdbConfig()
}

test()