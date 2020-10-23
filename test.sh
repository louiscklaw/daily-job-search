#!/usr/bin/env bash

set -ex

# cd utils
#   sh clean.sh
# cd ..

# rm -rf screencapture/*.png &
# rm -rf ignore/*.png &
wait

rm -rf appliation_letter_queue
mkdir -p appliation_letter_queue

# testing email
cp src/application_letter_template/email.md tests/email.md
# cp screencapture/jobs_sc_vice-president-group-risk-management-100003008023457.png
node tests/test_updateApplicationLetter.js

# testing getSettings
node tests/test_getSettings.js

node tests/test_fetchJobsDb.js

node tests/test_addJobToIgnoreDb.js
node tests/test_checkIfNewJobs.js

cd tests
  node test_pngjs_helloworld.js
cd ..

# node src/index.js
