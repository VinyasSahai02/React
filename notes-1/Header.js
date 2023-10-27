import React from 'react'

function Header(){
    return(
        <nav className="">  
            <h1>REACT</h1>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

//PROPS
const User=(props)=> {
  return (
    <>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
    </>
  );
};
export default User

