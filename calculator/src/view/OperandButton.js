import React, { useContext } from 'react';
import { FoumlaContext } from '../context/FomularProvider';

export const OperandButton = ({value}) =>{
    const { handleOperandButton } = useContext(FoumlaContext);
    
    return (
        <button onClick= {() => handleOperandButton(value)}>
            {value}
        </button>
    );
};