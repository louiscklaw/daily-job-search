const { assert } = require( 'console' )
const fs = require('fs')
const path = require('path')

const {SRC_HOME, TEST_HOME} = require('../../src/config')

const GLASSDOOR_SRC_HOME = path.resolve(`${SRC_HOME}/glassdoor`)
const GLASSDOOR_TEST_HOME = path.resolve(`${TEST_HOME}/glassdoor`)

const {getFilenameFromPageContent} = require(`${GLASSDOOR_SRC_HOME}/lib/getFilenameFromPageContent`)

const test_job_detail_file=fs.readFileSync(`${GLASSDOOR_TEST_HOME}/test_glassdoor_jobdetail.html`,{encoding:'utf-8'})

function test_getFilenameFromPageContent(){
  console.log(getFilenameFromPageContent(test_job_detail_file))
  assert(getFilenameFromPageContent(test_job_detail_file),'checking test_getFilenameFromPageContent failed')
}

function test_getFilenameFromPageContentHelloworld(){
  console.log('test_getFilenameFromPageContent')
}

function test(){
  test_getFilenameFromPageContent()
}

test()
