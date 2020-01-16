import doOperation from './doOperation'

function inputResult(state){
    if (state.nextValue && state.operatorValue) {
        return {
          displayValue: doOperation(state),
          nextValue: null,
          operatorValue: null,
        };
      } 
}

export default inputResult