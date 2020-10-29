const { assert } = require( 'console' )
const fs = require('fs')
const path = require('path')

const {SRC_HOME, TEST_HOME} = require('../../src/config')

const GLASSDOOR_SRC_HOME = path.resolve(`${SRC_HOME}/glassdoor`)
const GLASSDOOR_TEST_HOME = path.resolve(`${TEST_HOME}/glassdoor`)

const {grepGlassdoorJobLink} = require(`${GLASSDOOR_SRC_HOME}/lib/grepGlassdoorJobLink`)

const test_index_raw_file=fs.readFileSync(`${GLASSDOOR_TEST_HOME}/test_glassdoor_index.html`,{encoding:'utf-8'})

function test_grepGlassdoorJobLink(){

}

function test(){
  test_grepGlassdoorJobLink()
}

test()
