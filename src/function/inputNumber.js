function inputNumber(state,button){
    const next = state.nextValue
    const operator = state.operatorValue

    if (button === "0" && next === "0") {
        return {};
      }

      if (operator) {
        if (next) {
          return { nextValue: next + button };
        }
        return { nextValue: button };
      } 

      if (next) {
        const nextValue = next === "0" ? button : next + button;
        return {
	      nextValue: nextValue,
          displayValue: null, 
        };
      }
      return {
        nextValue: button,
        displayValue: null,
      };
}


export default inputNumber