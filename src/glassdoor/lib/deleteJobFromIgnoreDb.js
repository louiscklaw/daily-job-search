const fs = require('fs')

const { EXIT_UPDATE_IGNORE_DATABASE } = require('../../errors')
const { IGNORED_DB_PATH, ENV_PRODUCTION } = require('../../config')

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

async function deleteJobFromIgnoreDb(job_to_delete){
  try {
    var temp = await readIgnoredJobDb()
    temp = temp.filter(x => x != job_to_delete)
    await writeIgnoredJobDb(temp)

    return

  } catch (error) {
    process.exit( EXIT_UPDATE_IGNORE_DATABASE )
  }
}

module.exports={
  deleteJobFromIgnoreDb,
  getSortedUnique,
  readIgnoredJobDb
}