import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import DropDown from "./DropDown";

function Game({history,addToHistory,start,setStart,numGuesses,setNumGuesses,highScores,setHighScores}){
    const [inputs, setInputs] = useState([0,0,0,0]);
    const [ranDigitArr,setRanArr] = useState([0,0,0,0]);
    const [numBulls, setNumBulls] = useState(0);
    const [numCows, setNumCows] = useState(0);
    const [showScore, setShowScore] = useState(false);

    let index = 0;
    function randomize(){
        ranDigitArr[0] = Math.floor(Math.random() * 10);
        ranDigitArr[1] = Math.floor(Math.random() * 10);
        ranDigitArr[2] = Math.floor(Math.random() * 10);
        ranDigitArr[3] = Math.floor(Math.random() * 10);

        console.log(ranDigitArr);
    }
    if (history.length === 0)
        randomize();
    let Index = 0;
    function handleSubmit(){

            let bulls = 0;
            let cows = 0;
            let ranArrIndex = 0;

            inputs.forEach(input => {
                if (ranDigitArr.includes(input)) {
                    if (ranDigitArr[ranArrIndex] === input) {
                        bulls++;
                    } else
                        cows++;
                }
                ranArrIndex++;
            }
        )
        if(bulls === ranDigitArr.length) {
            setStart(!start)
            setHighScores(!highScores)
        }
        setNumGuesses(numGuesses=>numGuesses+1);
        setShowScore(true)
        setNumCows(cows)
        setNumBulls(bulls)
        addToHistory(history=> [[inputs[0],inputs[1],inputs[2],inputs[3],bulls,cows],...history])
    }

    function changeInput  (index,newVal){
          inputs[index] = newVal;
        console.log('random digit array = '+ranDigitArr);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='row'>

                        <DropDown id = {index++} onChange ={changeInput}/>

                        <DropDown id = {index++} onChange ={changeInput}/>

                        <DropDown id = {index++} onChange ={changeInput}/>

                        <DropDown id = {index++} onChange ={changeInput}/>

                    </div>
                    <Button onClick = {handleSubmit}>guess</Button>
                    <br/>
                    {showScore &&
                        <text>your score : bulls = {numBulls} cows = {numCows}</text>
                    }
                    <text ></text>
                </form>
            </div>
        </>
    );
}
export default Game;