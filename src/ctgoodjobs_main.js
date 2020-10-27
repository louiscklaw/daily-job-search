#!/usr/bin/env node

const {fetchCtgoodjobs} = require('./lib/fetch_ctgoodjobs');
const {checkIfNewJobs} = require('./lib/ctgoodjobs/checkIfNewJobs');

(async () => {
  try {
    await fetchCtgoodjobs()
    await checkIfNewJobs()

    console.log('done')

  } catch (error) {

  }
})()
