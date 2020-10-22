
const fs = require('fs')
const assert = require('assert')
const YAML = require('yaml')

const {PROJ_HOME, TEST_DIR, SRC_DIR} = require('./config')
const {cosnoleLogHighlight, consoleLogWarn, consoleLogError} = require(`${SRC_DIR}/util`)

function test_cosnoleLogHighlight(){
  cosnoleLogHighlight('i am status')
}

function test_consoleLogError(){
  consoleLogError('i am Error')
}

function test_consoleLogWarn(){
  consoleLogWarn('i am warning')
}

function test(){
  test_consoleLogWarn()
  test_consoleLogError()
  test_cosnoleLogHighlight()
}

test()