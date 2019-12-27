import React from "react";
import OperandButton from "./OperandButton";
import OperatorButton from "./OperatorButton";
import ClearButton from "./ClearButton";
import DisplayField from "./DisplayField";
import BackButton from "./BackButton";
import DecimalPointButton from "./DecimalPointButton";
import EqualButton from "./EqualButton";

const Panel = () => (
        <div className="display-panel">
            <div>
                <DisplayField/>
            </div>
            <div>
                <div>
                    <OperandButton value={1}/>
                    <OperandButton value={2}/>
                    <OperandButton value={3}/>
                    <OperatorButton value={"*"}/>
                </div>
                <div>
                    <OperandButton value={4}/>
                    <OperandButton value={5}/>
                    <OperandButton value={6}/>
                    <OperatorButton value={"/"}/>
                </div>
                <div>
                    <OperandButton value={7}/>
                    <OperandButton value={8}/>
                    <OperandButton value={9}/>
                    <OperatorButton value={"+"}/>
                </div>
                <div>
                    <OperatorButton value={"-"}/>
                    <OperandButton value={0}/>
                    <EqualButton value={"="}/>
                    <ClearButton value={"C"}/>
                    <BackButton value={"B"}/>
                    <DecimalPointButton value="."/>
                </div>
            </div>

        </div>
);

export default Panel;