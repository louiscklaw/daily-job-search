const fs = require('fs')
const {ENV_PRODUCTION} = require('../../config')
const {consoleLogError} = require('../util')

function getJobIdFromLink( x ) {

  if ( !ENV_PRODUCTION ) {
    console.log( `x: ${x}` )
  }

  try {
    var job_id = x.match( /jobId=(\d+)/ )[ 1 ]

  } catch ( error ) {
    consoleLogError( x )
  }
  return job_id
}


module.exports = {
  getJobIdFromLink
}