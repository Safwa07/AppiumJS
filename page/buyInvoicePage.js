import supportPage from "./supportPage";
const sharedData = require("./sharedData");

const title =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/title"]';
const infoMessage =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/maxPrice"]';
const gramsValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/grams"]';
const gramText =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/lblGrams"]';
const goldPriceText =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/lblNetPrice"]';
const goldPriceValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/gramPrice"]';
const totalGoldPriceText =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/lblTotGold"]';
const totalGoldPriceValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/totalGoldPrice"]';
const feesText =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/lblTotGoldSell"]';
const feesValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/estimatedFees"]';
const totalAmountText =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/lblTotalAmount"]';
const totalAmountValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/totalAmount"]';
const infoMessage1 =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/txtDescription"]';
const submitBtn =
  '//android.widget.FrameLayout[@resource-id="com.brightskiesinc.mangmapp:id/btn_submit"]';
const backBtn =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/back_button"]';

class buyInvoicePage {
  get title() {
    return $(title);
  }
  get goldPriceValue() {
    return $(goldPriceValue);
  }
  get infoMessage() {
    return $(infoMessage);
  }
  get totalGoldPriceValue() {
    return $(totalGoldPriceValue);
  }
  get gramsValue() {
    return $(gramsValue);
  }
  get gramText() {
    return $(gramText);
  }
  get goldPriceText() {
    return $(goldPriceText);
  }
  get totalGoldPriceText() {
    return $(totalGoldPriceText);
  }
  get feesText() {
    return $(feesText);
  }

  get backBtn() {
    return $(backBtn);
  }

  get submitBtn() {
    return $(submitBtn);
  }

  get infoMessage1() {
    return $(infoMessage1);
  }

  get totalAmountText() {
    return $(totalAmountText);
  }

  get totalAmountValue() {
    return $(totalAmountValue);
  }

  get feesValue() {
    return $(feesValue);
  }
  getElementsToCheck() {
    return [
      { element: this.backBtn, name: "Back Button" },
      { element: this.title, name: "Title" },
      { element: this.infoMessage, name: "Info Message" },
      { element: this.gramText, name: "gramText" },
      { element: this.gramsValue, name: "Grams Value" },
      { element: this.goldPriceText, name: "goldPriceText" },
      { element: this.totalGoldPriceText, name: "totalGoldPriceText" },
      { element: this.totalGoldPriceValue, name: "totalGoldPriceValue" },
      { element: this.feesText, name: "feesText" },
      { element: this.feesValue, name: "feesValue" },
      { element: this.totalAmountText, name: "totalAmountText" },
      { element: this.totalAmountValue, name: "totalAmountValue" },
      { element: this.infoMessage1, name: "infoMessage1" },
      { element: this.submitBtn, name: "submitBtn" },
    ];
  }

  async pageValidation() {
    await driver.pause(3000);

    for (const { element, name } of this.getElementsToCheck()) {
      await expect(element).toExist({ message: `${name} should exist` });
      await expect(element).toBeDisplayed({
        message: `${name} should be displayed`,
      });
    }

    let clickableAttributeValue = await this.backBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("backBtn clickable");

    clickableAttributeValue = await this.submitBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("submitBtn clickable");

    clickableAttributeValue = await supportPage.customerSupportBtn.getAttribute(
      "enabled"
    );
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("customerSupportBtn clickable");
  }
  async pageCalculations() {
    const selectedGrams = sharedData.get("selectedGrams"); // Access the shared value
    let grams = parseFloat(await this.gramsValue.getAttribute("text"));
    chaiExpect(grams).to.be.equal(selectedGrams);

    // TotalGoldPrice = Grams*GoldPrice
    let goldPrice = parseFloat(await this.goldPriceValue.getAttribute("text"));

    let resultOfTotalGoldPrice = await this.trimToTwoDecimalPlaces(
      selectedGrams * goldPrice
    );
    let resultOfTotalGoldPriceText = resultOfTotalGoldPrice.toString();
    let totalGoldPrice = parseFloat(
      await this.totalGoldPriceValue.getAttribute("text")
    );

    chaiExpect(totalGoldPrice.toString()).to.be.equal(resultOfTotalGoldPriceText);

    // totalAmount = TotalGoldPrice + Fees
    let fees = parseFloat(await this.feesValue.getAttribute("text"));

    let resultOfTotalAmount =  await this.trimToTwoDecimalPlaces(resultOfTotalGoldPrice + fees);
    let resultOfTotalAmountext = resultOfTotalAmount.toString();
    let totalAmount = parseFloat(
      await this.totalAmountValue.getAttribute("text")
    );

    chaiExpect(totalAmount.toString()).to.be.equal(resultOfTotalAmountext);
  }
  async clickOnSubmit() {
    sharedData.set("transactionTypeBuy", "Buy"); // Store the value in shared data
    console.log("set transactionType as shared data");

    let boughtGram = await this.gramsValue.getAttribute("text");
    sharedData.set("boughtGram", boughtGram); // Store the value in shared data
    console.log("set boughtGram as shared data");

    await this.submitBtn.click();
  }
  async trimToTwoDecimalPlaces(value) {
    // Convert the number to a string
    let valueStr = value.toString();

    // Find the position of the decimal point
    let decimalIndex = valueStr.indexOf(".");

    // If there's no decimal point, return the value as it is
    if (decimalIndex === -1) {
      return valueStr;
    }

    // Extract the part up to two decimal places
    let trimmedValueStr = valueStr.substring(0, decimalIndex + 3); // +3 to include two decimal places and the decimal point

    return trimmedValueStr;
  }
}

export default new buyInvoicePage();
