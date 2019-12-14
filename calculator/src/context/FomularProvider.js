import React, { createContext } from 'react';
import { OperatorFunction } from '../model/operator';

const FomulaContext = createContext();

const FomulaProvider = props => {
    const [leftOperand, setLeftOperand] = useState('');
    const [operator, setOperator] = useState('');
    const [rightOperand, setRightOperand] = useState('');

    // 왼쪽 값입력중이면 왼쪽값을
    // 오퍼레이터라면 오퍼레이터를
    // rightOperand가 있다면 rightOperand
    const handleBackButton = () => {
        if(rightOperand != '')
        {
            setRightOperand(rightOperand.slice(0, rightOperand.length - 1))
            return;
        }
         
        if(operator != '')
        {
            setOperator('')
            return;
        }
        
        if(leftOperand != '')
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
    
    const handleOperandButton = () => {

    };

    const handleCalculateButton = () =>{
        setLeftOperand(OperatorFunction[operator](leftOperand, rightOperand));
    }

    return (
        <FomulaContext.Provider
            value={{
                handleBackButton,
                handleClearButton,
                handleDisplay,
                handleCalculateButton,
            }}
        >
            {props.children}
        </FomulaContext.Provider>
    );
};

export default FomulaProvider;  