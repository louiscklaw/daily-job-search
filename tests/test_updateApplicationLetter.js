
const {updateApplicationLetter} = require('../src/updateApplicationLetter')


function test_updateApplicationLetter(){
  updateApplicationLetter('/home/logic/_workspace/jobs_search_tryout/tests/email.md','www.google.com')
}

test_updateApplicationLetter()
