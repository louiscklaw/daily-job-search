const fs = require('fs')

const {SRC_HOME, TEST_HOME} = require('../../config')

const test_glassdoor_index_file = fs.readFileSync(`${TEST_HOME}/test_glassdoor_index.html`,{encoding:'utf-8'})

function getTestIndexPage(){
  return test_glassdoor_index_file
}

module.exports ={
  getTestIndexPage
}
