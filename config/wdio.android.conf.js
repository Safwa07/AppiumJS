const allure = require("allure-commandline");
// import * as os from "os";

const path = require("path");
let { join } = require("path");
// let Chai = require("chai");
exports.config = {
  runner: "local",
  path: "/",
  specs: [
    // "../PlayWithMocha.js",
    // "../test/specs/buyGold.test.js",
    "../test/specs/**",
    // "../test/specs/testRamzi.test.js",

    //   "../test/specs/buyGold.test.js"
  ],
  maxInstances: 1, //5
  capabilities: [
    {
      platformName: "Android",
      // platformVersion: "14",
      // deviceName: "Pixel2API34",
      // app: "../App/app-release14.apk",
      // automationName: "UiAutomator2",
      // "platformName": "Android",
      "appium:deviceName": "Pixel2API34",
      "appium:platformVersion": "14",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.brightskiesinc.mangmapp",
      "appium:appActivity":
        "com.brightskiesinc.mangm.presentation.main.MainActivity",

      // "appium:deviceName": "Pixel2API34",
      // "appium:platformVersion": "14",
      // "appium:automationName": "UiAutomator2",
      // "appium:app": join(process.cwd(), "App/app-release14.apk"),
    },
  ],
  logLevel: "error",
  // logLevel: "info",
  bail: 0,
  waitforTimeout: 30000, // Increase timeout to 30 seconds
  connectionRetryTimeout: 90000, // 90 seconds
  connectionRetryCount: 2,

  services: [
    "appium",
    // "@wdio/async",
    "@wdio/mocha-framework",
  ],
  baseUrl: "http://localhost",

  // port: 4723,
  // host: "localhost",

  appium: {
    command: "appium",
    arg: {
      address: "127.0.0.1",
      port: "4723",
    },
  },
  framework: "mocha",
  // reporters: ["spec"],
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        issueLinkTemplate: "https://mybugs-tracker/{}",
        tmsLinkTemplate: "https://my-tms/{}",
        // reportedEnvironmentVars: {
        //   os_platform: os.platform(),
        //   os_release: os.release(),
        //   os_version: os.version(),
        //   node_version: process.version,
        // }
      },
    ],
  ],
  mochaOpts: { ui: "bdd", timeout: 800000 },

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};
