#!/usr/bin/env node

const {consoleLogError, consoleLogWarn} = require('./config')
const {fetchJobsDb} = require('./fetchJobsDb');
const {pngCompare} = require('./pngCompare');
const {setupNewApplicationLetter} = require('./setupNewApplicationLetter');

const {getJobsdbConfig} = require('./getSettings');

(async () => {

  try {
    await fetchJobsDb(getJobsdbConfig())

    await pngCompare()
    await setupNewApplicationLetter()

    console.log('done')
  } catch (e) {
    consoleLogError(e.message)
    throw e
  }

})();
