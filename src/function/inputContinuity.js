import doOperation from './doOperation'

function inputContinuity(state,button){
    return {
        displayValue: doOperation(state),
        nextValue: null,
        operatorValue: button,
    };
}
  export default inputContinuity