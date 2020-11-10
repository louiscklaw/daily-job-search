const { assert } = require( 'console' )
const fs = require('fs')
const {
  JOBSDB_SRC_DIR,
  JOBSDB_LIB_DIR,
  JOBSDB_TEST_SRC_DIR ,
  JOBSDB_SAMPLE_HTML_DUMP
} = require( '../../config' )

function test_helloworld(){
  console.log('helloworld')
}

test_helloworld()
