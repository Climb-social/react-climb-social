#!/bin/sh

# build minified standalone version in dist
rm -rf dist
NODE_ENV=production ./node_modules/.bin/webpack --output-filename=dist/react-climb-social.js
NODE_ENV=production ./node_modules/.bin/webpack --output-filename=dist/react-climb-social.min.js --optimize-minimize

# build ES5 modules to lib
rm -rf lib
./node_modules/.bin/babel src --out-dir lib --ignore="**/*-test.js"
