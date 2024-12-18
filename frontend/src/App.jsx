import React from 'react'
import './app.css'
import {BrowserRouter as Router,Route,Routes, Form} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home.jsx'
import Success from './pages/Success.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Router>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    <Toaster/>

    </Router>
  )
}

export default App