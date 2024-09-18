class onBoardingPage {
  get skipBtn() {
    return $('//android.widget.TextView[@text="Skip"]');
  }
  get moveArrow() {
    return $("//android.widget.ImageButton[@index=4]");
  }

  async onBoardingScreen1() {
    console.log("start onBoardingScreen1");
    await this.skipBtn.waitForDisplayed();
    await this.skipBtn.click();
    console.log("end onBoardingScreen1");
  }
  async onBoardingScreen2() {
    /**Not working bec. skip selector not found in app now : BUG */
    console.log("start onBoardingScreen2");
    await this.moveArrow.click();
    // await this.skipBtn.waitForDisplayed()
    await this.skipBtn.click();
    console.log("end onBoardingScreen2");
  }
}
export default new onBoardingPage();
