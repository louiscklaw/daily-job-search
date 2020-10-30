#!/usr/bin/env node

const { ERROR_RUN_ERROR } = require('./errors')
const {consoleLogError, consoleLogWarn, ENV_PRODUCTION} = require('./config')

const {fetchJobsDb} = require('./fetchJobsDb');
const {pngCompare, testPngCompare} = require('./pngCompare');
const {setupNewApplicationLetter} = require('./setupNewApplicationLetter');
const {addJobToIgnoreDb} = require('./addJobToIgnoreDb')
const {checkIfNewJobs} = require('./checkIfNewJobs')

const {getJobsdbConfig} = require('./getSettings');

(async () => {

  try {

    await fetchJobsDb(getJobsdbConfig())
    await checkIfNewJobs()

    // TODO: remove
    // await pngCompare()

    await setupNewApplicationLetter()

  } catch (error) {
    consoleLogError(error.message)

    if (ENV_PRODUCTION){
      throw error
      process.exit( ERROR_RUN_ERROR )
    }else{
      throw error
    }
  }

  // try {
  //   console.log('done')
  // } catch (e) {
  //   consoleLogError(e.message)
  //   throw e
  // }

})();
