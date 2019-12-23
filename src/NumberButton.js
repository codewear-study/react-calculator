import React from 'react'
import CalculatorController from './CalculatorController'

class NumberButton extends React.Component{
    render(){
        return(
            <button 
                onClick={CalculatorController.inputNumberFromButton.bind(this, this.props.value)}>{this.props.value}
            </button>
        )
    }
}

export default NumberButton;