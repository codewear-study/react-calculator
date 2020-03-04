import React, { useState } from 'react';
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton';
import ClearButton from './ClearButton';
import ResultField from './ResultField';
import Calculator from './Calculator';

const CalculatorTemplate = () => {

    const calculator = Object.create(Calculator);

    const [value, setValue] = useState(0);
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(0);

    return (
        <div>
            <div>
                <ResultField result={result}></ResultField>
            </div>
            <div>
                <OperatorButton calculator={calculator} value={value} setValue={setValue} operator="+" setOperator={setOperator} setResult={setResult}></OperatorButton>
                <OperatorButton calculator={calculator} value={value} setValue={setValue} operator="-" setOperator={setOperator} setResult={setResult}></OperatorButton>
                <OperatorButton calculator={calculator} value={value} setValue={setValue} operator="*" setOperator={setOperator} setResult={setResult}></OperatorButton>
                <OperatorButton calculator={calculator} value={value} setValue={setValue} operator="/" setOperator={setOperator} setResult={setResult}></OperatorButton>
                <OperatorButton calculator={calculator} value={value} setValue={setValue} operator="=" setOperator={setOperator} setResult={setResult}></OperatorButton>
            </div>
            <div>
                <NumberButton number="." calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="0" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="1" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="2" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="3" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="4" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="5" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="6" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="7" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="8" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
                <NumberButton number="9" calculator={calculator} value={value} setValue={setValue} operator={operator} setOperator={setOperator} setResult={setResult}></NumberButton>
            </div>
            <div>
                <ClearButton calculator={calculator} value={value} setValue={setValue} setOperator={setOperator} setResult={setResult}></ClearButton>
            </div>
        </div >
    );
}
export default CalculatorTemplate;