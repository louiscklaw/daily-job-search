#!/usr/bin/env bash

set -ex

rm -rf /home/logic/_workspace/daily-job-search/main/screencapture/ctgoodjobs*.png

node src/ctgoodjobs_main.js
