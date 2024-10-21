import React from "react";
import {Input} from "./Input.tsx";
import {calculateInvestmentResults, formatter} from "./util/investment.js"

export default function Result({userInput}: { userInput: Input }) {
    const result = calculateInvestmentResults(userInput)
    return (
        <table id={"result"}>
            <thead>
            <tr>
                <th>
                    Year
                </th>
                <th>
                    Investment Value
                </th>
                <th>
                    Interest (Year)
                </th>
                <th>
                    Total Interest
                </th>
                <th>
                    Invested Capital
                </th>
            </tr>
            </thead>
            <tbody>
            {result.map((y) => {
                const totalInvestment = y.valueEndOfYear - y.annualInvestment * y.year;
                const total = y.valueEndOfYear - totalInvestment
                return (
                    <tr key={y.year}>
                        <td>{y.year}</td>
                        <td>{formatter.format(y.valueEndOfYear)}</td>
                        <td>{formatter.format(y.interest)}</td>
                        <td>{formatter.format(totalInvestment)}</td>
                        <td>{formatter.format(total)}</td>
                    </tr>)
            })}
            </tbody>
        </table>

    )
}