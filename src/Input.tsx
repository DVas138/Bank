import React from "react";
export type Input = {initialInvestment: number, annualInvestment: number , expectedReturn: number, duration: number}
export default function Input({onChange, userInput} : {onChange: Function, userInput: Input}) {
    return (
        <div id={"user-input"}>
            <div className={"input-group"} style={{margin: "1rem"}}>
                <div>
                    <label htmlFor={"init-investment"}>Initial Investment</label>
                    <input type="number" id={"init-investment"}
                           onChange={(e) => onChange(Number.parseFloat(e.target.value), "initialInvestment")}
                           value={userInput.initialInvestment}></input>
                </div>

                <div>
                    <label htmlFor={"annual-investment"}>Annual Investment</label>
                    <input type={"number"} id={"annual-investment"}
                           onChange={(a => onChange(Number.parseFloat(a.target.value), "annualInvestment"))}
                           value={userInput.annualInvestment}></input>
                </div>
            </div>

            <div className={"input-group"} style={{margin: "1rem"}}>
                <div>
                    <label htmlFor={"expected-return"}>Expected Return</label>
                    <input type={"number"} id={"expected-return"}
                           onChange={(e) => onChange(e.target.valueAsNumber, "expectedReturn")}
                           value={userInput.expectedReturn}></input>
                </div>
                <div>
                    <label htmlFor={"duration"}>Duration</label>
                    <input type={"number"} id={"duration"}
                           onChange={(d) => onChange(d.target.valueAsNumber, "duration")}
                           value={userInput.duration}></input>
                </div>
            </div>
        </div>
    )
}