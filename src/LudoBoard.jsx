import { useState } from "react"

export default function LudoBoard(){
    let [move , setmove] = useState({blue : 0 , red : 0 , yellow : 0 , green : 0})
    function updateBlue(){
    setmove((prevMove) => {
        return {...prevMove , blue : prevMove.blue +1}
    })
}
 function updategreen(){
    setmove((prevMove) => {
        return {...prevMove , green : prevMove.green +1}
    })
}
 function updatered(){
    setmove((prevMove) => {
        return {...prevMove , red : prevMove.red +1}
    })
}
 function updateyellow(){
    setmove((prevMove) => {
        return {...prevMove , yellow : prevMove.yellow +1}
    })
}
    return (
        <>
        <h3>Game Begins</h3>
        <div>
        <p>Yellow Moves = {move.yellow}</p>
        <button onClick={updateyellow}>+1</button>
         <p>red Moves = {move.red}</p>
        <button onClick={updatered}>+1</button>
         <p>green Moves = {move.green}</p>
        <button onClick={updategreen}>+1</button>
         <p>Blue Moves = {move.blue}</p>
        <button onClick={updateBlue}>+1</button>
        </div>
        </>
    )
}