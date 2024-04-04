import React,{Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ColorRing } from 'react-loader-spinner'
// import Login from './components/Login/Login'
// import Registration from './components/Registration/Registration'

const Login = React.lazy(() => import('./components/Login/Login'));
const Registration = React.lazy(() => import('./components/Registration/Registration'));

function App() {
  return (
    <BrowserRouter >
    <div className="App">
    <Header />
    <Suspense fallback={<div className="loading">
       <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#222', '#999' , '#999','#999','#999']}
          />
     </div>}>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/registration" element={<Registration />} />

    </Routes>
     </Suspense>
    </div>

    </BrowserRouter>
  );
}

export default App;
