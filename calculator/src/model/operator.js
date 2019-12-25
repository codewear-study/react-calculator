import { ErrorText } from "../utils/Error";

const isOperator = (text) => {
    return text in ['+','-','*','/']
}

const OperatorFunction = {
    '+': (a, b) => String(parseFloat(a) + parseFloat(b)),
    '-': (a, b) => String(parseFloat(a) - parseFloat(b)),
    '*': (a, b) => String(parseFloat(a) * parseFloat(b)),
    '/': (a, b) => {
        if(b === '0')
            throw ErrorText;

        return String(parseFloat(a) / parseFloat(b));
    },
}

export {isOperator, OperatorFunction};
