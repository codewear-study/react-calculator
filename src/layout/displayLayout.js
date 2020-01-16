import React, {Component } from 'react';

class displayLayout extends Component{
    render(){
        const displayStyle = {textAlign:"right"}
        return(
            <input type="text" readOnly style={displayStyle} value={this.props.value}></input>
        )
    }
}

export default displayLayout;
