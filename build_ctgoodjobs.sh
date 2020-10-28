#!/usr/bin/env bash

set -ex

rm -rf /home/logic/_workspace/daily-job-search/main/screencapture/ctgoodjobs*.png

node src/ctgoodjobs_main.js

# echo '' > test_result.out
# echo 'test result for length 1' >> test_result.out
# node src/ctgoodjobs_main.js 1 >> test_result.out
# echo 'test result for length 2' >> test_result.out
# node src/ctgoodjobs_main.js 2 >> test_result.out
# echo 'test result for length 3' >> test_result.out
# node src/ctgoodjobs_main.js 3 >> test_result.out
# echo 'test result for length 4' >> test_result.out
# node src/ctgoodjobs_main.js 4 >> test_result.out
# echo 'test result for length 5' >> test_result.out
# node src/ctgoodjobs_main.js 5 >> test_result.out
# echo 'test result for length 6' >> test_result.out
# node src/ctgoodjobs_main.js 6 >> test_result.out
# echo 'test result for length 7' >> test_result.out
# node src/ctgoodjobs_main.js 7 >> test_result.out
# echo 'test result for length 8' >> test_result.out
# node src/ctgoodjobs_main.js 8 >> test_result.out
# echo 'test result for length 9' >> test_result.out
# node src/ctgoodjobs_main.js 9 >> test_result.out
