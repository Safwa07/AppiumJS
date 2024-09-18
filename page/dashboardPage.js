const pLValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/pLValue"]';
const overview = '//android.widget.TextView[@text="Overview"]';
const orders = '//android.widget.LinearLayout[@content-desc="Orders"]';
const sell_button =
  '//android.widget.Button[@resource-id="com.brightskiesinc.mangmapp:id/sell_button"]';
const buy_button =
  '//android.widget.Button[@resource-id="com.brightskiesinc.mangmapp:id/buy_button"]';
const orderEmptyImage =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/emptyImage"]';
const no_hist =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/no_hist"]';
const no_order =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/no_order"]';
const contactSupportBtn =
  '//android.widget.Button[@resource-id="com.brightskiesinc.mangmapp:id/contactSupportBtn"]';
const icon_back_img =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/icon_back_img"]';
const missingInfoContent =
  "We’re unable to proceed with service right now, It seems like your information needs to be updated. Please visit your nearest branch to update your details We apologize for any inconvenience this may cause";
const missingInfoTxt =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/text"]';
// const portfolioValue = '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/portfolioValue"]'   ;
// const = '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/gramsValue"]';
const firstOrderHistoryArrow =
  '(//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/viewMoreIcon"])[2]';
const firstTransactionTypeValue =
  '(//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/transactionType"])[1]';
const firstTransactionTypeTxt =
  '(//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/transactionTypeLbl"])[1]';
// const = '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/statusLbl"])[1]';
// const = '(//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/status][1]';
const portfolioValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/portfolioValue"]';
const gramsValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/gramsValue"]';
// const = '';
// const = '';

class dashboardPage {
  get contactSupportBtn() {
    return $(contactSupportBtn);
  }
  get icon_back_img() {
    return $(icon_back_img);
  }

  get missingInfoTxt() {
    return $(missingInfoTxt);
  }
  // get goldValue() {
  //   return $();
  //   }
  get supportIcon() {
    return (async () => $("//android.widget.ImageView[@index=2]"))();
  }
  //     return (async () => )();

  get estimatedValue() {
    //index=2 0.0 at first & EGP
    // return (async () => $("//android.widget.TextView[@index=2]"))();
    return $(portfolioValue);
  }
  get goldValue() {
    //index=4 0.0 at first & Grams
    // return (async () => $("//android.widget.TextView[@index=4]"))();
    return $(gramsValue);
  }
  get profLossValue() {
    //index=7 0.0 at first & Grams
    // return $("//android.widget.TextView[@index=7]");
    // return $("~com.brightskiesinc.mangmapp:id/pLValue");
    // return $("~com.brightskiesinc.mangmapp:id/pLValue");
    return $(pLValue);
  }
  get profLossArrow() {
    // return $("//android.widget.ImageView[@index=8]");

    // return $('~com.brightskiesinc.mangmapp:id/viewMoreIcon');
    return $(
      '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/viewMoreIcon"]'
    );
  }
  get overviewTap() {
    return $(overview);
  }
  get ordersTap() {
    return $(orders);
  }
  get sellBtn() {
    return $(sell_button);
  }
  get buyBtn() {
    return $(buy_button);
  }
  get noHistoryTxt() {
    return $(no_hist);
  }
  get orderEmptyImage() {
    return $(orderEmptyImage);
  }
  get noOrderTxt() {
    return $(no_order);
  }
  get orderHistoryArrow() {
    // return (async () => $("//android.widget.ImageView[@index=5]"))();
    return $(firstOrderHistoryArrow);
  }

  get orderStatusField() {
    return (async () => $('//android.widget.TextView[@text="Status:"]'))();
  }
  get orderStatusValue() {
    return (async () => $("//android.widget.TextView[@index=10]"))();
  }

  get orderTrxTypeField() {
    // return (async () =>
    // $('//android.widget.TextView[@text="Transaction type:"]'))();
    return $(firstTransactionTypeTxt);
  }
  get orderTrxTypeValue() {
    // return (async () => $('//android.widget.TextView[@index=8"]'))();
    return $(firstTransactionTypeValue);
  }

  async missingInfo() {
    await this.contactSupportBtn.waitForDisplayed();
    await expect(this.contactSupportBtn).toExist();
    await expect(this.contactSupportBtn).toBeDisplayed();

    await expect(this.icon_back_img).toExist();
    await expect(this.icon_back_img).toBeDisplayed();

    await expect(this.missingInfoTxt).toExist();
    await expect(this.missingInfoTxt).toBeDisplayed();
  }
  async dashboardZeroValidation() {
    /**
    dashboard for user that has balance =0
    where no orders take place 
    or 
    buy then sell all balance
    */
   
    // await expect(this.estimatedValue);
    await expect(this.estimatedValue).toExist();
    await expect(this.estimatedValue).toBeDisplayed();

    await expect(this.supportIcon).toExist();
    await expect(this.supportIcon).toBeDisplayed();

    await expect(this.goldValue).toExist();
    await expect(this.goldValue).toBeDisplayed();

    await expect(this.profLossValue).toExist();
    await expect(this.profLossValue).toBeDisplayed();

    await this.profLossArrow.waitForDisplayed();
    await expect(this.profLossArrow).toExist();
    await expect(this.profLossArrow).toBeDisplayed();

    await expect(this.overviewTap).toBeDisplayed();

    await this.ordersTap.waitForDisplayed();
    await expect(this.ordersTap).toBeDisplayed();

    await this.sellBtn.waitForDisplayed();
    await expect(this.sellBtn).toExist();
    await expect(this.sellBtn).toBeDisplayed();

    await this.buyBtn.waitForDisplayed();

    await expect(this.buyBtn).toExist();
    await expect(this.buyBtn).toBeDisplayed();
    const buyIsClickable = await this.buyBtn.isEnabled();
    expect(buyIsClickable).toBe(true, "buy button should be clickable");

    await this.ordersTap.click();
    console.log("222222222222");

    await this.noHistoryTxt.waitForDisplayed();
    console.log("ssssssssssssss");
    await expect(this.noHistoryTxt).toBeDisplayed();
    console.log("noHistoryTxt");

    await expect(this.noOrderTxt).toBeDisplayed();
    await expect(this.orderEmptyImage).toBeDisplayed();
    console.log("orderEmptyImage 001");
    await this.overviewTap.waitForDisplayed();

    await this.overviewTap.click();

    console.log("overviewTap clicked 002");
    await this.ordersTap.click();
    console.log("ordersTap clicked 002");
  }
  async dashboardInitialValidation() {
    //dashboard for user that has balance > 0
    console.log("start dashboardInitialValidation");

    await expect(this.estimatedValue).toExist();
    await expect(this.estimatedValue).toBeDisplayed();

    await expect(this.supportIcon).toExist();
    await expect(this.supportIcon).toBeDisplayed();

    await expect(this.goldValue).toExist();
    await expect(this.goldValue).toBeDisplayed();

    await expect(this.profLossValue).toExist();
    await expect(this.profLossValue).toBeDisplayed();

    await expect(this.profLossArrow).toExist();
    await expect(this.profLossArrow).toBeDisplayed();

    await this.ordersTap.waitForDisplayed();

    await expect(this.overviewTap).toExist();
    await expect(this.overviewTap).toBeDisplayed();

    await expect(this.ordersTap).toExist();
    await expect(this.ordersTap).toBeDisplayed();

    await expect(this.sellBtn).toExist();
    await expect(this.sellBtn).toBeDisplayed();
    const sellIsClickable = await this.sellBtn.isEnabled();
    expect(sellIsClickable).toBe(true, "sell button should be clickable");

    console.log("sellBtn is enabled");

    await expect(this.buyBtn).toExist();
    await expect(this.buyBtn).toBeDisplayed();
    const buyIsClickable = await this.buyBtn.isEnabled();
    expect(buyIsClickable).toBe(true, "buy button should be clickable");
    console.log("buyBtn is enabled");

    await this.ordersTap.click();

    await driver.pause(3000);
    console.log("driver pause 3 sec");
    await this.lastOrderValidation();
    console.log("End dashboardInitialValidation");
  }
  async newUserDashboard() {
    console.log("Start newUserDashboard");

    // await this.estimatedValue.getText();
    // console.log("HEEEEEEEEEEELLLLLOOOOOOO 100 ");

    let element = await this.estimatedValue;
    let textValue = await element.getText();
    let numericValue = parseFloat(textValue);
    await global.chaiExpect(numericValue).to.be.equal(0.0);
    console.log("estimatedValue =0.0");

    element = await this.profLossValue;
    textValue = await element.getText();
    numericValue = parseFloat(textValue);
    await global.chaiExpect(numericValue).to.be.equal(0.0);
    console.log("profLossValue =0.0");

    element = await this.goldValue;
    textValue = await element.getText();
    // numericValue = parseFloat(textValue);
    await global.chaiExpect(numericValue).to.be.equal(0);
    console.log("goldValue =0");

    // expect(await this.sellBtn.getAttribute("enabled")).to.be.false;
    const sellBtnEnabledAttribute = await this.sellBtn.getAttribute("enabled");
    console.log(sellBtnEnabledAttribute);
    chaiExpect(sellBtnEnabledAttribute).to.equal("false");

    console.log("End newUserDashboard");
  }
  async existedUserDashboard() {
    console.log("Start existedUserDashboard");

    let element = await this.estimatedValue;
    let textValue = await element.getText();
    let numericValue = parseFloat(textValue);
    console.log(numericValue);

    await global.chaiExpect(numericValue).to.be.gt(0.0);
    console.log("estimatedValue > 0.0");

    element = await this.profLossValue;
    textValue = await element.getText();
    numericValue = parseFloat(textValue);
    // await global.chaiExpect(numericValue).to.be.equal(0.0);
    // console.log("profLossValue ");

    element = await this.goldValue;
    textValue = await element.getText();
    numericValue = parseFloat(textValue);
    await global.chaiExpect(numericValue).to.be.gt(0);
    console.log("goldValue > 0");

    // expect(await this.sellBtn.getAttribute("enabled")).to.be.false;
    const sellBtnEnabledAttribute = await this.sellBtn.getAttribute("enabled");
    console.log(sellBtnEnabledAttribute);
    chaiExpect(sellBtnEnabledAttribute).to.equal("true");

    console.log("End existedUserDashboard");
  }
  // async tapAtCoordinates() {
  //   const { height } = await driver.getWindowSize();
  //   const x1 = 0.5 * height;
  //   const y1 = 0.5 * height;

  //   await driver.touchPerform({
  //     action: "tap",
  //     options: {
  //       x: x1,
  //       y: y1,
  //     },
  //   });
  // }

  async clickOnBuyBtn() {
    await this.buyBtn.click();
  }
  async clickOnOrderTap() {
    await this.ordersTap.click();
  }
  async clickOnOverviewTap() {
    await this.overviewTap.click();
  }
  // await dashboardPage.lastOrderValidation();
  // await dashboardPage.clickOnLastOrder();

  async clickOnLastOrder() {
    console.log("Start clickOnLastOrder");
    await this.orderHistoryArrow.click();

    console.log("End clickOnLastOrder");
  }

  async lastOrderValidation() {
    console.log("Start lastOrderValidation");
    await this.orderHistoryArrow.waitForDisplayed();

    await expect(this.orderHistoryArrow).toExist();
    await expect(this.orderHistoryArrow).toBeDisplayed();

    await expect(this.orderStatusField).toExist();
    await expect(this.orderStatusField).toBeDisplayed();

    await expect(this.orderStatusValue).toExist();
    await expect(this.orderStatusValue).toBeDisplayed();
    console.log("orderStatusValue");

    await expect(this.orderTrxTypeField).toExist();
    await expect(this.orderTrxTypeField).toBeDisplayed();
    console.log("orderTrxTypeField");
    await expect(this.orderTrxTypeValue).toExist();
    await expect(this.orderTrxTypeValue).toBeDisplayed();
    console.log("orderTrxTypeValue");

    // await this.orderHistoryArrow.click();
    const clickableAttributeValue = await this.orderHistoryArrow.getAttribute(
      "enabled"
    );
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the button is enabled
    console.log("orderHistoryArrow clickable");

    console.log("End orderListValidation");
  }
  // async orderTakePlaceInList(transactionType){

  //   // const selectedGrams = sharedData.get("selectedGrams"); // Access the shared value
  //   console.log("Start orderTakePlaceInList");
  //   await driver.pause(7000);

  //   await this.orderHistoryArrow.waitForDisplayed();

  //   await expect(this.orderHistoryArrow).toExist();
  //   await expect(this.orderHistoryArrow).toBeDisplayed();

  //   await expect(this.orderStatusField).toExist();
  //   await expect(this.orderStatusField).toBeDisplayed();

  //   await expect(this.orderStatusValue).toExist();
  //   await expect(this.orderStatusValue).toBeDisplayed();
  //   console.log("orderStatusValue");

  //   await expect(this.orderTrxTypeField).toExist();
  //   await expect(this.orderTrxTypeField).toBeDisplayed();
  //   console.log("orderTrxTypeField");
  //   await expect(this.orderTrxTypeValue).toExist();
  //   await expect(this.orderTrxTypeValue).toBeDisplayed();
  //   console.log("orderTrxTypeValue");

  //   // await this.orderHistoryArrow.click();
  //   const clickableAttributeValue = await this.orderHistoryArrow.getAttribute(
  //     "enabled"
  //   );
  //   chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the button is enabled
  //   console.log("orderHistoryArrow clickable");

  //   console.log("End orderTakePlaceInList");

  // }
}
export default new dashboardPage();
