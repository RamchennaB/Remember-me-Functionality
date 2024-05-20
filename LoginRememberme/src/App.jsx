import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Home from './pages/Home.jsx';
import './App.css'
import ProtectedRoute from './services/protectedRoute.jsx';

function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<ProtectedRoute/>}>
         <Route path="/" element={<Home/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
