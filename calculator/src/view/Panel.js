import NumberButton from "./NumberButton";

export const Panel = () => {
    const values = [
        [1, 2, 3, '*'],
        [4, 5, 6, '/'],
        [7, 8, 9, '+'],
        ['-', 0, '=', 'c'],
    ]
    return (
        <table className="panel">
            {values.forEach((value)=>{
                <NumberButton className="numberBtn" value={value}>{value}</NumberButton>
            })}

        </table>
    );
}