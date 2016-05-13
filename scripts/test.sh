#!/bin/bash
set -e
PATH=$(npm bin):$PATH

BABEL_DISABLE_CACHE=1 NODE_ENV=test ./node_modules/.bin/babel-tape-runner ./src/**/*-test.js
