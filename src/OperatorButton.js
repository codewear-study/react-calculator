import React from 'react'

const OperatorButton = props => {

    const { calculator, value, setValue, operator, setOperator, setResult } = props;

    const handleClick = (op) => {
        switch (op) {
            case "":
                calculator.setValue(value);
                setOperator(op);
                setValue("0");
                return;

            case "+":
                calculator.add(value);
                //setValue(calculator.value);
                //setOperator(op);
                //setValue("0");
                return;

            case "-":
                calculator.minus(value);
                // setValue(calculator.value);
                // setOperator(op);
                // setValue("0");
                return;

            case "*":
                // calculator.multiply(value);
                // setValue(calculator.value);
                // setOperator(op);
                // setValue("0");
                return;

            case "/":
                calculator.divide(value);
                // setValue(calculator.value);
                // setOperator(op);
                // setValue("0");
                return;
            default:
                break;
        }

        if (op === '=') {
            switch (operator) {
                case "+":
                    calculator.add(value);
                    break;
                case "-":
                    calculator.minus(value);
                    break;
                case "*":
                    calculator.multiply(value);
                    break;
                case "/":
                    calculator.divide(value);
                    break;
                default:
                    break;
            }
            // setOperator("=");
            // setValue("0");
            // setResult(calculator.getValue());
            return;
        }
        setOperator(op);
    }
    return (
        <button onClick={handleClick(operator)}>{operator}</button>
    )
}

export default OperatorButton;