// import buyGoldPage from "../../page/buyGoldPage";
// import dashboardPage from "../../page/dashboardPage";
// import loginPage from "../../page/loginPage";
// import onBoardingPage from "../../page/onBoardingPage";
// import orderHistoryPage from "../../page/orderHistoryPage";
// import supportPage from "../../page/supportPage";
// import allureReporter from "@wdio/allure-reporter";

// describe("Test Suite", () => {
//   let chaiExpect;
//   before(async () => {
//     // Dynamically import chai
//     const chai = await import("chai");
//     global.chaiExpect = chai.expect;
//   });

//   beforeEach(async () => {
//     await driver.activateApp("com.brightskiesinc.mangmapp");
//     console.log("activate mngm app");
//   });

//   afterEach(async () => {
//     console.log("enter afterEach:");
//     await driver.terminateApp("com.brightskiesinc.mangmapp");
//     console.log("terminate mngm app");
//   });  

//   it.skip("[4.0] Verify that sell order Created successfully for the first time", async () => {
//     //where ownGrams>= goldToBeSold
//     try {
//       console.log("[4.0] Pass");
//     } catch (error) {
//       console.log("[4.0] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });

//   it.skip("[4.1] Verify that sell order Failed successfully", async () => {
//     //where ownGrams<< goldToBeSold
//     try {
//       console.log("[4.1] Pass");
//     } catch (error) {
//       console.log("[4.1] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });  
// });
