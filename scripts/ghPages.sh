#!/bin/bash
set -e
PATH=$(npm bin):$PATH

./node_modules/.bin/gh-pages -d example
