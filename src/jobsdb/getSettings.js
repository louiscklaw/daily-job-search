const fs = require('fs')
const YAML = require('yaml')

const {cosnoleLogHighlight} = require('./util')
const {SETTINGS_FILE_LOC} = require('../config')

function getSettings(setting_file_in=SETTINGS_FILE_LOC){
  cosnoleLogHighlight(`using settings from ${SETTINGS_FILE_LOC}`)
  const file = fs.readFileSync(setting_file_in, 'utf8')
  const settings_json = YAML.parse(file)

  // running jobsdb keyword search
  jobsdb_search_config = settings_json.fetch_settings
  return jobsdb_search_config
}

function getJobsdbConfig(){
  return getSettings().jobsdb
}

function getCtgoodjobsConfig(){
  return getSettings().ctgoodjobs
}

module.exports={
  getSettings,
  getJobsdbConfig,
  getCtgoodjobsConfig
}
