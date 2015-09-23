var path = require('path');

var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'inline-source-map';
webpackConfig.module = {
    loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
    ],

    noParse: [
        path.join('node_modules', '/cheerio')
    ],

    postLoaders: [
        // instrument only testing sources with Istanbul
        {
            test: /\.jsx$/,
            include: path.resolve('src/components/'),
            loader: 'istanbul-instrumenter'
        }
    ]
};
webpackConfig.externals = [];


module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        files: [
            'tests.webpack.js'
        ],

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        plugins: [
            require('karma-webpack'),
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-coverage'
        ],

        coverageReporter: {

            reporters: [
                { type: 'text' },
                { type: 'html' },
                { type: 'json', subdir: '.', file: 'coverage.json' }
            ]
        }
    });
};
