const {SRC_DIR} = require('./config')
const assert = require('assert')

const {helloworld, fetchJobsDb} = require(`${SRC_DIR}/fetchJobsDb`)

async function test_fetchJobsDb(){
  assert('keywords'==await fetchJobsDb({'self-test':['keywords']}))
}

function test_helloworld(){
  helloworld()
}

function test(){
  test_helloworld()
  test_fetchJobsDb()
}

test()