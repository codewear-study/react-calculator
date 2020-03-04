import React from 'react'

const ClearButton = props => {
    const { calculator, value, setValue, setOperator, setResult } = props;

    const handleClick = () => {
        setValue("0");
        setOperator("");
        calculator.value = "0";
        setResult(value);
    }

    return (
        <button
            onClick={handleClick}>clear
        </button>
    )
}

export default ClearButton;