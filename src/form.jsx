import { useState } from "react"

export default function Form(){
    let [data , setdata] = useState({fullName: "" , userName : ""});
    let handlenamechange = (event) =>{
let fieldName = event.target.name;
let newValue = event .target.value;
setdata((currdata) =>{
currdata[fieldName] = newValue;
return {...currdata}
})
    }
    let handleClick = (event) => {
        console.log(data);
    }
     let handleChange = (event) => {
    event.preventDefault(); // prevent page reload on submit
    console.log(data);
  };
    return( <>
 <form onChange={handleChange}>
    <label htmlFor="userName">UserName</label>
    <input id = "userName"  placeholder="Enter Your Name" value={data.userName} name = "userName" onChange={handlenamechange}/>
    <br></br>
    <label htmlFor="fullName">FullName</label>
    <input id = "fullName" placeholder="Enter Your userName" value={data.fullName} name="fullName" onChange={handlenamechange}/>
    <br></br>
    <button onClick={handleClick}>Submit</button>
 </form>
    </>)
}