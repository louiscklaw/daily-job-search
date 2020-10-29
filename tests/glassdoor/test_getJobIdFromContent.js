const { assert } = require( 'console' )
const fs = require('fs')
const path = require('path')

const {SRC_HOME, TEST_HOME} = require('../../src/config')

const GLASSDOOR_SRC_HOME = path.resolve(`${SRC_HOME}/glassdoor`)
const GLASSDOOR_TEST_HOME = path.resolve(`${TEST_HOME}/glassdoor`)

const {getJobIdFromContent} = require(`${GLASSDOOR_SRC_HOME}/lib/getJobIdFromContent`)

const test_glassdoor_jobdetail=fs.readFileSync(`${GLASSDOOR_TEST_HOME}/test_glassdoor_jobdetail.html`,{encoding:'utf-8'})

function test_getJobIdFromContent(){
  assert(getJobIdFromContent(test_glassdoor_jobdetail),'checking test_getJobIdFromContent failed')
}

function test_getJobIdFromContentHelloworld(){
  console.log('test_getJobIdFromContent')
}

function test(){
  test_getJobIdFromContent()
}

test()
