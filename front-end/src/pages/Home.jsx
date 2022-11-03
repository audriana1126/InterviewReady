import React from 'react';
import { Routes, Route } from "react-router-dom"
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";
import RegisterForm from './RegisterForm';

function Home () {

    return (
        <div className='homePage'>
          <div className="HPh1"><h1>Interview-Ready</h1></div>
          <div className="HPh2"><h2>Boost your confidence the best way we know how</h2></div>
            {/* <img class="image1" src="https://i.imgur.com/c31ZUtp.png" /> */}
            <div className='bothLinks'>
              <Link to="/login" element={<LoginForm />} className='HPlink'>
              <h1> Login</h1>
              </Link>
              <Link to="/register" element={<RegisterForm />} className='HPlink'>
              <h1> Register</h1> 
              </Link>
            </div>
        </div>
  )}

  export default Home

  