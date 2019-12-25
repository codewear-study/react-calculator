const KeyCode = {
    backspace : 8,
    equal : 13,
    clear : 67,
    decimalPoint : 190,
    isNumber : (keyCode) => {
        if(keyCode >= 48 && keyCode <= 57)
            return true;
        
        if(keyCode >= 96 && keyCode <= 105)
            return true;
            
        return false;
    },
    isOperator : (keyCode) =>{
        if(keyCode === 106 ||
            keyCode === 107 ||
            keyCode === 109 ||
            keyCode === 111 )
            return true;
        
        return false;
    }

}

export default KeyCode;