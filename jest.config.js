require('dotenv').config()

module.exports = {

    setupFilesAfterEnv: ["<rootDir>/playwright.config.js"],

    preset: "jest-playwright-preset",

    testTimeout: 90000,

    testMatch: [
      '<rootDir>/src/tests/test.test.js',
    ],

    testEnvironmentOptions: {
        'jest-playwright': {
            launchOptions: {
                headless: false,
                ignoreHTTPSErrors: true,
                // viewport: {
                //     width: 1440,
                //     height: 900
                // }
            },
            contextOptions: {
                // headless: false,
                // ignoreHTTPSErrors: true,
                // viewport: {
                //     width: 1440,
                //     height: 900
                // }
            },
            // browsers: ['chromium', 'firefox', 'webkit'],
            browsers: ['chromium'],
            // devices: ["iPhone 12"],
        },
    },

    reporters: [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "expand": true,
            "openReport": false
        }]
    ],
}