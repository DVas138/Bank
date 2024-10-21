import React from "react";
import {Header} from "./Header.tsx"
import Input from "./Input.tsx"
import {useState} from "react";
import Result from "./Result.tsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
    let validInput = userInput.duration >=1;

    function handleChange(inputValue: number, id: string) {
        setUserInput(oldState => {
            return {
                ...oldState,
                [id]: inputValue
            }
        })
    }

    return (
        <>
            <Header/>
            <Input onChange={handleChange} userInput={userInput}></Input>
            {validInput? <Result userInput={userInput}/> : <p className={"center"}>Add valid duration!</p>}
        </>
    )
}

export default App
