import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Game from './Game'
import HistoryTable from "./HistoryTable";
import HighScores from "./HighScores";
import HighScoresTable from "./HighScoresTable";
function GameCard(){
    const [rules, setRules] = useState (false);
    const [start, setStart] = useState (false);
    const [history, addToHistory] = useState([]);
    const [numGuesses, setNumGuesses] = useState(0);
    const [highScores,setHighScores] = useState(false);
    const [highScoresTable,setHighScoresTable] = useState(false);
    function openRules(){
        setRules(!rules);
    }
    function startGame(){
        if(highScores)
            return;
        setStart(!start);
        addToHistory(()=>[]);

    }
    return(<>
            <Card  style = {{ position : 'relative'}}>
                <Card.Img  src="Cow.png" style={{height:'40rem'}}/>
                <Card.Body>
                    <div className="row">
                        <Button variant="primary" className="col-3" style = {{marginRight : '10px'}} onClick = {openRules}>Game rules</Button>
                        <Button variant="secondary" className="col-3" onClick={startGame}>Play</Button>
                        <Card.Text className= "col-3"> omar abdel al</Card.Text>
                    </div>
                    {rules && <div><p>you need to guess a 4 digit number, if one digit is correct but not in order you win 1 cow</p>
                        <p>if you guess one digit in order you win 1 bull, you need 4 bulls to win.</p></div>}

                    {start && !highScores && !highScoresTable && <div>
                        <Game history = {history} addToHistory = {addToHistory}
                              numGuesses = {numGuesses} setNumGuesses = {setNumGuesses}
                              highScores = {highScores} setHighScores ={setHighScores}
                              start = {start} setStart = {setStart}/>
                        <HistoryTable history = {history} />
                    </div>
                    }
                    {highScores && <div>
                        <HighScores highScores = {highScores} setHighScores ={setHighScores}
                                    numGuesses = {numGuesses} setNumGuesses={setNumGuesses}
                                    highScoresTable = {highScoresTable} setHighScoresTable = {setHighScoresTable}/>
                        </div>}
                    {highScoresTable &&
                    <HighScoresTable highScoresTable = {highScoresTable} setHighScoresTable = {setHighScoresTable}/>}
                </Card.Body>
            </Card>
        </>
    );
}
export default GameCard;