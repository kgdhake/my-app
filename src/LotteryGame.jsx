
import { useState } from "react"
export default function LotteryGame(){
    let [num , setnum] = useState({num : 0 , digisum : 0});
    function generate(){
        let num = Math.floor(Math.random() * 900) + 100;
         let n = num;
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    setnum({
        num : num ,
        digisum : sum
    })
    }
    return (

        <>
    <h1>This is lottery game</h1>
    <button onClick={generate}>Generate Random Number</button>
        <h3>{num.num}</h3>
        {(num.digisum == 15) ? <p>Yah! you won the lottery</p> : <p>You Lost</p>}
        </>
    )
}