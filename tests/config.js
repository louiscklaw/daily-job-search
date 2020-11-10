const path = require('path')


const TEST_DIR=__dirname
const PROJ_HOME=path.resolve(`${TEST_DIR}/..`)

const SRC_DIR = path.resolve(`${PROJ_HOME}/src`)
const LIB_DIR = path.resolve(`${SRC_DIR}/lib`)

// jobsdb
const JOBSDB_SRC_DIR = path.resolve(`${SRC_DIR}/jobsdb`)
const JOBSDB_LIB_DIR = path.resolve(`${JOBSDB_SRC_DIR}/lib`)
const JOBSDB_TEST_SRC_DIR = path.resolve(`${TEST_DIR}/jobsdb`)
const JOBSDB_SAMPLE_HTML_DUMP = path.resolve(`${JOBSDB_TEST_SRC_DIR}/sample_page`)

const LIB_CTGOODJOBS = path.resolve(`${LIB_DIR}/ctgoodjobs`)

module.exports={
  PROJ_HOME,
  TEST_DIR,
  SRC_DIR,
  LIB_DIR,
  LIB_CTGOODJOBS,

  JOBSDB_SRC_DIR,
  JOBSDB_LIB_DIR,
  JOBSDB_TEST_SRC_DIR,
  JOBSDB_SAMPLE_HTML_DUMP

}