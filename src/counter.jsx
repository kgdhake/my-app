import { useState } from "react"
export default function Counter(){
    let [Count , setCount] = useState(0)
    let incCount = () =>{
        setCount(Count+1);
        console.log(Count);
    }
    return (
        <>
        <h4>count = {Count}</h4>
        <button onClick={incCount}>Inc Count</button>
        </>
    )
}