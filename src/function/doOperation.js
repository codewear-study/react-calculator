function doOperation(state) {
    const operator = state.operatorValue
    const preOperand = parseFloat(state.displayValue || "0")
    const backOperand = parseFloat(state.nextValue || (operator === "/" || operator === '*' ? "1": "0"))
    if (operator === "+") {
      return (preOperand+backOperand).toString();
    }
    if (operator === "-") {
      return (preOperand-backOperand).toString();
    }
    if (operator === "*") {
      return (preOperand*backOperand).toString();
    }
    if (operator === "/") {
      if (backOperand == "0") {
        return "NaN"; 
      } 
      if (backOperand != "0"){
        return (preOperand/backOperand).toString();
      }
  }   
    console.log('error');
  }

  export default doOperation;