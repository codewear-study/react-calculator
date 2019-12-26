import Calculator from './Calculator';

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
            Calculator.setValue("0");
            CalculatorController.operator = "";
        }

        CalculatorController.value += number;
        document.getElementById('result').value = CalculatorController.value;
    }

    static inputOpeartorFromButton(op) {
        switch(CalculatorController.operator)
        {
            case "" :
                Calculator.setValue(CalculatorController.value);
                CalculatorController.operator = op;
                CalculatorController.value = "0";
                return;

            case "+":
                Calculator.add(CalculatorController.value);
                document.getElementById('result').value = Calculator.value;
                CalculatorController.operator = op;
                CalculatorController.value = "0";
                return;
                
            case "-":
                Calculator.minus(CalculatorController.value);
                document.getElementById('result').value = Calculator.value;
                CalculatorController.operator = op;
                CalculatorController.value = "0";
                return;

            case "*":
                Calculator.multiply(CalculatorController.value);
                document.getElementById('result').value = Calculator.value;
                CalculatorController.operator = op;
                CalculatorController.value = "0";
                return;
                
            case "/":
                Calculator.divide(CalculatorController.value);
                document.getElementById('result').value = Calculator.value;
                CalculatorController.operator = op;
                CalculatorController.value = "0";
                return;
            default:
                break;
        }

        if(op === '='){
            switch(CalculatorController.operator)
            {
                case "+":
                    Calculator.add(CalculatorController.value);
                    break;
                case "-":
                    Calculator.minus(CalculatorController.value);
                    break;
                case "*":
                    Calculator.multiply(CalculatorController.value);
                    break;
                case "/":
                    Calculator.divide(CalculatorController.value);
                    break;
                default:
                    break;
            }

            CalculatorController.operator ="=";
            CalculatorController.value = "0";

            document.getElementById('result').value = Calculator.getValue();
            return;
        }
        CalculatorController.operator = op;
    }
    static inputClearButton() {
        CalculatorController.value = "0";
        CalculatorController.operator = "";
        Calculator.value = "0";
        document.getElementById('result').value = CalculatorController.value;
    }
}

export default CalculatorController;