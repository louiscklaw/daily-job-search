const fs = require('fs')

const { EXIT_UPDATE_IGNORE_DATABASE } = require('./errors')
const { IGNORED_DB_PATH, ENV_PRODUCTION } = require('./config')
const { cosnoleLogHighlight } = require('./util')

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

function getSortedUnique(a_in){
  return a_in.reduce( (a,x) => a.includes(x)? a: [...a, x], [] ).sort()
}

async function addJobToIgnoreDb(job_to_add){
  try {
    cosnoleLogHighlight('adding job to ignore db ', job_to_add)
    var temp = await readIgnoredJobDb()
    temp = getSortedUnique([...temp, job_to_add])

    await writeIgnoredJobDb(temp)

    return

  } catch (error) {
    process.exit( EXIT_UPDATE_IGNORE_DATABASE )
  }
}

module.exports={
  addJobToIgnoreDb,
  getSortedUnique,
  readIgnoredJobDb
}