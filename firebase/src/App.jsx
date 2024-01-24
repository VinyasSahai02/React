import React from 'react';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import {Main} from './pages/main/main'
import {Login} from './pages/login'
import {Navbar} from "./components/Navbar"
import { CreatePost } from './pages/create-post/createpost';


function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/createpost' element={<CreatePost/>}></Route>
          </Routes>
        </Router>
      </div>
        
    </>
  )
}

export default App
