const fs = require('fs')

const {EXIT_UPDATE_IGNORE_DATABASE} = require('../../errors')
const { IGNORED_GLASSDOOR_DB_PATH, ENV_PRODUCTION } = require('../../config')
const { cosnoleLogHighlight } = require('../../util')

function writeDb(db_file, data_in){
  return fs.writeFileSync(db_file,data_in,{encoding:'utf-8'})
}

function readDb(db_file){
  return fs.readFileSync(db_file,{encoding:'utf-8'})
}

function readIgnoredJobDb(){
  return JSON.parse(readDb(IGNORED_CTGOODJOBS_DB_PATH))
}

function writeIgnoredJobDb(json_in){
  return writeDb(IGNORED_CTGOODJOBS_DB_PATH,JSON.stringify(json_in))
}

function getSortedUnique(a_in){
  return a_in.reduce( (a,x) => a.includes(x)? a: [...a, x], [] ).sort()
}

function addJobToIgnoreDb(){

}


module.exports={
  addJobToIgnoreDb,
  getSortedUnique,
  readIgnoredJobDb,
}
