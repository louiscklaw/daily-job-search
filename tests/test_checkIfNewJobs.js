const assert = require('assert')
const { checkIfNewJobs } = require('../src/checkIfNewJobs')

function test_checkIfNewJobs(){
  assert(checkIfNewJobs('helloworld') == false, 'checkIfNewJobs failed' )
  assert(checkIfNewJobs('hello job') == true, 'checkIfNewJobs failed' )
}

function test(){
  test_checkIfNewJobs()
}

test()