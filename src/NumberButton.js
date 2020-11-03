import React from 'react'

const NumberButton = props => {
    const { number, calculator, value, setValue, operator, setOperator, setResult } = props;

    const handleClick = () => {
        if (value === "0") {
            setValue(number);
            setResult(value);
            return;
        }
        if (operator === "=") {
            calculator.setValue("0");
            setOperator("");
        }
        // setValue(value + number);
        // setResult(value);
    }

    return (
        <button
            onClick={handleClick()}>{number}
        </button>
    )
}
export default NumberButton;