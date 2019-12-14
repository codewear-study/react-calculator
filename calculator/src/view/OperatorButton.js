import React, { useContext } from 'react';
import { FoumlaContext } from '../context/FomularProvider';

export const OperatorButton = ({operator}) =>{
    const { handleOperatorButton } = useContext(FoumlaContext);
    
    return (
        <button onClick= {() => handleOperatorButton(operator)}>
            {operator}
        </button>
    );
};