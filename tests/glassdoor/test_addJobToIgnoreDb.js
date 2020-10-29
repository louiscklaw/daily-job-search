const fs = require('fs')
const path = require('path')

const {GLASSDOOR_HOME, TEST_HOME, GLASSDOOR_LIB_HOME} = require('../../src/config')
const {addJobToIgnoreDb} = require(`${GLASSDOOR_LIB_HOME}/addJobToIgnoreDb`)
const {getSortedUnique, deleteJobFromIgnoreDb} = require(`${GLASSDOOR_LIB_HOME}/deleteJobFromIgnoreDb`)

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
