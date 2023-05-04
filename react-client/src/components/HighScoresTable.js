import React, { useState , useEffect} from 'react'
function HighScoresTable({highScoresTable,setHighScoresTable}){

    const [scores,setScores] = useState([]);

    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(`Some error occured : ${response.status} ${response.statusText}`);
        }

        return response.json();
    }

    function handleJson(jsonStr) {

        const arr = Object.entries(jsonStr);


        setScores(arr)

    }
    let params = {}
    useEffect(() => {
     params = {
        score: "score",
        name: "name"
    };
    fetch(`/java_react_war/api/highscores?name=s&score=2`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'datatype': 'json'
        },
        body: new URLSearchParams(params).toString()
    })
        .then(handleResponse)
        .then(handleJson)
        .catch((e)=>"error retrieving highscores from server");

    }, []);
    function onClick(){
        setHighScoresTable(!highScoresTable)
    }
    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {scores.map(score => (
                    <tr >
                        <td>{score[0]}</td>
                        <td>{score[1]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={onClick}>exit</button>
        </>
    );
}
export default HighScoresTable;