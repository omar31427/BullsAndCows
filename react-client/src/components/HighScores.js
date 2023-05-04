import React, { useState } from 'react'
import Button from "react-bootstrap/Button";

function HighScores({highScores,setHighScores,numGuesses,setNumGuesses,highScoresTable,setHighScoresTable}){
    const [userName,setUserName] = useState('')
    const updateName = (event)=>{
        setUserName(event.target.value)
    }
    function registerUser() {

        fetch(`/java_react_war/api/highscores?name=${userName}&score=${numGuesses}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).catch(()=>console.log('error'));


        setHighScoresTable(!highScoresTable)
        setHighScores(!highScores)
        setNumGuesses(0)
    }
    return (
        <>
            <form onSubmit={registerUser}>
                <text>
                    you win! your score is: {numGuesses}
                </text>
                <br/>
                <text>
                    please enter your name so we can register your score
                </text>
                <br/>
                <label htmlFor = 'username'>name</label>
                <input type="username" className="form-content" onChange={updateName}/>
                <Button onClick = {registerUser}>submit</Button>
            </form>
        </>
    );
}
export default HighScores ;