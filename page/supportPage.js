const customer_service_btn =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/customer_service_btn"]';
const close_btmsheet_btn =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/close_btmsheet_btn"]';
const support_img =
  '//android.widget.ImageView[@resource-id="com.brightskiesinc.mangmapp:id/support_img"]';
const sheet_header =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/sheet_header"]';
const content =
  '//android.widget.TextView[@resource-id="com.brightskiesinc.mangmapp:id/text"]';
const callBtn =
  '//android.widget.Button[@resource-id="com.brightskiesinc.mangmapp:id/callBtn"]';

class supportPage {
  get customerSupportBtn() {
    return $(customer_service_btn);
  }
  get closeBtn() {
    return $(close_btmsheet_btn);
  }
  get supportImage() {
    return $(support_img);
  }
  get supportHeader() {
    return $(sheet_header);
  }
  get supportContent() {
    return $(content);
  }
  get supportCallBtn() {
    return $(callBtn);
  }

  async contactSupportValidation() {
    console.log("start contactSupportValidation");

    await this.supportImage.waitForDisplayed();

    await expect(this.supportImage).toExist();
    await expect(this.supportImage).toBeDisplayed();

    await expect(this.closeBtn).toExist();
    await expect(this.closeBtn).toBeDisplayed();

    await expect(this.supportHeader).toExist();
    await expect(this.supportHeader).toBeDisplayed();

    await expect(this.supportContent).toExist();
    await expect(this.supportContent).toBeDisplayed();

    await expect(this.supportCallBtn).toExist();
    await expect(this.supportCallBtn).toBeDisplayed();
    console.log("end contactSupportValidation");
  }
  async contactSupportVerification() {
    console.log("start contactSupportVerification");
    await this.customerSupportBtn.click();
    await this.contactSupportValidation();
    await this.closeBtn.click();
    await this.customerSupportBtn.click();
    await this.supportCallBtn.click();
    console.log("end contactSupportVerification");
  }
}
export default new supportPage();
