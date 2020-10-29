#!/usr/bin/env bash

set -ex

cp /home/logic/_workspace/daily-job-search/main/tests/glassdoor/screencapture/glassdoor_insideplantoperationsqualityassuranceengineer_6036.png /home/logic/_workspace/daily-job-search/main/screencapture/glassdoor_insideplantoperationsqualityassuranceengineer_6036.png

node tests/glassdoor/index.js

# node tests/lib/ctgoodjobs/test_addJobToIgnoreDb.js
