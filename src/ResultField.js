import React from 'react'

class ResultField extends React.Component{
    
    input = null;

    render(){
        return(
           <input id="result" ref={ref =>{this.input = ref;}}></input>
        )
    }
}

export default ResultField;