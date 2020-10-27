#!/usr/bin/env node

const {fetchCtgoodjobs} = require('./lib/fetch_ctgoodjobs');
const {checkIfNewJobs} = require('./lib/ctgoodjobs/checkIfNewJobs');
const {setupNewApplicationLetter} = require('./lib/ctgoodjobs/setupNewApplicationLetter');
(async () => {
  try {
    await fetchCtgoodjobs()
    await checkIfNewJobs()
    await setupNewApplicationLetter()


    console.log('done')

  } catch (error) {

  }
})()
