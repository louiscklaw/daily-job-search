#!/usr/bin/env bash

set -ex

export SELF_TEST=1

# rm -rf application_letter_queue
# mkdir -p application_letter_queue

# # testing email
# cp src/application_letter_template/email.md tests/email.md
# # cp screencapture/jobs_sc_vice-president-group-risk-management-100003008023457.png
# node tests/test_updateApplicationLetter.js

# node tests/test_fetchJobsDb.js

# cd tests
#   node test_pngjs_helloworld.js
# cd ..

node tests/ctgoodjobs/index.js
node tests/glassdoor/index.js
node tests/jobsdb/index.js

# node src/index.js
