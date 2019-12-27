import React, { useContext, useEffect } from 'react';
import { FomularContext } from '../context/FomularProvider';
import KeyCode from "../utils/KeyCode";

const OperatorButton = ({value}) =>{
    const { handleOperatorButton } = useContext(FomularContext);
    
    const handleKeyDownOperator = event => {
        if(!KeyCode.isOperator(event.which))
            return;

        if(event.key === value)
            handleOperatorButton(value);
    };

    useEffect(()=> {    
        window.addEventListener("keydown", handleKeyDownOperator);
        
        return () => window.removeEventListener("keydown", handleKeyDownOperator);
    });

    return (
        <button className="operator-btn" onClick= {() => handleOperatorButton(value)}>
            {value}
        </button>
    );
};

export default OperatorButton;