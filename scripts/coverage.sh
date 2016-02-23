#!/bin/bash
set -e
PATH=$(npm bin):$PATH

rm -rf coverage
./node_modules/.bin/istanbul cover -x **/*-test.js ./node_modules/.bin/babel-tape-runner ./src/**/*-test.js
