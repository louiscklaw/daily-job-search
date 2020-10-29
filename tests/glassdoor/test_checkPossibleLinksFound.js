const { assert } = require( 'console' )
const fs = require('fs')
const path = require('path')

const {SRC_HOME, TEST_HOME} = require('../../src/config')

const GLASSDOOR_SRC_HOME = path.resolve(`${SRC_HOME}/glassdoor`)
const GLASSDOOR_TEST_HOME = path.resolve(`${TEST_HOME}/glassdoor`)

const {checkPossibleLinksFound} = require(`${GLASSDOOR_SRC_HOME}/lib/checkPossibleLinksFound`)

const test_index_raw_file=fs.readFileSync(`${GLASSDOOR_TEST_HOME}/test_glassdoor_index.html`,{encoding:'utf-8'})

function test_checkPossibleLinksFound(){
  assert(checkPossibleLinksFound(test_index_raw_file),'checking test_checkPossibleLinksFound failed')
}

function test_checkPossibleLinksFoundHelloworld(){
  console.log('test_checkPossibleLinksFound')
}

function test(){
  test_checkPossibleLinksFound()
}

test()
