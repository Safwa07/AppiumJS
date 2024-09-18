class sharedData {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}
// selectedGrams 
// transactionTypeBuy
// boughtGram


module.exports = new sharedData();
