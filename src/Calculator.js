let Calculator = {
    value: 0,
  
    add:function(number){
      number = this.checkBlankParams(number);
      this.value += parseFloat(number);
    },
    
    minus:function(number){
      number = this.checkBlankParams(number);
      this.value -= parseFloat(number);
    },
    
    multiply:function(number){
      number = this.checkBlankParams(number);
      this.value *= parseFloat(number);
    },
    
    divide:function(number){
      number = this.checkBlankParams(number);
  
      if(number === "0")
      {
        this.value = "NaN Error";
        return;
      }
  
      this.value /= parseFloat(number);
    },
    
    setValue:function(number){
      number = this.checkBlankParams(number);
      this.value = parseFloat(number);
    },
    
    getValue:function(number){
      return this.value;
    },
    
    checkBlankParams:function(number){
      return number.replace(/(\s*)/g, "");
    }
  };

  export default Calculator;