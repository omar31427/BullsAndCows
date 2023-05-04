import React, { useState } from 'react'

function DropDown({id,onChange}){

    const [val, setVal] = useState(0)
    const options = [{value : 0, label : 0},
        {value : 1, label : 1},
        {value : 2, label : 2},
        {value : 3, label : 3},
        {value : 4, label : 4},
        {value : 5, label : 5},
        {value : 6, label : 6},
        {value : 7, label : 7},
        {value : 8, label : 8},
        {value : 9, label : 9}];

    const changeVal  = (event)=>{
        setVal(()=> event.target.value);
        onChange(parseInt(id),parseInt(event.target.value));
        //change(event);
    }
    return (
        <>
            <select id = {id} className = 'col-3' value = {val} onChange={changeVal}>
                {options.map((option)=>(
                    <option value = {option.value}>{option.label}</option>
                ))}
            </select>
        </>
    );
}
export default DropDown;