const isOperator = (text) 
    => text in ['+','-','*','/']

const getOperatorFunction = {
    '+': (a, b) => a+b,
    '-': (a, b) => a-b,
    '*': (a, b) => a*b,
    '/': (a, b) => a/b,
}

export {isOperator, getOperatorFunction};
