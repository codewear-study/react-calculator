import React, { useContext, useEffect } from "react";
import { FomularContext } from '../context/FomularProvider';
import KeyCode  from "../utils/KeyCode";

export const EqualButton = ({ value }) =>{
    const { handleEqualButton } = useContext(FomularContext);

    const handleKeyDownEqual = event => {
        if(KeyCode.equal === event.which)
            handleEqualButton();
    };

    useEffect(()=> {    
        window.addEventListener("keydown", handleKeyDownEqual);
        
        return () => window.removeEventListener("keydown", handleKeyDownEqual);
    });

    return (
        <button className="operator-btn" onClick={() => handleEqualButton()}>
            {value}
        </button>
    );
};

export default EqualButton;