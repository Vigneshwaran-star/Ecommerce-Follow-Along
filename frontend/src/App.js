import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  // Import directly
import SignUpPage from './pages/SignUpPage';
import "./App.css";
import Home from './pages/Home'; 

const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
