#!/usr/bin/env node

const {consoleLogError} = require('../config');

const {fetchCtgoodjobs} = require('./lib/fetch_ctgoodjobs');
const {checkIfNewJobs} = require('./lib/ctgoodjobs/checkIfNewJobs');
const {setupNewApplicationLetter} = require('./lib/ctgoodjobs/setupNewApplicationLetter');
const { ENV_PRODUCTION } = require('../config');

const {getCtgoodjobsConfig} = require('./getSettings');

(async () => {
  try {
    await fetchCtgoodjobs(getCtgoodjobsConfig())
    await checkIfNewJobs()
    await setupNewApplicationLetter()

    console.log('done')

  } catch (error) {
    consoleLogError(error.message)

    if (ENV_PRODUCTION){
      throw error
      process.exit( ERROR_RUN_ERROR)
    } else{
      throw error
    }
  }

})()
