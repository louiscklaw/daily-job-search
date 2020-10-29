const fs = require('fs')
const path = require('path')

const { new_job_sc_path } = require('../../config')

function getJobDetailScreenCapture(basic_filename_in){
  return path.resolve(`${new_job_sc_path}/${basic_filename_in}.png`)
}

module.exports={
  getJobDetailScreenCapture
}