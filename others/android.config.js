exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 800000,
        require: ('node_modules/@babel/register')
    },
    
    waitForTimeout: 10000,
    maxInstances: 1,
    // sync: true,
    specs: [
        './PlayWithMocha.js'
        // './tests/TC001_LogIn.js'
    ],
    capabilities: [{
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:udid": "emulator-5554",
        "appium:appPackage": "com.brightskies.volt_edge",
        "appium:appActivity": ".MainActivity",
    }],

}
