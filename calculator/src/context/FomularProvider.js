import React, { useState, createContext } from 'react';
import { OperatorFunction } from '../model/Operator';
import { ErrorText } from '../utils/Error';

export const FomularContext = createContext();

const FomularProvider = props => {
    const [leftOperand, setLeftOperand] = useState('');
    const [operator, setOperator] = useState('');
    const [rightOperand, setRightOperand] = useState('');

    const handleBackButton = () => {
        if(leftOperand === ErrorText)
        {
            setLeftOperand('');
            return;
        }

        if(rightOperand !== '')
        {
            setRightOperand(rightOperand.slice(0, rightOperand.length - 1))
            return;
        }
         
        if(operator !== '')
        {
            setOperator('')
            return;
        }
        
        if(leftOperand !== '')
        {
            setLeftOperand(leftOperand.slice(0, leftOperand.length - 1))
            return;
        }
    };

    const handleClearButton = () => {
        setLeftOperand('');
        setOperator('');
        setRightOperand('');
    };
    
    const handleOperandButton = (value) => {
        if(leftOperand === ErrorText)
        {
            setLeftOperand('');
            return;
        }

        if(isNaN(leftOperand + value))
            return;

        if(operator !== "")
        {
            setRightOperand(String(parseFloat(rightOperand + value)));
            return;
        }

        setLeftOperand(String(parseFloat(leftOperand + value)));
    };

    const handleOperatorButton = (value) => {
        if(leftOperand === "" || leftOperand === ErrorText)
            return;

        if(leftOperand !== "" && rightOperand === "") 
            setOperator(value);

        if(leftOperand !== "" && 
            operator !== "" &&
            rightOperand !== "")
            setLeftOperand(OperatorFunction[operator](leftOperand, rightOperand));  
    };

    const handleEqualButton = () => {
        try{
            setLeftOperand(OperatorFunction[operator](leftOperand, rightOperand));
        }
        catch(e){
            setLeftOperand(e);    
        }
        
        setRightOperand('');
        setOperator('');
    };

    const handleDecimalPointButton = () => {
        if(operator !== '' && rightOperand === '')
        {
            setRightOperand('0.');
            return;
        }

        if(operator !== '' && rightOperand !== '')
        {
            if(rightOperand.includes('.'))
                return;
            
            setRightOperand(rightOperand + '.')
            return;
        }
        
        if(operator === '')
        {
            if(leftOperand.includes('.'))
                return;

            if(leftOperand === '')
            {
                setLeftOperand('0.');
                return;
            }
            
            setLeftOperand(leftOperand + '.');
        }
    };

    return (
        <FomularContext.Provider
            value={{
                handleBackButton,
                handleClearButton,
                handleEqualButton,
                handleOperandButton,
                handleOperatorButton,
                handleDecimalPointButton,
                leftOperand,
                operator,
                rightOperand,
            }}>
            {props.children}
        </FomularContext.Provider>
    );
};

export default FomularProvider;  