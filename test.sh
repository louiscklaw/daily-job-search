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

cd tests
  node test_pngjs_helloworld.js
cd ..


cd /tmp
  rm -rf ignored_screen_capture | true
  git clone git@github.com:louiscklaw/daily-job-search.git -b ignored_screen_capture ignored_screen_capture
cd ..
# node src/index.js
