import supportPage from "./supportPage";
const sharedData = require("./sharedData");

const packages = "~Packages";
const customize = "~Customize";
const oneGramPriceValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/gramPriceValue"]';
const back_button =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/back_button"]';
const btn_proceed =
  '//android.widget.FrameLayout[@resource-id="com.brightskiesinc.mangmapp:id/btn_proceed"]';
const gramValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/txtgrams"]';
const totalPriceValue =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/txtTotalPrice"]';
const customMessage =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/txtWeight"]';
const customGramValue =
  '//android.widget.EditText[@resource-id="com.brightskiesinc.mangmapp:id/quantityTxt"]';
const incArrow =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/increaseBtn"]';
const decArrow =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/decreaseBtn"]';
class buyGoldPage {
  get incArrow() {
    return $(incArrow);
  }
  get decArrow() {
    return $(decArrow);
  }
  get gramValue() {
    return $(gramValue);
  }
  get totalPriceValue() {
    return $(totalPriceValue);
  }
  get customMessage() {
    return $(customMessage);
  }
  get customGramValue() {
    return $(customGramValue);
  }
  get returnArrow() {
    // return (async () => $("//android.widget.ImageView[@index=0]"))();
    return $(back_button);
  }
  get oneGramPriceValue() {
    return $(oneGramPriceValue);
  }
  get packageTap() {
    return $(packages);
    // return (async () =>
    //   $('//android.widget.LinearLayout[@content-desc="Packages"]'))();
  }
  get p3GramPackage() {
    return (async () => $('//android.widget.TextView[@text="0.3 Grams"]'))();
  }
  get p3GramPackageBtn() {
    return $(
      '(//android.view.ViewGroup[@resource-id="com.brightskiesinc.mangmapp:id/parentContainer"])[1]'
    );
  }
  get p5GramPackageBtn() {
    return $(
      '(//android.view.ViewGroup[@resource-id="com.brightskiesinc.mangmapp:id/parentContainer"])[2]'
    );
  }
  get oneGramPackageBtn() {
    return $(
      '(//android.view.ViewGroup[@resource-id="com.brightskiesinc.mangmapp:id/parentContainer"])[3]'
    );
  }
  get p5GramPackage() {
    return (async () => $('//android.widget.TextView[@text="0.5 Grams"]'))();
  }
  get oneGramPackage() {
    return (async () => $('//android.widget.TextView[@text="1.0 Grams"]'))();
  }
  get selectedGramsPackage() {
    return (async () => $("//android.widget.TextView[@index=1]"))();
  }
  get selectedAmountPackage() {
    return (async () => $("//android.widget.TextView[@index=4]"))();
  }
  get customizeTap() {
    return $(customize);
  }
  get proceedBtn() {
    // return (async () => $('//android.widget.TextView[@text="Proceed"]'))();
    return $(btn_proceed);
  }

  async packagesValidation() {
    await this.packageTap.click();

    await expect(this.p3GramPackage).toExist();
    await expect(this.p3GramPackage).toBeDisplayed();

    await expect(this.p5GramPackage).toExist();
    await expect(this.p5GramPackage).toBeDisplayed();

    await expect(this.oneGramPackage).toExist();
    await expect(this.oneGramPackage).toBeDisplayed();

    await expect(this.proceedBtn).toExist();
    await expect(this.proceedBtn).toBeDisplayed();

    let clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("false"); // Asserts that the tap is enabled

    // clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    // chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled

    console.log("proceedBtn grey");

    await this.p3GramPackageBtn.click();
    clickableAttributeValue = await this.p3GramPackageBtn.getAttribute(
      "enabled"
    );
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("proceedBtn orange");

    await expect(this.gramValue).toExist();
    await expect(this.gramValue).toBeDisplayed();

    await expect(this.totalPriceValue).toExist();
    await expect(this.totalPriceValue).toBeDisplayed();

    await expect(this.oneGramPriceValue).toExist();
    await expect(this.oneGramPriceValue).toBeDisplayed();

    await this.p5GramPackageBtn.click();
    clickableAttributeValue = await this.p5GramPackageBtn.getAttribute(
      "enabled"
    );
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("proceedBtn orange");

    await expect(this.gramValue).toExist();
    await expect(this.gramValue).toBeDisplayed();

    await expect(this.totalPriceValue).toExist();
    await expect(this.totalPriceValue).toBeDisplayed();

    await expect(this.oneGramPriceValue).toExist();
    await expect(this.oneGramPriceValue).toBeDisplayed();

    await this.oneGramPackageBtn.click();
    clickableAttributeValue = await this.oneGramPackageBtn.getAttribute(
      "enabled"
    );
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled

    console.log("proceedBtn orange");

    await expect(this.gramValue).toExist();
    await expect(this.gramValue).toBeDisplayed();

    await expect(this.totalPriceValue).toExist();
    await expect(this.totalPriceValue).toBeDisplayed();

    await expect(this.oneGramPriceValue).toExist();
    await expect(this.oneGramPriceValue).toBeDisplayed();
  }
  async customizeValidation() {
    await this.customizeTap.click();

    await expect(this.gramValue).toExist();
    await expect(this.gramValue).toBeDisplayed();

    await expect(this.totalPriceValue).toExist();
    await expect(this.totalPriceValue).toBeDisplayed();

    await expect(this.oneGramPriceValue).toExist();
    await expect(this.oneGramPriceValue).toBeDisplayed();

    await expect(this.customMessage).toExist();
    await expect(this.customMessage).toBeDisplayed();

    await expect(this.customGramValue).toExist();
    await expect(this.customGramValue).toBeDisplayed();

    await expect(this.totalPriceValue).toExist();
    await expect(this.totalPriceValue).toBeDisplayed();

    clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("proceedBtn orange");

    let attributeValue = await this.customGramValue.getAttribute("text");
    chaiExpect(attributeValue).to.be.equal("0.1"); // Asserts that the tap is enabled

    let oneGramText = await this.oneGramPriceValue.getAttribute("text");
    let oneGramFloat = parseFloat(oneGramText);

    let calculatedTotalPriceValue = oneGramFloat * 0.1;
    let calculatedTotalPriceValueText = calculatedTotalPriceValue.toString();
    let totalPriceValue1 = await this.totalPriceValue.getAttribute("text");
    chaiExpect(totalPriceValue1).to.be.equal(calculatedTotalPriceValueText);

    await expect(this.incArrow).toExist();
    await expect(this.incArrow).toBeDisplayed();

    await expect(this.decArrow).toExist();
    await expect(this.decArrow).toBeDisplayed();

    clickableAttributeValue = await this.decArrow.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("false"); // Asserts that the tap is enabled
    console.log("decArrow disabled");

    clickableAttributeValue = await this.incArrow.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("incArrow enabled");
  }
  async buyGoldValidation() {
    await driver.pause(3000);

    await expect(this.packageTap).toExist();
    await expect(this.packageTap).toBeDisplayed();
    let clickableAttributeValue = await this.packageTap.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("packageTap clickable");

    await expect(this.customizeTap).toExist();
    await expect(this.customizeTap).toBeDisplayed();
    clickableAttributeValue = await this.customizeTap.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("customizeTap clickable");

    await expect(this.proceedBtn).toExist();
    await expect(this.proceedBtn).toBeDisplayed();
    clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("false"); // Asserts that the tap is enabled
    console.log("proceedBtn grey");

    await expect(supportPage.customerSupportBtn).toExist();
    await expect(supportPage.customerSupportBtn).toBeDisplayed();
    clickableAttributeValue = await supportPage.customerSupportBtn.getAttribute(
      "enabled"
    );
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the supportBtn is enabled
    console.log("customerSupportBtn enabled");

    await expect(this.returnArrow).toExist();
    await expect(this.returnArrow).toBeDisplayed();
    clickableAttributeValue = await this.returnArrow.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the back arrow is enabled

    await expect(this.p3GramPackage).toExist();
    await expect(this.p3GramPackage).toBeDisplayed();

    await expect(this.p5GramPackage).toExist();
    await expect(this.p5GramPackage).toBeDisplayed();

    await expect(this.oneGramPackage).toExist();
    await expect(this.oneGramPackage).toBeDisplayed();

    await this.customizeTap.click();
    console.log("click on customizeTap");
    await driver.pause(3000);

    await expect(this.proceedBtn).toExist();
    await expect(this.proceedBtn).toBeDisplayed();
    clickableAttributeValue = await this.proceedBtn.getAttribute("enabled");
    chaiExpect(clickableAttributeValue).to.be.equal("true"); // Asserts that the tap is enabled
    console.log("proceedBtn orange");
  }
  async selectpackage() {
    console.log("start selectpackage");

    await this.p3GramPackageBtn.click();
    let valueForSelectedGram = parseFloat(
      await this.gramValue.getAttribute("text")
    ); //0.3 gram
    sharedData.set("selectedGrams", valueForSelectedGram); // Store the value in shared data
    console.log("set shared data");

    await this.validateCalculation(valueForSelectedGram); //0.3

    console.log("end selectpackage");
  }
  async validateCalculation(selectedGrams) {
    console.log("start validateCalculation");

    let oneGram = parseFloat(await this.oneGramPriceValue.getAttribute("text")); //3369.21

    let totalPriceForSelectedGram = parseFloat(
      await this.totalPriceValue.getAttribute("text")
    ); //1010.76

    // let result = (selectedGrams * oneGram).toFixed(2);
    let result = await this.trimToTwoDecimalPlaces(selectedGrams * oneGram);
    let resultText = result.toString();
    chaiExpect(totalPriceForSelectedGram.toString()).to.be.equal(resultText);
    console.log("end validateCalculation");
  }
  async clickOnProceed() {
    await this.proceedBtn.click();
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
export default new buyGoldPage();
  