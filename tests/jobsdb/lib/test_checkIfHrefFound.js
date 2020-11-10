const { assert } = require( 'console' )
const fs = require('fs')
const {
  JOBSDB_SRC_DIR,
  JOBSDB_LIB_DIR,
  JOBSDB_TEST_SRC_DIR ,
  JOBSDB_SAMPLE_HTML_DUMP
} = require( '../../config' )

const {checkIfHrefFound} = require(`${JOBSDB_LIB_DIR}/checkIfHrefFound`)

function test_checkIfHrefFound(){
  console.log(JOBSDB_SAMPLE_HTML_DUMP)
  var sample_search_result_success = fs.readFileSync(`${JOBSDB_SAMPLE_HTML_DUMP}/sample_search_result_success.html`,{encoding:'utf-8'})
  var empty_content = fs.readFileSync(`${JOBSDB_SAMPLE_HTML_DUMP}/empty.html`,{encoding:'utf-8'})
  var helloworld_content = fs.readFileSync(`${JOBSDB_SAMPLE_HTML_DUMP}/helloworld.html`,{encoding:'utf-8'})
  var no_href_found_content = fs.readFileSync(`${JOBSDB_SAMPLE_HTML_DUMP}/no_href_found.html`,{encoding:'utf-8'})


  // sanity test
  assert(checkIfHrefFound(sample_search_result_success),'cannot find href link from content')
  assert(checkIfHrefFound(empty_content)==false,'cannot handle empty content')
  assert(checkIfHrefFound(helloworld_content)==false,'cannot handle helloworld content')
  assert(checkIfHrefFound(no_href_found_content),'cannot handle no_href_found content')
}

test_checkIfHrefFound()

function helloworld(){
  console.log('helloworld')
}

module.exports={
  helloworld,
}