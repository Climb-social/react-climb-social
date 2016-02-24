#!/bin/bash
set -e
PATH=$(npm bin):$PATH

./node_modules/.bin/babel-tape-runner ./src/**/*-test.js
