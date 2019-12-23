import React from 'react'
import CalculatorController from './CalculatorController'

class OperatorButton extends React.Component{
    render(){
        return(
            <button onClick={CalculatorController.inputOpeartorFromButton.bind(this, this.props.operator)}>{this.props.operator}</button>
        )
    }
}

export default OperatorButton;