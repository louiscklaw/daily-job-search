const { assert } = require( 'console' )
const fs = require('fs')
const {
  JOBSDB_SRC_DIR,
  JOBSDB_LIB_DIR,
  JOBSDB_TEST_SRC_DIR ,
  JOBSDB_SAMPLE_HTML_DUMP
} = require( '../../config' )

const {getFilenameByJobLink} = require(`${JOBSDB_SRC_DIR}/getFilenameByJobLink`)

function test_getFilenameByJobLink(){
  var test_set = [
    ['https://hk.jobsdb.com/hk/en/job/senior-engineer-quality-assurance-hse-over-salary-100003008009843?searchRequestToken=e0eea077-b27b-4904-8aa8-1a5e346e2974&amp;sectionRank=1&amp;jobId=100003008009843','senior-engineer-quality-assurance-hse-over-salary-100003008009843'],
    [
      'https://hk.jobsdb.com/hk/en/job/analyst-senior-analyst-it-quality-assurance-information-technology-100003008064582?sectionRank=1&amp;jobId=100003008064582&amp;token=0~c7820090-d32e-4b69-a1b7-9c303fadeb51',
      'analyst-senior-analyst-it-quality-assurance-information-technology-100003008064582'
    ]
  ]
  for(var i=0;i<test_set.length;i++){
    try {
      var question = test_set[i][0]
      var expected_answer = test_set[i][1]
      var answer = getFilenameByJobLink(question)
      assert(expected_answer==answer,`getting filename from job link failed ${answer}`)

    } catch (error) {
      consoleLogError(question)
    }
  }
}

test_getFilenameByJobLink()
