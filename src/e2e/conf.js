const localConfig = require('./config/local.json');
const mainRegularFlowTestsPath = 'suites/regular-flow/';
const mainNegativeFlowTestsPath = 'suites/negative-flow/';

exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'firefox'
    },

    specs: [
        mainRegularFlowTestsPath + 'login.spec.js',
        mainNegativeFlowTestsPath + 'loginRefusal.spec.js'
    ],

    jasmineNodeOpts: {
        showColors: true
    },

    baseUrl: localConfig.baseUrl,
    params: localConfig
    
};