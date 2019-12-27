import React, { useContext, useEffect } from "react";
import { FomularContext } from '../context/FomularProvider';
import KeyCode from "../utils/KeyCode";

const DecimalPointButton = ({value}) =>{
    const { handleDecimalPointButton } = useContext(FomularContext);

    const handleKeyDownDecimalPoint = event => {
        if(KeyCode.decimalPoint === event.which)
            handleDecimalPointButton();
    };

    useEffect(()=> {    
        window.addEventListener("keydown", handleKeyDownDecimalPoint);
        
        return () => window.removeEventListener("keydown", handleKeyDownDecimalPoint);
    });

    return (
        <button className="operator-btn" onClick={() => handleDecimalPointButton()}>
            {value}
        </button>
    );
};

export default DecimalPointButton;