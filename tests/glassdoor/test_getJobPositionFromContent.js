const { assert } = require( 'console' )
const fs = require('fs')
const path = require('path')

const {SRC_HOME, TEST_HOME} = require('../../src/config')

const GLASSDOOR_SRC_HOME = path.resolve(`${SRC_HOME}/glassdoor`)
const GLASSDOOR_TEST_HOME = path.resolve(`${TEST_HOME}/glassdoor`)

const {getJobPositionFromContent} = require(`${GLASSDOOR_SRC_HOME}/lib/getJobPositionFromContent`)

const test_glassdoor_jobdetail=fs.readFileSync(`${GLASSDOOR_TEST_HOME}/test_glassdoor_jobdetail.html`,{encoding:'utf-8'})

function test_getJobPositionFromContent(){
  console.log(getJobPositionFromContent(test_glassdoor_jobdetail))
  assert(getJobPositionFromContent(test_glassdoor_jobdetail),'checking test_getJobPositionFromContent failed')
}

function test_getJobPositionFromContentHelloworld(){
  console.log('test_getJobPositionFromContent')
}

function test(){
  test_getJobPositionFromContent()
}

test()
