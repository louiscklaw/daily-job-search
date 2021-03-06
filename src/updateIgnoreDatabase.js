const fs = require('fs')

const { EXIT_UPDATE_IGNORE_DATABASE } = require('./errors')
const { IGNORED_DB_PATH, ENV_PRODUCTION } = require('./config')

function writeDb(db_file, data_in){
  return fs.writeFileSync(db_file,data_in,{encoding:'utf-8'})
}

function readDb(db_file){
  return fs.readFileSync(db_file,{encoding:'utf-8'})
}

function readIgnoredJobDb(){
  return JSON.parse(readDb(IGNORED_DB_PATH))
}

function writeIgnoredJobDb(json_in){
  return writeDb(IGNORED_DB_PATH,JSON.stringify(json_in))
}
