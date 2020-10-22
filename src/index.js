#!/usr/bin/env node

const {consoleLogError, consoleLogWarn, ENV_PRODUCTION} = require('./config')
const {fetchJobsDb} = require('./fetchJobsDb');
const {pngCompare} = require('./pngCompare');
const {setupNewApplicationLetter} = require('./setupNewApplicationLetter');

const {getJobsdbConfig} = require('./getSettings');

(async () => {

  try {

    await fetchJobsDb(getJobsdbConfig())

  } catch (error) {
    consoleLogError(error.message)

    if (ENV_PRODUCTION){
      process.exit(-1)
    }else{
      throw error
    }
  }

  try {

    await pngCompare()
    await setupNewApplicationLetter()

    console.log('done')
  } catch (e) {
    consoleLogError(e.message)
    throw e
  }

})();
