#!/usr/bin/env bash

set -ex

# touch /home/logic/_workspace/daily-job-search/main/screencapture/ctgoodjobs_manager-product-supply-analytics-product-owner-1-year-contract_06732383.png | true

# rm -rf /home/logic/_workspace/daily-job-search/main/application_letter_queue/ctgoodjobs_manager-product-supply-analytics-product-owner-1-year-contract_06732383 |true

# rm -rf /home/logic/_workspace/daily-job-search/main/application_letter_queue/ctgoodjobs_manager-product-supply-analytics-product-owner-1-year-contract_06732383 |true

cd screencapture
  rm -rf *.png
cd ..

cd application_letter_queue
  rm -rf ctgoodjobs_*
cd ..

echo [] > /home/logic/_workspace/daily-job-search/main/db/ignored_ctgoodjobs.json

node ./src/ctgoodjobs_main.js
