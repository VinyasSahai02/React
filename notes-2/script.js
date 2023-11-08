import React from 'react'

//REACT ROUTER DOM
//npm install react-router-dom
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Profile } from './pages/Profile'
function script() {
  return (  //routing to different pages
//Routes is used to define all the different routes
//Router is used to define where do you want to have access to react router dom stuff
//every page will have the links
    <div>
        <Router>
            <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            </div>
            <Routes>  
                <Route path="/" element={<Home />}/>   
                <Route path="/contact" element={<Contact />}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<h1>page not found</h1>}/>
            </Routes>
        </Router>
    </div>
  )
}


//USECONTEXT HOOK AND STATE MANAGEMENT
//watch video better understanding=>pedrotech


//use of useeffect not recommended to fetch data-.as need to change index.html
//REACT QUERY 
//npm install @tanstack/react-query
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Profile } from './pages/Profile'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
function script() {
  const client=new QueryClient() //access to client
  return ( //every component inside provider will have access to react query
    <div> 
      <QueryClientProvider client={client}> 
        <Router>
            <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            </div>
            <Routes>  
                <Route path="/" element={<Home />}/>   
                <Route path="/contact" element={<Contact />}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<h1>page not found</h1>}/>
            </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}


//FORMS IN REACT
import {Form} from "./components/Form"
import { useToggle } from './useToggle'
function App() {
  return (
    <div>
      <Form/>
    </div>
  )
}


//CUSTOM HOOKS

function script() {
  const[isVisible,toggle]=useToggle();
  const[isVisible2,toggle2]=useToggle();
//both hooks are completely independent
  return (
    <div>
      <button onClick={toggle}>
        {isVisible ? "hide":"show"}
      </button>
      {isVisible && <h1>hidden text</h1>}

      <button onClick={toggle2}>
        {isVisible2 ? "hide":"show"}
      </button>
      {isVisible2 && <h1>hidden text</h1>}
      
    </div>
  )
}


//REACT REDUX TOOLKIT
//npm install @reduxjs/toolkit react-redux