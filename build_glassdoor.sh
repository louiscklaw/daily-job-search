#!/usr/bin/env bash

set -ex

# cd utils
#   sh clean.sh
# cd ..

# rm -rf /home/logic/_workspace/jobs_search_tryout/application_letter_queue/jobs_sc_assistant-it-officer-100003008017229

# mv /home/logic/_workspace/jobs_search_tryout/ignore/jobs_sc_assistant-it-officer-100003008017229.png /home/logic/_workspace/jobs_search_tryout/screencapture/ | true


# rm -rf screencapture/*.*

rm -rf *.html
rm -rf *.png

cp \
  /media/logic/B829-3585/Queue/20201027/ctgoodjobs_test-manager-enterprise_06728272/ctgoodjobs_test-manager-enterprise_06728272.png \
  /home/logic/_workspace/daily-job-search/main/screencapture/glassdoor_test_123.png

node src/glassdoor/index.js
