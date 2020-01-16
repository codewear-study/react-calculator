import React, {Component } from 'react';
import calculate from "../function/calculate"
import DisplayLayout from "./displayLayout"
import ButtonLayout from "./buttonLayout"

class reactCalculator extends Component{
    constructor(){
        super() 
        this.state = {
            nextValue: null,
            operatorValue: null,
            displayValue: null
        }
    }

    buttonClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName))
    }

    inputKeyboard = (event) => {
      let {key} = event
      const operations = ['/','*','+','-','.','=']
      
      if (key === 'Enter')
        key = '='
      
      if ((/\d/).test(key)) {
        event.preventDefault()
        this.buttonClick(key)
      } 
      if (operations.indexOf(key)!= -1) {
        event.preventDefault()
        this.buttonClick(key)
      }
    };  
    
    componentDidMount() {
      document.addEventListener('keydown', this.inputKeyboard)
    }
  
    componentWillUnmount() {
    document.removeEventListener('keydown', this.inputKeyboard)
    }

    render(){
        return(
            <div>
                <DisplayLayout value = {this.state.nextValue || this.state.displayValue}></DisplayLayout>
                <ButtonLayout click = {this.buttonClick}></ButtonLayout>
            </div>
        )
    }
}

export default reactCalculator;

