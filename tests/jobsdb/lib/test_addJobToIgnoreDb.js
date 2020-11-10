const { assert } = require( 'console' )
const fs = require('fs')
const {
  JOBSDB_SRC_DIR,
  JOBSDB_LIB_DIR,
  JOBSDB_TEST_SRC_DIR ,
  JOBSDB_SAMPLE_HTML_DUMP
} = require( '../../config' )


const {addJobToIgnoreDb, getSortedUnique} = require(`${JOBSDB_SRC_DIR}/addJobToIgnoreDb`)
const {deleteJobFromIgnoreDb} = require(`${JOBSDB_SRC_DIR}/deleteJobFromIgnoreDb`)

function test_getSortedUnique(){
  console.log(getSortedUnique([4,2,4,3,1,1]))
}

function test_addJobToIgnoreDb(){
  addJobToIgnoreDb('hello job')
}

function test_deleteJobFromIgnoreDb(){
  deleteJobFromIgnoreDb('hello job')
}

(async () => {
  await test_addJobToIgnoreDb()
  await test_deleteJobFromIgnoreDb()
  await test_getSortedUnique()
})()
