const Calculator = {
  value: 0,

  add(number) {
    number = this.checkBlankParams(number);
    this.value += parseFloat(number);
  },

  minus(number) {
    number = this.checkBlankParams(number);
    this.value -= parseFloat(number);
  },

  multiply(number) {
    number = this.checkBlankParams(number);
    this.value *= parseFloat(number);
  },

  divide(number) {
    number = this.checkBlankParams(number);

    if (number === "0") {
      this.value = "NaN Error";
      return;
    }
    this.value /= parseFloat(number);
  },

  setValue(number) {
    number = this.checkBlankParams(number);
    this.value = parseFloat(number);
  },

  getValue(number) {
    return this.value;
  },

  checkBlankParams(number) {
    return number //.replace(/(\s*)/g, "");
  }
};

export default Calculator;