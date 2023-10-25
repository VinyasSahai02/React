import React, { useEffect } from "react"
import ReactDOM from "react-dom"


ReactDOM.render(<h1 className="header">hello world</h1>,document.querySelector("#root"));

const navbar=(
//all elements are inside a single tag as JSX does not take in more than one tag
    <nav>  
        <h1>website</h1>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navbar,document.querySelector("#root"))


//CUSTOM COMPONENTS
import Header from "./Header"  //or"./Header.js"
function NavBar(){
    return(
        <Header />
    )
}
ReactDOM.render(<NavBar /> ,document.querySelector("#root"))


//PROPS
function NavBar(){
    return(
        <>
        <User name="vinyas" age={20} />
        </>
    )
}


//LISTS
const user=[
    {name:"vinyas",age:20},
    {name:'ritesh',age:19},
    {name:'shreyash',age:20},
    {name:'yash',age:21}
]
function script() {
  return (
    <div>
        {user.map((name,key)=>{
            return <div> {user.name}{user.age}</div> //looping thru elements
        })}
    </div>
  )
}


//STATES-variable that holds data
import { useState } from "react";
import { func } from "prop-types";
function App() {
    // let age=0;
    const[age,setAge]=useState(0)   //structure of useState=>takes the variable that is being used and a function set(Variablename)
    //useState checks if the value has changed or not, if changed it triggers react to rerender
    const increaseAge=()=>{
        setAge(age+1);
    }
  return (
    <div>
        {age}
        <button onClick={increaseAge}> increase age</button>
    </div>
  )
}
function State(){
    const[inputValue,setInputValue]=useState("")
    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handleInputChange}/>
            {inputValue}   
        </div>//prints whatever user types in the input while he user is typing it
    )
}


//USEEFFECT HOOK AND LIFECYCLE
import Text from "Text.js";

function App() {
    const[showText,setShowText]=useState(false)
  return (
    <div>
        <button onClick={()=>{setShowText(!showText)}}>show text</button>
        {showText &&<Text/>}
    </div>
  )
}


//API
//npm install axios
import Axios from "axios"
//example1
import { useState, useEffect } from 'react'
function App() {
    const[catFact,setCatFact]=useState("")
    // fetch("https://catfact.ninja/fact")
//     .then((response)=>response.json())
//     .then((data)=>{})

    const fetchCatFact=()=>{
        Axios.get("https://catfact.ninja/fact")
        .then((resp)=>{
        setCatFact(resp.data.fact)
    })
    }

    useEffect(()=>{
        fetchCatFact();
    },[])

  return (
    <div>
        <button onClick={fetchCatFact}>cat fact generator</button>
        <p>{catFact} </p>
    </div>
  )
}

//example2
import Axios from "axios"
import { useState, useEffect } from 'react'
function App() {
    const[name,setName]=useState("")
    const[predictedAge,setPredictedAge]=useState(0)
    const fetchData=()=>{
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res)=>{setPredictedAge(res.data.age)})
    }
  return (
    <div>
        <input placeholder="example name" onChange={(event)=>{setName(event.target.value)}} />
        <button onClick={fetchData}>predict age</button>
        <h1>predicted age:{predictedAge}</h1>
    </div>
  )
}
