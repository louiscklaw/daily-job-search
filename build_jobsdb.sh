#!/usr/bin/env bash

set -ex

# cd utils
#   sh clean.sh
# cd ..

# rm -rf /home/logic/_workspace/jobs_search_tryout/appliation_letter_queue/jobs_sc_assistant-it-officer-100003008017229

# mv /home/logic/_workspace/jobs_search_tryout/ignore/jobs_sc_assistant-it-officer-100003008017229.png /home/logic/_workspace/jobs_search_tryout/screencapture/ | true


# rm -rf screencapture/*.*

node src/index.js information-technology qa

rm -rf *.html
rm -rf *.png
