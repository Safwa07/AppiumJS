const orderStatus =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/orderStatus"]';
const transactionType =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/transactionType"]';
const txtTime =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/txtTime"]';
const txtWeight =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/txtWeight"]';
const back_button =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/back_button"]';
// const customer_service_btn =
//   '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/customer_service_btn"]';
const share_btn =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/share_btn"]';
const share_btn_2 = '//android.widget.TextView[@text="Share"]';

const orderNoValueShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/orderNoValue"]';
const goldPriceShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/goldPrice"]';
const totGoldPriceShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/totGoldPrice"]';
const feesShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/fees"]';
const price_valueShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/price_value"]';
const grams_valueShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/grams_value"]';
const dateValueShare =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/dateValue"]';
// const = ''
// const = ''
// const = ''
// const = ''
// const = ''

class orderHistoryPage {
  get invoiceDateTime() {
    // return (async () => $("//android.widget.TextView[@index=0]"))();
    return $(txtTime);
  }
  get backBtn() {
    return $(back_button);
  }
  // get customerSupportBtn() {
  //   return $(customer_service_btn);
  // }

  get shareBtn() {
    return $(share_btn);
  }
  get shareBtn2() {
    return $(share_btn_2);
  }
  get invoiceId() {
    return (async () => $("//android.widget.TextView[@index=3]"))();
  }
  get invoiceTotalGoldInGrams() {
    // return (async () => $("//android.widget.TextView[@index=4]"))();
    return $(txtWeight);
  }
  get invoiceTrxTypeField() {
    return (async () =>
      $('//android.widget.TextView[@text="Transaction Type"]'))();
  }
  get invoiceOrderStausField() {
    return (async () => $('//android.widget.TextView[@text="Order Status"]'))();
  }
  get invoiceGoldPriceField() {
    return (async () => $('//android.widget.TextView[@text="Gold Price"]'))();
  }
  get invoiceTotalGoldPriceField() {
    return (async () =>
      $('//android.widget.TextView[@text="Total Gold Price"]'))();
  }
  get invoiceFeesField() {
    return (async () => $('//android.widget.TextView[@text="Fees"]'))();
  }
  get invoiceTotalAmountField() {
    return (async () => $('//android.widget.TextView[@text="Total Amount"]'))();
  }
  get invoiceTrxType() {
    // return (async () => $("//android.widget.TextView[@index=2]"))();
    return $(transactionType);
  }
  get invoiceOrderStaus() {
    // return (async () => $("//android.widget.TextView[@index=5]"))();
    return $(orderStatus);
  }
  get invoiceGoldPrice() {
    return (async () => $("//android.widget.TextView[@index=8]"))();
  }
  get invoiceTotalGoldPrice() {
    return (async () => $("//android.widget.TextView[@index=12]"))();
  }
  get invoiceFees() {
    return (async () => $("//android.widget.TextView[@index=16]"))();
  }
  get invoiceTotalAmount() {
    return (async () => $("//android.widget.TextView[@index=22]"))();
  }

  get invoiceLogo1() {
    return (async () => $('//android.widget.TextView[@text="Powered by"]'))();
  }
  get invoiceLogo2() {
    return (async () => $("//android.widget.ImageView[@index=1]"))();
  }
  get invoiceExportIcon() {
    return (async () => $("//android.widget.ImageView[@index=2]"))();
  }
  get orderNoValueShare() {
    return $(orderNoValueShare);
  }
  get goldPriceShare() {
    return $(goldPriceShare);
  }
  get totGoldPriceShare() {
    return $(totGoldPriceShare);
  }
  get feesShare() {
    return $(feesShare);
  }
  get price_valueShare() {
    return $(price_valueShare);
  }
  get grams_valueShare() {
    return $(grams_valueShare);
  }
  get dateValueShare() {
    return $(dateValueShare);
  }
  async orderHistoryInvoiceSummary() {
    console.log("Start orderHistoryInvoiceSummary");
    await driver.pause(3000);
    console.log("driver.pause(3000)");

    // await this.invoiceDateTime.waitForDisplayed();
    await expect(this.invoiceDateTime).toExist();
    await expect(this.invoiceDateTime).toBeDisplayed();

    await expect(this.invoiceId).toExist();
    await expect(this.invoiceId).toBeDisplayed();
    console.log("invoiceId");

    await expect(this.invoiceTotalGoldInGrams).toExist();
    await expect(this.invoiceTotalGoldInGrams).toBeDisplayed();

    await expect(this.invoiceTrxTypeField).toExist();
    await expect(this.invoiceTrxTypeField).toBeDisplayed();

    await expect(this.invoiceOrderStausField).toExist();
    await expect(this.invoiceOrderStausField).toBeDisplayed();
    console.log("invoiceOrderStausField");

    await expect(this.invoiceGoldPriceField).toExist();
    await expect(this.invoiceGoldPriceField).toBeDisplayed();

    await expect(this.invoiceTotalGoldPriceField).toExist();
    await expect(this.invoiceTotalGoldPriceField).toBeDisplayed();

    await expect(this.invoiceFeesField).toExist();
    await expect(this.invoiceFeesField).toBeDisplayed();

    await expect(this.invoiceTotalAmountField).toExist();
    await expect(this.invoiceTotalAmountField).toBeDisplayed();

    await expect(this.invoiceTrxType).toExist();
    await expect(this.invoiceTrxType).toBeDisplayed();

    await expect(this.invoiceOrderStaus).toExist();
    await expect(this.invoiceOrderStaus).toBeDisplayed();

    await expect(this.invoiceGoldPrice).toExist();
    await expect(this.invoiceGoldPrice).toBeDisplayed();

    await expect(this.invoiceTotalGoldPrice).toExist();
    await expect(this.invoiceTotalGoldPrice).toBeDisplayed();

    await expect(this.invoiceFees).toExist();
    await expect(this.invoiceFees).toBeDisplayed();

    await expect(this.invoiceTotalAmount).toExist();
    await expect(this.invoiceTotalAmount).toBeDisplayed();

    await expect(this.invoiceLogo1).toExist();
    await expect(this.invoiceLogo1).toBeDisplayed();

    await expect(this.invoiceLogo2).toExist();
    await expect(this.invoiceLogo2).toBeDisplayed();

    await expect(this.invoiceExportIcon).toExist();
    await expect(this.invoiceExportIcon).toBeDisplayed();

    console.log("End orderHistoryInvoiceSummary");
  }
  async checkStatusTypeDateGrams(status, type, date, grams) {
    console.log("start checkStatusTypeDateGrams");
    //   await driver.waitUntil(async () => await this.invoiceOrderStaus.isExisting(), {
    //     timeout: 5000,
    //     timeoutMsg: 'Expected invoiceOrderStatus to exist'
    // });

    let textValue = await this.invoiceOrderStaus.getAttribute("text");
    console.log(textValue);
    await global.chaiExpect(textValue).to.be.equal(status);

    textValue = await this.invoiceTrxType.getText();
    console.log(textValue);
    await global.chaiExpect(textValue).to.be.equal(type);
    await global.chaiExpect(textValue).to.be.oneOf(["Buy", "Sell"]);

    textValue = await this.invoiceDateTime.getText();
    console.log(textValue);
    await global.chaiExpect(textValue).to.be.equal(date);
    textValue = await this.invoiceTotalGoldInGrams.getText();
    console.log(textValue);
    await global.chaiExpect(textValue).to.be.equal(grams);
    console.log("end checkStatusTypeDateGrams");
  }
  async returnToPerviousScreen() {
    await this.backBtn.click();
  }

  async shareTrxValidation() {
    console.log("start shareTrxValidation ");
    await driver.pause(3000);
    console.log("driver.pause(3000)");

    await this.orderNoValueShare.waitForDisplayed();
    await expect(this.orderNoValueShare).toExist();
    await expect(this.orderNoValueShare).toBeDisplayed();

    await expect(this.goldPriceShare).toExist();
    await expect(this.goldPriceShare).toBeDisplayed();

    await expect(this.totGoldPriceShare).toExist();
    await expect(this.totGoldPriceShare).toBeDisplayed();

    await expect(this.feesShare).toExist();
    await expect(this.feesShare).toBeDisplayed();

    await expect(this.price_valueShare).toExist();
    await expect(this.price_valueShare).toBeDisplayed();

    await expect(this.grams_valueShare).toExist();
    await expect(this.grams_valueShare).toBeDisplayed();

    await expect(this.dateValueShare).toExist();
    await expect(this.dateValueShare).toBeDisplayed();

    console.log("end shareTrxValidation ");
  }
  async shareTrxVerfication(id, totalGold, fees, price, grams, date) {
    console.log("start shareTrxValidation ");

    console.log("end shareTrxValidation ");
  }
  async shareTrx() {
    console.log("start shareTrx ");
    await this.shareBtn.click();
    await this.shareTrxValidation();
    await this.shareTrxVerfication();
    await this.shareBtn2.click();
    console.log("end shareTrx ");
  }
}
export default new orderHistoryPage();
