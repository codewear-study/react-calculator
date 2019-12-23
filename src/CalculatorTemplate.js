import React from 'react';
import CalculatorController from './CalculatorController';
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton';
const CalculatorTemplate = () =>{
    return (
        <div>
            <h1>
                <input id="result"></input>
            </h1>
            <h1>
                <OperatorButton operator="+"></OperatorButton>
                <OperatorButton operator="-"></OperatorButton>
                <OperatorButton operator="*"></OperatorButton>
                <OperatorButton operator="/"></OperatorButton>
                <OperatorButton operator="="></OperatorButton>
            </h1>

            <h1>
                <NumberButton value= "."></NumberButton>
                <NumberButton value= "0"></NumberButton>
                <NumberButton value= "1"></NumberButton>
                <NumberButton value= "2"></NumberButton>
                <NumberButton value= "3"></NumberButton>
                <NumberButton value= "4"></NumberButton>
                <NumberButton value= "5"></NumberButton>
                <NumberButton value= "6"></NumberButton>
                <NumberButton value= "7"></NumberButton>
                <NumberButton value= "8"></NumberButton>
                <NumberButton value= "9"></NumberButton>
            </h1>

            <h1>
                <button onClick={CalculatorController.inputClearButton.bind(this)}>clear</button>
            </h1>
        </div>
    );
}


export default CalculatorTemplate;