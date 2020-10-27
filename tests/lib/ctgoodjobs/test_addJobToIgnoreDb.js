
const {SRC_DIR, LIB_CTGOODJOBS} = require('../../config');
const {addJobToIgnoreDb, helloworld_addJobToIgnoreDb, getSortedUnique} = require(`${LIB_CTGOODJOBS}/addJobToIgnoreDb`);
const {deleteJobFromIgnoreDb} = require(`${LIB_CTGOODJOBS}/deleteJobFromIgnoreDb`);

function helloworld(){
  helloworld_addJobToIgnoreDb()
}


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
