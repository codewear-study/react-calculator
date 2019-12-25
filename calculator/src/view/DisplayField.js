import React, { useContext } from "react";
import { FomularContext } from '../context/FomularProvider';

const DisplayField = () => {
    const { leftOperand, operator, rightOperand } = useContext(FomularContext);

    return (
        <p>{`${leftOperand} ${operator} ${rightOperand}`}</p>
    );
};

export default DisplayField;
    
