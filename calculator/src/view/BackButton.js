import React, { useContext, useEffect } from "react";
import { FomularContext } from "../context/FomularProvider";
import { KeyCode } from "../utils/KeyCode";

export const BackButton = () => {
    const { handleBackButton } = useContext(FomularContext);
    
    const isBackspace = keyCode =>{
        if(KeyCode.BackButton === keyCode)
            return true;
        
        return false;
    };

    const handleKeyDownBackspace = event => {
        if(isBackspace(event.keyCode))
            handleBackButton();
    }

    useEffect(()=> {
        document.addEventListener("keyCodedown", handleKeyDownBackspace);
        
        return document.removeEventListener("keyCodedown", handleKeyDownBackspace)
    }, []);

    return (
        <button onClick={() => handleBackButton()}>
            B
        </button>
    );
};