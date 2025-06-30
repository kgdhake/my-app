import { useState } from "react"

export default function Commentform(){
    let [data , setdata] = useState({
        userName : "",
        rating : 5 ,
        comment : ""
     })
let handleData = (event) => {
    const { name, value } = event.target;

    setdata((currData) => ({
      ...currData,
      [name]: value
    }));
  };
     let handlesubmit = (event) => {
        console.log(data);
        event.preventDefault();
     }
    return(
        <>
        <h1>This is a comment form </h1>
        <br />
        <form action="" onSubmit={handlesubmit}>
            <input name="userName" onChange={handleData} value={data.userName} placeholder="UserName" type="text"></input>
            <br />
            <textarea name = "comment" onChange={handleData} value={data.comment} placeholder="Add Comment" type = "text"></textarea>
            <br />
            <input name = "rating" onChange={handleData} value={data.rating} placeholder = "give rating" type = "number" min = "1" max = "5"></input>
            <br></br>
            <button>submit</button>
        </form>
        </>
    )
}