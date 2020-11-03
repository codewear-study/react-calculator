import React from 'react'

const ResultField = props => {
    const { result } = props;
    return (
        <input type="text" name="result" value={result}></input>
    )
}

export default ResultField;