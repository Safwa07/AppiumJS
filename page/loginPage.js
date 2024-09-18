const phone =
  '//android.widget.EditText[@resource-id="com.brightskiesinc.mangmapp:id/textfield"]';
class loginPage {
  get phoneNumber() {
    // return $("//android.widget.EditText[@index=1]");
    return $(phone);
  }
  get submitBtn() {
    return $("//android.widget.Button[@index=2]");
  }
  async mobilePhoneFragment_IntialValidation() {
    console.log("start mobilePhoneFragment_IntialValidation");
    await this.phoneNumber.waitForDisplayed();
    // console.log("bbbbbbbb");

    await expect(this.submitBtn).toExist();
    await expect(this.submitBtn).toBeDisplayed();
    const submitIsClickable = await this.submitBtn.isEnabled();
    expect(submitIsClickable).toBe(true, "Submit button should be clickable");

    console.log("End mobilePhoneFragment_IntialValidation");

    // await expect(await this.submitBtn.isExisting()).toBe(true);
    // await expect(await this.submitBtn.isExisting()).toBe(true, 'submitBtn does not exist');
    // assert(await this.submitBtn.isExisting(), 'submitBtn does not exist');
  }

  async loginWithMezaId(phone = "103795791") {
    //103795791 id:136
    //BS03 me
    console.log("start loginWithMezaId ");

    await this.mobilePhoneFragment_IntialValidation();
    await this.phoneNumber.click();
    await this.phoneNumber.setValue(phone);
    console.log("phone " + phone);

    await this.submitBtn.click();
    // await driver.pause(3000);
    console.log("end loginWithMezaId ");
  }
}
export default new loginPage();
