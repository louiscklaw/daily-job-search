#!/usr/bin/env node

const { consoleLogError } = require('../config');

const { fetchGlassdoor } = require('./lib/fetch_glassdoor');
const { checkIfNewJobs } = require('./lib/checkIfNewJobs');
const { setupNewApplicationLetter } = require('./lib/setupNewApplicationLetter');
// const { ENV_PRODUCTION } = require( '../config' );

const {getGlassdoorConfig} = require('./lib/getSettings');

(async () => {
  try {
    await fetchGlassdoor(getGlassdoorConfig())
    await checkIfNewJobs()
    await setupNewApplicationLetter()

    console.log('done')
  } catch (error) {
    throw error
  }

})()