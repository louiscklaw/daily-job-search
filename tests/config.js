const path = require('path')


const TEST_DIR=__dirname
const PROJ_HOME=path.resolve(`${TEST_DIR}/..`)

const SRC_DIR = path.resolve(`${PROJ_HOME}/src`)
const LIB_DIR = path.resolve(`${SRC_DIR}/lib`)
const LIB_CTGOODJOBS = path.resolve(`${LIB_DIR}/ctgoodjobs`)


console.log(SRC_DIR)

module.exports={
  PROJ_HOME,
  TEST_DIR,
  SRC_DIR,
  LIB_DIR,
  LIB_CTGOODJOBS
}