
exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'firefox'
    },

    specs: [

    ],

    jasmineNodeOpts: {
        showColors: true
    },

    baseUrl: localConfig.baseUrl,
    params: localConfig
    
};