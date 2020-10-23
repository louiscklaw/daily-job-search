const {addJobToIgnoreDb, getSortedUnique} = require('../src/addJobToIgnoreDb')

const {deleteJobFromIgnoreDb} = require('../src/deleteJobFromIgnoreDb')

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