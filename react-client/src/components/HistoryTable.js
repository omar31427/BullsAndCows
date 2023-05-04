import React, { useState } from 'react'

function HistoryTable({history}){

    return (<>
        <table style={{width: '100%', borderWidth: '1px'}}>
            <thead>
            <tr>
                <th>Guess</th>
                <th>Bulls</th>
                <th>Cows</th>
            </tr>
            </thead>
            <tbody>
            {history.map((object)=>{
                return (
                    <tr >
                        <td>{object[0]}{object[1]}{object[2]}{object[3]}</td>
                        <td>{object[4]}</td>
                        <td>{object[5]}</td>
                    </tr>);
            })}
            </tbody>
        </table>
        </>
    );
};
export default HistoryTable;