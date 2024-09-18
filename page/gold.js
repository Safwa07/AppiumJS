
import elementsPom from "./elementsPom";

class gold {
  //assertElementsVisibilityAndExistence
  // async mobilePhoneFragment_IntialValidation() {
  //   await elementsPom.phoneNumber; // Adjust the timeout value as needed
  //   // await expect(elementsPom.phoneNumber).toHaveText(/.+/);

  //   await expect(elementsPom.submitBtn).toExist();
  //   await expect(elementsPom.submitBtn).toBeDisplayed();
  //   const submitIsClickable = await elementsPom.submitBtn.isEnabled();
  //   expect(submitIsClickable).toBe(true, "Submit button should be clickable");

  //   // await expect(await elementsPom.submitBtn.isExisting()).toBe(true);
  //   // await expect(await elementsPom.submitBtn.isExisting()).toBe(true, 'submitBtn does not exist');
  //   // assert(await elementsPom.submitBtn.isExisting(), 'submitBtn does not exist');
  // }

  // async loginWithNewMezaId() {
  //   await this.mobilePhoneFragment_IntialValidation();

  //   await elementsPom.phoneNumber.setValue("1234567890");
  //   await elementsPom.submitBtn.click();
  //   // await driver.pause(3000);
  // }

  // async loginWithValidMezaId() {
  //   await this.mobilePhoneFragment_IntialValidation();

  //   await elementsPom.phoneNumber.setValue("103699670");
  //   await elementsPom.submitBtn.click();
  //   await driver.pause(3000);
  // }

  // async onBoardingScreen1() {
  //   // await driver.pause(3000);
  //   await elementsPom.skipBtn.click();
  //   // await driver.pause(3000);
  // }
  // async onBoardingScreen2() {
  //   // await driver.pause(3000);
  //   await elementsPom.moveArrow.click();
  //   await elementsPom.skipBtn.click();
  //   // await driver.pause(3000);
  // }

  // async dashboardZeroValidation() {
  //   // await driver.pause(3000);
  //   await expect(elementsPom.estimatedValue).toExist();
  //   await expect(elementsPom.estimatedValue).toBeDisplayed();

  //   await expect(elementsPom.supportIcon).toExist();
  //   await expect(elementsPom.supportIcon).toBeDisplayed();

  //   await expect(elementsPom.goldValue).toExist();
  //   await expect(elementsPom.goldValue).toBeDisplayed();

  //   await expect(elementsPom.profLossValue).toExist();
  //   await expect(elementsPom.profLossValue).toBeDisplayed();

  //   await expect(elementsPom.profLossArrow).toExist();
  //   await expect(elementsPom.profLossArrow).toBeDisplayed();

  //   await expect(elementsPom.overviewTap).toExist();
  //   // await expect(elementsPom.overviewTap).();

  //   await expect(elementsPom.ordersTap).toExist();
  //   await expect(elementsPom.ordersTap).toBeDisplayed();

  //   await expect(elementsPom.sellBtn).toExist();
  //   await expect(elementsPom.sellBtn).toBeDisplayed();
  //   // const sellIsClickable = await elementsPom.sellBtn.isEnabled();
  //   // expect(sellIsClickable).toBe(true, "sell button should be clickable");

  //   await expect(elementsPom.buyBtn).toExist();
  //   await expect(elementsPom.buyBtn).toBeDisplayed();
  //   const buyIsClickable = await elementsPom.buyBtn.isEnabled();
  //   expect(buyIsClickable).toBe(true, "buy button should be clickable");

  //   await elementsPom.ordersTap.click();
  //   await driver.pause(3000);
  //   await expect(elementsPom.noHistoryTxt).toBeDisplayed();
  //   await expect(elementsPom.noOrderTxt).toBeDisplayed();
  //   await elementsPom.overviewTap.click();
  //   expect(await elementsPom.overviewTap).toBe(
  //     true,
  //     "OverviewTap should be clickable"
  //   );
  // }
  // async dashboardInitialValidation() {
  //   // await driver.pause(3000);
  //   await expect(elementsPom.estimatedValue).toExist();
  //   await expect(elementsPom.estimatedValue).toBeDisplayed();

  //   await expect(elementsPom.supportIcon).toExist();
  //   await expect(elementsPom.supportIcon).toBeDisplayed();

  //   await expect(elementsPom.goldValue).toExist();
  //   await expect(elementsPom.goldValue).toBeDisplayed();

  //   await expect(elementsPom.profLossValue).toExist();
  //   await expect(elementsPom.profLossValue).toBeDisplayed();

  //   await expect(elementsPom.profLossArrow).toExist();
  //   await expect(elementsPom.profLossArrow).toBeDisplayed();

  //   await expect(elementsPom.overviewTap).toExist();
  //   // await expect(elementsPom.overviewTap).();

  //   await expect(elementsPom.ordersTap).toExist();
  //   await expect(elementsPom.ordersTap).toBeDisplayed();

  //   await expect(elementsPom.sellBtn).toExist();
  //   await expect(elementsPom.sellBtn).toBeDisplayed();
  //   const sellIsClickable = await elementsPom.sellBtn.isEnabled();
  //   expect(sellIsClickable).toBe(true, "sell button should be clickable");

  //   await expect(elementsPom.buyBtn).toExist();
  //   await expect(elementsPom.buyBtn).toBeDisplayed();
  //   const buyIsClickable = await elementsPom.buyBtn.isEnabled();
  //   expect(buyIsClickable).toBe(true, "buy button should be clickable");

  //   await elementsPom.submitBtn.click();
  //   await driver.pause(3000);
  //   await expect(elementsPom.orderHistoryArrow).toExist();
  //   await expect(elementsPom.orderHistoryArrow).toBeDisplayed();

  //   await expect(elementsPom.orderStatusField).toExist();
  //   await expect(elementsPom.orderStatusField).toBeDisplayed();

  //   await expect(elementsPom.orderStatusValue).toExist();
  //   await expect(elementsPom.orderStatusValue).toBeDisplayed();

  //   await expect(elementsPom.orderTrxTypeField).toExist();
  //   await expect(elementsPom.orderTrxTypeField).toBeDisplayed();

  //   await expect(elementsPom.orderTrxTypeValue).toExist();
  //   await expect(elementsPom.orderTrxTypeValue).toBeDisplayed();

  //   await elementsPom.orderHistoryArrow.click();
  //   expect(orderHistoryArrow).toBe(
  //     true,
  //     "order History arrow should be clickable"
  //   );
  // }
  // async newUserDashboard() {
  //   const element = await elementsPom.estimatedValue;
  //   const textValue = await element.getText();
  //   console.log(typeof textValue);
  //   console.log(textValue + "  textValue ");
  //   console.log("HEEEEEEEEEEELLLLLOOOOOOO 100 ");

  //   await expect((await elementsPom.estimatedValue).getText()).toHaveValue(
  //     "0.00 EGP"
  //   );
  //   console.log("HEEEEEEEEEEELLLLLOOOOOOO 200 ");

  //   expect(textValue).to.equal("0.00 EGP");
  //   console.log("HEEEEEEEEEEELLLLLOOOOOOO 300 ");
  //   expect(elementsPom.goldValue).to.equal("0 Gram");
  //   expect(elementsPom.profLossValue).to.equal("0.0 EGP");
  //   expect(await elementsPom.sellBtn.getAttribute("enabled")).to.be.false;
  // }
  // async existedUserDashboard() {
  //   /** notequal zero
  //    * elementsPom.estimatedValue
  //    *
  //    * sellBtn is enabled
  //    *
  //    */
  // }
  // async orderHistoryInvoiceSummary(){
  //   await elementsPom.ordersTap.click();
  //   await driver.pause(3000);

  //   await expect(elementsPom.invoiceDateTime).toExist();
  //   await expect(elementsPom.invoiceDateTime).toBeDisplayed();

  //   await expect(elementsPom.invoiceId).toExist();
  //   await expect(elementsPom.invoiceId).toBeDisplayed();

  //   await expect(elementsPom.invoiceTotalGoldAmount).toExist();
  //   await expect(elementsPom.invoiceTotalGoldAmount).toBeDisplayed();

  //   await expect(elementsPom.invoiceTrxTypeField).toExist();
  //   await expect(elementsPom.invoiceTrxTypeField).toBeDisplayed();

  //   await expect(elementsPom.invoiceOrderStausField).toExist();
  //   await expect(elementsPom.invoiceOrderStausField).toBeDisplayed();

  //   await expect(elementsPom.invoiceGoldPriceField).toExist();
  //   await expect(elementsPom.invoiceGoldPriceField).toBeDisplayed();

  //   await expect(elementsPom.invoiceTotalGoldPriceField).toExist();
  //   await expect(elementsPom.invoiceTotalGoldPriceField).toBeDisplayed();

  //   await expect(elementsPom.invoiceFeesField).toExist();
  //   await expect(elementsPom.invoiceFeesField).toBeDisplayed();

  //   await expect(elementsPom.invoiceTotalAmountField).toExist();
  //   await expect(elementsPom.invoiceTotalAmountField).toBeDisplayed();

  //   await expect(elementsPom.invoiceTrxType).toExist();
  //   await expect(elementsPom.invoiceTrxType).toBeDisplayed();

  //   await expect(elementsPom.invoiceOrderStaus).toExist();
  //   await expect(elementsPom.invoiceOrderStaus).toBeDisplayed();

  //   await expect(elementsPom.invoiceGoldPrice).toExist();
  //   await expect(elementsPom.invoiceGoldPrice).toBeDisplayed();

  //   await expect(elementsPom.invoiceTotalGoldPrice).toExist();
  //   await expect(elementsPom.invoiceTotalGoldPrice).toBeDisplayed();

  //   await expect(elementsPom.invoiceFees).toExist();
  //   await expect(elementsPom.invoiceFees).toBeDisplayed();

  //   await expect(elementsPom.invoiceTotalAmount).toExist();
  //   await expect(elementsPom.invoiceTotalAmount).toBeDisplayed();

  //   await expect(elementsPom.invoiceLogo1).toExist();
  //   await expect(elementsPom.invoiceLogo1).toBeDisplayed();

  //   await expect(elementsPom.invoiceLogo2).toExist();
  //   await expect(elementsPom.invoiceLogo2).toBeDisplayed();

  //   await expect(elementsPom.invoiceExportIcon).toExist();
  //   await expect(elementsPom.invoiceExportIcon).toBeDisplayed();

  //   await expect(elementsPom.packageTap).toExist();
  //   await expect(elementsPom.packageTap).toBeDisplayed();

  //   await expect(elementsPom.packageTap).toExist();
  //   await expect(elementsPom.packageTap).toBeDisplayed();

  //   await expect(elementsPom.packageTap).toExist();
  //   await expect(elementsPom.packageTap).toBeDisplayed();

  //   await expect(elementsPom.packageTap).toExist();
  //   await expect(elementsPom.packageTap).toBeDisplayed();

  // }
  // async buyGoldValidation() {
  //   await elementsPom.buyBtn.click();
  //   await driver.pause(3000);
  //   await elementsPom.returnArrow.click();
  //   await driver.pause(3000);
  //   await elementsPom.buyBtn.click();
  //   await driver.pause(3000);


  //   await expect(elementsPom.packageTap).toExist();
  //   await expect(elementsPom.packageTap).toBeDisplayed();
  //   const packageTapIsClickable = await elementsPom.packageTap.isEnabled();
  //   expect(packageTapIsClickable).toBe(true, "packageTap should be clickable");

  //   await expect(elementsPom.P3GramPackage).toExist();
  //   await expect(elementsPom.P3GramPackage).toBeDisplayed();

  //   await expect(elementsPom.P5GramPackage).toExist();
  //   await expect(elementsPom.P5GramPackage).toBeDisplayed();

  //   await expect(elementsPom.oneGramPackage).toExist();
  //   await expect(elementsPom.oneGramPackage).toBeDisplayed();
    
  //   await expect(elementsPom.customizeTap).toExist();
  //   await expect(elementsPom.customizeTap).toBeDisplayed();
  //   const customizeTapIsClickable = await elementsPom.customizeTap.isEnabled();
  //   expect(customizeTapIsClickable).toBe(true, "customizeTap should be clickable");
    
  //   const sellIsClickable = await elementsPom.sellBtn.isEnabled();
  //   expect(sellIsClickable).toBe(true, "sell button should be clickable");



  //   await expect(elementsPom.proceedBtn).toExist();
  //   await expect(elementsPom.proceedBtn).toBeDisplayed();
  //   const proceedBtnClickable = await elementsPom.proceedBtn.isEnabled();
  //   expect(proceedBtnClickable).toBe(false, "proceedBtn should not be clickable");
    
  //   await elementsPom.oneGramPackage.click();
  //   await expect(elementsPom.selectedGramsPackage).toExist();
  //   await expect(elementsPom.selectedGramsPackage).toBeDisplayed();
  //   await expect(elementsPom.selectedAmountPackage).toExist();
  //   await expect(elementsPom.selectedAmountPackage).toBeDisplayed();

  //   await elementsPom.P3GramPackage.click();
  //   await expect(elementsPom.selectedGramsPackage).toExist();
  //   await expect(elementsPom.selectedGramsPackage).toBeDisplayed();
  //   await expect(elementsPom.selectedAmountPackage).toExist();
  //   await expect(elementsPom.selectedAmountPackage).toBeDisplayed();


  //   await elementsPom.P5GramPackage.click();
  //   await expect(elementsPom.selectedGramsPackage).toExist();
  //   await expect(elementsPom.selectedGramsPackage).toBeDisplayed();
  //   await expect(elementsPom.selectedAmountPackage).toExist();
  //   await expect(elementsPom.selectedAmountPackage).toBeDisplayed();

  //   await elementsPom.customizeTap.click();
    
  //   await expect(elementsPom.selectedGramsPackage).toExist();
  //   await expect(elementsPom.selectedGramsPackage).toBeDisplayed();
  //   await expect(elementsPom.selectedAmountPackage).toExist();
  //   await expect(elementsPom.selectedAmountPackage).toBeDisplayed();

  //   await expect(elementsPom.proceedBtn).toExist();
  //   await expect(elementsPom.proceedBtn).toBeDisplayed();
  //   const proceedBtnClickable1 = await elementsPom.proceedBtn.isEnabled();
  //   expect(proceedBtnClickable1).toBe(true, "proceedBtn should be clickable");
    
    
  // }
  // async buyInvoiceSummaryValidation(){}
}
export default new gold();
