import React, { useContext } from "react";
import { FoumlaContext } from '../context/FomularProvider';

export const ClearButton = () =>{
    const { handleClearButton } = useContext(FoumlaContext);

    return (
        <button onClick={() => handleClearButton}>
            C
        </button>
    );
};