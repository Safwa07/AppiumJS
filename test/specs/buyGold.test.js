// import buyGoldPage from "../../page/buyGoldPage";
// import dashboardPage from "../../page/dashboardPage";
// import gold from "../../page/gold";
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
//     console.log("Closing the session with ID:");
//     // await driver.activateApp('com.google.android.apps.messaging');
//     await driver.terminateApp("com.brightskiesinc.mangmapp");
//     console.log("terminate mngm app");
//   });

//   it("[1] Verify that login page is Exist & Visibile", async () => {
//     try {
//       await loginPage.mobilePhoneFragment_IntialValidation();
//       console.log("[1] Pass");
//     } catch (error) {
//       console.log("[1] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });

//   //2.0 has an error does not see info message.
//   it("[2.0] Verify that new user with missing info directed to customer support successfully", async () => {
//     try {
//       await loginPage.loginWithMezaId("123456789");
//       await onBoardingPage.onBoardingScreen1();
//       await dashboardPage.missingInfo();
//       /** lesa na2es actions */
//       console.log("[2.0] Pass");
//     } catch (error) {
//       console.log("[2.0] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });

//   it("[2.1] Verify that a user's balance = 0 can't click on sell btn", async () => {
//     //103795791 id:136
//     try {
//       await loginPage.loginWithMezaId(); //use the default which is me BS_03
//       await onBoardingPage.onBoardingScreen1();
//       await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
//       await dashboardPage.newUserDashboard();
//       console.log("[2.1] Pass");
//     } catch (error) {
//       console.log("[2.1] Fail");
//       throw error;
//     }
//   });

//   it("[2.2] Verify that existing user could login to gold page successfully", async () => {
//     try {
//       await loginPage.loginWithMezaId("103258652"); //Mohand meza Id
//       await onBoardingPage.onBoardingScreen1();
//       await dashboardPage.dashboardInitialValidation(); //dashboard for user has orders
//       await dashboardPage.existedUserDashboard();
//       console.log("[2.2] Pass");
//     } catch (error) {
//       console.log("[2.2] Fail");
//       throw error;
//     }
//   });

//   it("[3.0] Verify that buy order Created successfully for the first time", async () => {
//     try {
//       await loginPage.loginWithMezaId("103258652");
//       await onBoardingPage.onBoardingScreen2();
//       await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
//       await dashboardPage.clickOnBuyBtn();
//       await buyGoldPage.packagesValidation();
//       await buyGoldPage.customizeValidation();
//       await buyGoldPage.buyGoldAndProceed();
//       //NationalID page validation and upload images
//       await buyInvoiceSummaryPage.buyInvoiceValidation();
//       await buyInvoiceSummaryPage.buyInvoiceCalculation();
//       await buyInvoiceSummaryPage.clickOnSubmitBtn();

//       //check status in oreder is in progress
//       await ordersPage.selectFirstItem();
//       await ordersPage.transactionDetailsValidation();
//       //check that status is inprogress or completed
//       await ordersPage.contactSupportVerification();
//       await ordersPage.shareTrx();
//       await ordersPage.returnToPerviousScreen();
//       //check status in oreder is in completed/Failed
//       //need to check that after buy successful sell btn is clickable now
//       console.log("[3.0] Pass");

//     } catch (error) {
//       console.log("[3.0] Fail");
//       throw error;
//     }
//   });

//   it.skip("[3.1] Verify that buy order Failed successfully", async () => {
//     // buy gold by balance grater than your balance by 0.1gram or 1LE
//     try {
//       await loginPage.loginWithMezaId("103258652");
//       await onBoardingPage.onBoardingScreen2();
//       await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
//       await dashboardPage.clickOnBuyBtn();
//       await buyGoldPage.packagesValidation();
//       await buyGoldPage.customizeValidation();
//       await buyGoldPage.buyGoldAndProceed();
//       //NationalID page validation and upload images
//       await buyInvoiceSummaryPage.buyInvoiceValidation();
//       await buyInvoiceSummaryPage.buyInvoiceCalculation();
//       await buyInvoiceSummaryPage.clickOnSubmitBtn();

//       //check status in oreder is in progress
//       await ordersPage.selectFirstItem();
//       await ordersPage.transactionDetailsValidation();
//       //check that status is inprogress or Failed
//       await ordersPage.contactSupportVerification();
//       await ordersPage.shareTrx();
//       await ordersPage.returnToPerviousScreen();
//       //check status in oreder is in Failed
//       //need to check that after buy successful sell btn is not clicable if balance is 0 gold
//       console.log("[3.1] Pass");
//     } catch (error) {
//       console.log("[3.1] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
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

//   it.skip("[5.0]", async () => {
//     try {
//       console.log("[5.0] Pass");
//     } catch (error) {
//       console.log("[5.0] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });
//   it.only("[6.0] Verify that order details work successfully ", async () => {
//     try {
//       await loginPage.loginWithMezaId("103258652"); //Mohand meza Id
//       await onBoardingPage.onBoardingScreen1();
//       await dashboardPage.dashboardInitialValidation(); //dashboard for user has orders
//       await dashboardPage.clickOnOrderTap();
//       await dashboardPage.lastOrderValidation();
//       await dashboardPage.clickOnLastOrder();
//       await orderHistoryPage.orderHistoryInvoiceSummary();
//       await orderHistoryPage.checkStatusTypeDateGrams(
//         "Failed",
//         "Buy",
//         "24 May, 2:35 PM",
//         "11.4"
//       );
//       await orderHistoryPage.returnToPerviousScreen();

//       console.log("[6.0] Pass");
//     } catch (error) {
//       console.log("[6.0] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });

//   it.only("[6.1] Verify that order details invoice could be shared successfully ", async () => {
//     try {
//       await loginPage.loginWithMezaId("103258652"); //Mohand meza Id
//       await onBoardingPage.onBoardingScreen1();
//       await dashboardPage.dashboardInitialValidation(); //dashboard for user has orders
//       await dashboardPage.clickOnOrderTap();
//       await dashboardPage.lastOrderValidation();
//       await dashboardPage.clickOnLastOrder();
//       await orderHistoryPage.orderHistoryInvoiceSummary();
//       await orderHistoryPage.checkStatusTypeDateGrams(
//         "Failed",
//         "Buy",
//         "24 May, 2:35 PM",
//         "11.4"
//       );
//       //lesa fi 7ta na2sa

//       await orderHistoryPage.shareTrx();
//       console.log("[6.1] Pass");
//     } catch (error) {
//       console.log("[6.1] Fail");
//       throw error; // Re-throwing the error to mark the test as failed
//     }
//   });
//   it.only("[6.2] Verify that after checking order details invoice contact support successfully ", async () => {
//     await loginPage.loginWithMezaId("103258652"); //Mohand meza Id
//     await onBoardingPage.onBoardingScreen1();
//     await dashboardPage.dashboardInitialValidation(); //dashboard for user has orders
//     await dashboardPage.clickOnOrderTap();
//     await dashboardPage.lastOrderValidation();
//     await dashboardPage.clickOnLastOrder();
//     await orderHistoryPage.orderHistoryInvoiceSummary();
//     await orderHistoryPage.checkStatusTypeDateGrams(
//       "Failed",
//       "Buy",
//       "24 May, 2:35 PM",
//       "11.4"
//     );

//     await supportPage.contactSupportVerification();
//   });

//   async function closeAppAndRemoveFromHistory() {
//     console.log("Enter closeAppAndRemoveFromHistory");

//     // Close the app
//     await driver.closeApp();
//     console.log("Application closed.");

//     // Open recent apps and remove the app from history
//     // await driver.pressKeyCode(187); // This opens the recent apps
//     // await driver.pause(2000); // Wait for the recent apps to open

//     // // Assuming the app is the first in the recent apps list
//     // // Adjust the coordinates based on your device and app position
//     // const appInRecentAppsX = 100; // X coordinate of the app in recent apps
//     // const appInRecentAppsY = 200; // Y coordinate of the app in recent apps

//     // await driver.touchAction([
//     //   { action: "press", x: appInRecentAppsX, y: appInRecentAppsY },
//     //   { action: "wait", ms: 1000 },
//     //   { action: "moveTo", x: appInRecentAppsX, y: appInRecentAppsY - 500 }, // swipe up to remove
//     //   { action: "release" },
//     // ]);
//     console.log("Application removed from history.");

//     // End the session
//     await driver.deleteSession();
//     console.log("Session deleted.");
//   }
// });
