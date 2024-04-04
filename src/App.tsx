import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'

function App() {
  return (
    <BrowserRouter >
    <div className="App">
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/registration" element={<Registration />} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
