#!/usr/bin/env node

const {consoleLogError, consoleLogWarn, ENV_PRODUCTION} = require('./config')
const {fetchJobsDb} = require('./fetchJobsDb');
const {pngCompare, testPngCompare} = require('./pngCompare');
const {setupNewApplicationLetter} = require('./setupNewApplicationLetter');

const {getJobsdbConfig} = require('./getSettings');

(async () => {

  try {

    await fetchJobsDb(getJobsdbConfig())
    // await testPngCompare()
    await pngCompare()

  } catch (error) {
    consoleLogError(error.message)

    if (ENV_PRODUCTION){
      throw error
      process.exit(-1)
    }else{
      throw error
    }
  }

  // try {


  //   await setupNewApplicationLetter()

  //   console.log('done')
  // } catch (e) {
  //   consoleLogError(e.message)
  //   throw e
  // }

})();
