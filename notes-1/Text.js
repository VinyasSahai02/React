import React from 'react'
import { useState, useEffect } from 'react'

export const Text=() =>{
    const [text,setText]=useState("")

    useEffect(()=>{
      console.log("component mounted")  //only calls itself when the component is mounted(means is visible on webapp)

      return ()=>{
        console.log("component unmounted")  //calls itself when component unmounts
      }

    },[])
    //if [text], func would call itself everytime the input changes

  return (
    <div>
        <input onChange={(event)=>{setText(event.target.value)}} />
        <h1>{text}</h1>
    </div>
  )
}
