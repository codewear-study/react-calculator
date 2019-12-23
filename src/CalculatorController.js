import CalculatorModel from './CalculatorModel';

class CalculatorController {
    static value = "0";
    static operator = "";
    static inputNumberFromButton(number) {
        if (CalculatorController.value === "0") {
            CalculatorController.value = number;
            document.getElementById('result').value = CalculatorController.value;
            return;
        }
        if (CalculatorController.operator === "=")
        {
            CalculatorModel.setValue("0");
            CalculatorController.operator = "";
        }

        CalculatorController.value += number;
        document.getElementById('result').value = CalculatorController.value;
    }

    static inputOpeartorFromButton(oper) {
        if(CalculatorController.operator === "")
        {
            CalculatorModel.setValue(CalculatorController.value);
            CalculatorController.operator = oper;
            CalculatorController.value = "0";
            return;
        }

        if (CalculatorController.operator === "+") 
        {
            CalculatorModel.add(CalculatorController.value);
            document.getElementById('result').value = CalculatorModel.value;
            CalculatorController.operator = oper;
            CalculatorController.value = "0";
            return;
        }
        if (CalculatorController.operator === '-') {
            CalculatorModel.minus(CalculatorController.value);
            document.getElementById('result').value = CalculatorModel.value;
            CalculatorController.operator = oper;
            CalculatorController.value = "0";
            return;
        }
        if (CalculatorController.operator === '*') {
            CalculatorModel.multiply(CalculatorController.value);
            document.getElementById('result').value = CalculatorModel.value;
            CalculatorController.operator = oper;
            CalculatorController.value = "0";
            return;
        }
        if (CalculatorController.operator === '/') {
            CalculatorModel.divide(CalculatorController.value);
            document.getElementById('result').value = CalculatorModel.value;
            CalculatorController.operator = oper;
            CalculatorController.value = "0";
            return;
        }

        if(oper === '='){
            if (CalculatorController.operator === "+") {
                CalculatorModel.add(CalculatorController.value);
            }
            if (CalculatorController.operator === "-") {
                CalculatorModel.minus(CalculatorController.value);
            }
            if (CalculatorController.operator === "*") {
                CalculatorModel.multiply(CalculatorController.value);
            }
            if (CalculatorController.operator === "/") {
                CalculatorModel.divide(CalculatorController.value);
            }
            CalculatorController.operator ="=";
            CalculatorController.value = "0";

            document.getElementById('result').value = CalculatorModel.getValue();
            return;
        }
        CalculatorController.operator = oper;
    }
    static inputClearButton() {
        CalculatorController.value = "0";
        CalculatorController.operator = "";
        CalculatorModel.value = "0";
        document.getElementById('result').value = CalculatorController.value;
    }
}

export default CalculatorController;