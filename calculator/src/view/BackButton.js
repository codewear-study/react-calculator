import React, { useContext, useEffect } from "react";
import { FomularContext } from "../context/FomularProvider";
import KeyCode from "../utils/KeyCode";

const BackButton = ({ value }) => {
    const { handleBackButton } = useContext(FomularContext);
    
    const isBackspace = keyCode =>{
        if(KeyCode.backspace === keyCode)
            return true;
        
        return false;
    };

    const handleKeyDownBackspace = event => {
        if(isBackspace(event.which))
            handleBackButton();
    }

    useEffect(()=> {    
        window.addEventListener("keydown", handleKeyDownBackspace);
        
        return () => window.removeEventListener("keydown", handleKeyDownBackspace);
    });

    return (
        <button className="operator-btn" onClick={() => handleBackButton()}>
            {value}
        </button>
    );
};

export default BackButton;