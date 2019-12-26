import React from 'react'
import CalculatorController from './CalculatorController'

class ClearButton extends React.Component{
    render(){
        return(
            <button 
                onClick={CalculatorController.inputClearButton.bind(this)}>clear
            </button>
        )
    }
}

export default ClearButton;