const path = require('path')


const TEST_DIR=__dirname
const PROJ_HOME=path.resolve(`${TEST_DIR}/..`)
const SRC_DIR = path.resolve(`${PROJ_HOME}/src`)

console.log(SRC_DIR)

module.exports={
  PROJ_HOME,
  TEST_DIR,
  SRC_DIR
}