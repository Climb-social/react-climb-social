#!/bin/bash
set -e
PATH=$(npm bin):$PATH

rm -rf $PWD/example/build
./node_modules/.bin/webpack --config "$PWD/example/webpack.config.js" -p
