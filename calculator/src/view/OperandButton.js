import React, { useContext, useEffect } from 'react';
import { FomularContext } from '../context/FomularProvider';
import KeyCode from "../utils/KeyCode";

const OperandButton = ({value}) =>{
    const { handleOperandButton } = useContext(FomularContext);

    const handleKeyDownOperand = event => {
        if(!KeyCode.isNumber(event.which))
            return;

        if(event.key === String(value))
            handleOperandButton(value);
    }

    useEffect(()=> {    
        window.addEventListener("keydown", handleKeyDownOperand);
        
        return () => window.removeEventListener("keydown", handleKeyDownOperand);
    });

    return (
        <button className="operand-btn"onClick= {() => handleOperandButton(value)}>
            {value}
        </button>
    );
};

export default OperandButton;