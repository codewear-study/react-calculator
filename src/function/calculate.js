import clearAll from './clearAll'
import inputNumber from './inputNumber'
import decimalPoint from './decimalPoint'
import inputResult from './inputResult'
import inputContinuity from './inputContinuity'

function calculate(state, button) {
    if (button === "C") {
      return clearAll()
    }

    if ("0123456789".indexOf(button) !== -1) {
      return inputNumber(state,button)
    }
   
    if (button === ".") {
      return decimalPoint(state.nextValue)
    }

    if (button === "=") {
      return inputResult(state)
    }

    if (state.operatorValue) {
      return inputContinuity(state,button)
    }

    if (!state.nextValue) {
      return { operatorValue: button };
    }
  
    return {
      displayValue: state.nextValue,
      nextValue: null,
      operatorValue: button,
    };
  }

  export default calculate;
