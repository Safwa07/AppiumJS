// import dashboardPage from "../../page/dashboardPage";
// import loginPage from "../../page/loginPage";
// import onBoardingPage from "../../page/onBoardingPage";
// import orderHistoryPage from "../../page/orderHistoryPage";
// import supportPage from "../../page/supportPage";
// import allureReporter from "@wdio/allure-reporter";
// describe("Dashboard Suite", () => {
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

//   it("[1] Verify that login page is Exist & Visibile", async () => {
//     allureReporter.addTestId("TC_001");

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
//     allureReporter.addTestId("TC_002");
//     allureReporter.addIssue("ISSUE_002");
//     allureReporter.addSeverity("TC_001");
//     // expect(true).toBe(false);

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

//   it("[6.0] Verify that order details work successfully ", async () => {
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

//   it("[6.1] Verify that order details invoice could be shared successfully ", async () => {
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
//   it("[6.2] Verify that after checking order details invoice contact support successfully ", async () => {
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
// });
