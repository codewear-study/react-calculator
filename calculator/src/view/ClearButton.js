import React, { useContext, useEffect } from "react";
import { FomularContext } from '../context/FomularProvider';
import KeyCode from "../utils/KeyCode";

const ClearButton = ({value}) =>{
    const { handleClearButton } = useContext(FomularContext);

    const handleKeyDownClear = event => {
        if(KeyCode.clear === event.which)
            handleClearButton();
    };

    useEffect(()=> {    
        window.addEventListener("keydown", handleKeyDownClear);
        
        return () => window.removeEventListener("keydown", handleKeyDownClear);
    });

    return (
        <button className="operator-btn" onClick={() => handleClearButton()}>
            {value}
        </button>
    );
};

export default ClearButton;