import buyGoldPage from "../../page/buyGoldPage";
import buyInvoicePage from "../../page/buyInvoicePage";
import dashboardPage from "../../page/dashboardPage";
import loginPage from "../../page/loginPage";
import onBoardingPage from "../../page/onBoardingPage";
import allureReporter from "@wdio/allure-reporter";

describe("Buy Suite", () => {
  let chaiExpect;
  before(async () => {
    // Dynamically import chai
    const chai = await import("chai");
    global.chaiExpect = chai.expect;
  });

  beforeEach(async () => {
    await driver.activateApp("com.brightskiesinc.mangmapp");
    console.log("activate mngm app");
  });

  afterEach(async () => {
    console.log("enter afterEach:");
    await driver.terminateApp("com.brightskiesinc.mangmapp");
    console.log("terminate mngm app");
  });

  it("[1] validate buy page for new user with no orders", async () => {
    try {
      await loginPage.loginWithMezaId();
      await onBoardingPage.onBoardingScreen2();
      await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
      await dashboardPage.clickOnBuyBtn();
      await buyGoldPage.packagesValidation();
      await buyGoldPage.customizeValidation();
      console.log("[1] Pass");
    } catch (error) {
      console.log("[1] Fail");
      throw error;
    }
  });

  it("[2] validate buy page for user that buy order before", async () => {
    try {
      await loginPage.loginWithMezaId("103258652");
      await onBoardingPage.onBoardingScreen2();
      await dashboardPage.dashboardInitialValidation(); //dashboard for a user that balance > 0
      await dashboardPage.clickOnBuyBtn();
      await buyGoldPage.buyGoldValidation();
      await buyGoldPage.packagesValidation();
      await buyGoldPage.customizeValidation();

      console.log("[2] Pass");
    } catch (error) {
      console.log("[2] Fail");
      throw error;
    }
  });
  it.only("[3] verfiy buy order successfully via package selection", async () => {
    try {
      await loginPage.loginWithMezaId("103258652");
      await onBoardingPage.onBoardingScreen1();
      await dashboardPage.dashboardInitialValidation(); //dashboard for a user never sell or buy
      await dashboardPage.clickOnBuyBtn();
      await buyGoldPage.buyGoldValidation();
      await buyGoldPage.packagesValidation();
      await buyGoldPage.selectpackage();
      await buyGoldPage.clickOnProceed();
      await buyInvoicePage.pageValidation();
      await buyInvoicePage.pageCalculations();
      await buyInvoicePage.clickOnSubmit();
      /** will implemented */
        // await dashboardPage.orderTakePlaceInList('Buy')

      console.log("[3] Pass");
    } catch (error) {
      console.log("[3] Fail");
      throw error;
    }
  });
  it("[4] verfiy buy order successfully via customize selection", async () => {
    try {
      await loginPage.loginWithMezaId("103258652");
      await onBoardingPage.onBoardingScreen2();
      await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
      await dashboardPage.clickOnBuyBtn();
      await buyGoldPage.buyGoldValidation();
      await buyGoldPage.customizeValidation();
      await buyGoldPage.clickOnProceed(); // means we accept default 0.1 grams

      console.log("[4] Pass");
    } catch (error) {
      console.log("[4] Fail");
      throw error;
    }
  });
  it("[3.0] Verify that buy order Created successfully for the first time", async () => {
    try {
      await loginPage.loginWithMezaId("103258652");
      await onBoardingPage.onBoardingScreen2();
      await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
      await dashboardPage.clickOnBuyBtn();
      await buyGoldPage.packagesValidation();
      await buyGoldPage.customizeValidation();
      await buyGoldPage.buyGoldAndProceed();
      //NationalID page validation and upload images
      await buyInvoiceSummaryPage.buyInvoiceValidation();
      await buyInvoiceSummaryPage.buyInvoiceCalculation();
      await buyInvoiceSummaryPage.clickOnSubmitBtn();

      //check status in oreder is in progress
      await ordersPage.selectFirstItem();
      await ordersPage.transactionDetailsValidation();
      //check that status is inprogress or completed
      await ordersPage.contactSupportVerification();
      await ordersPage.shareTrx();
      await ordersPage.returnToPerviousScreen();
      //check status in oreder is in completed/Failed
      //need to check that after buy successful sell btn is clickable now
      console.log("[3.0] Pass");
    } catch (error) {
      console.log("[3.0] Fail");
      throw error;
    }
  });

  it.skip("[3.1] Verify that buy order Failed successfully", async () => {
    // buy gold by balance grater than your balance by 0.1gram or 1LE
    try {
      await loginPage.loginWithMezaId("103258652");
      await onBoardingPage.onBoardingScreen2();
      await dashboardPage.dashboardZeroValidation(); //dashboard for a user never sell or buy
      await dashboardPage.clickOnBuyBtn();
      await buyGoldPage.packagesValidation();
      await buyGoldPage.customizeValidation();
      await buyGoldPage.buyGoldAndProceed();
      //NationalID page validation and upload images
      await buyInvoiceSummaryPage.buyInvoiceValidation();
      await buyInvoiceSummaryPage.buyInvoiceCalculation();
      await buyInvoiceSummaryPage.clickOnSubmitBtn();

      //check status in oreder is in progress
      await ordersPage.selectFirstItem();
      await ordersPage.transactionDetailsValidation();
      //check that status is inprogress or Failed
      await ordersPage.contactSupportVerification();
      await ordersPage.shareTrx();
      await ordersPage.returnToPerviousScreen();
      //check status in oreder is in Failed
      //need to check that after buy successful sell btn is not clicable if balance is 0 gold
      console.log("[3.1] Pass");
    } catch (error) {
      console.log("[3.1] Fail");
      throw error; // Re-throwing the error to mark the test as failed
    }
  });
});
