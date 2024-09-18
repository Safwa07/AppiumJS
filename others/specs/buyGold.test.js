import dashboardPage from "../../page/dashboardPage";
import gold from "../../page/gold";
import loginPage from "../../page/loginPage";
import onBoardingPage from "../../page/onBoardingPage";
require("@babel/register")({
  presets: ["@babel/preset-env"],
});
describe("Test Suite", () => {
  it("[1] Verify that login page is Exist & Visibile", async () => {
    await loginPage.mobilePhoneFragment_IntialValidation();
  });
  it.only("[2.0] Verify that new user with missing info directed successfully", async () => {
    await loginPage.loginWithNewMezaId();
    await onBoardingPage.onBoardingScreen1();
    await dashboardPage.missingInfo();
  });

  // it("[2] Verify that new MezaId could login to gold page successfully", async () => {
  //   await loginPage.loginWithNewMezaId();
  //   await onBoardingPage.onBoardingScreen1();
  //   await dashboardPage.dashboardZeroValidation();
  //   await dashboardPage.newUserDashboard();
  // });
  it.skip("[2] Verify that new MezaId could login to gold page successfully", async () => {
    await loginPage.loginWithExistedMezaId();
    await onBoardingPage.onBoardingScreen2();
    await dashboardPage.dashboardInitialValidation();
    await dashboardPage.existedUserDashboard();
  });
  it.skip("[3] Verify that buy order Created successfully for the first time", async () => {
    await gold.loginWithNewMezaId();
    await gold.onBoardingScreen1();
    await gold.buyGoldValidation();
    // buyInvoiceSummaryValidation
    await gold.buyGoldStatusCompleted();
    await gold.buyGoldCalculation();
  });

  it.skip("[3] Verify that buy order Created successfully", async () => {
    await gold.loginWithExistedMezaId();
    await gold.onBoardingScreen1();
    await gold.buyGoldValidation();

    await gold.buyGoldCalculation();
    await gold.buyInvoiceSummaryValidation();
    await gold.buyInvoiceSummaryCalculation();

    await gold.buyGoldStatusCompleted();
  });
  it.skip("[4] Verify that buy order Failure successfully", async () => {
    await gold.loginWithExistedMezaId();
    await gold.onBoardingScreen1();
    await gold.buyGoldValidation();
    await gold.buyGoldCalculation();

    await gold.buyGoldStatusFailed();
  });

  it.skip("[3] Verify that buy order Refunded successfully", async () => {
    await gold.loginWithExistedMezaId();
    await gold.onBoardingScreen1();
    await gold.buyGoldValidation();
    await gold.buyGoldCalculation();

    await gold.buyGoldStatusRefunded();
  });
});
