// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import {setUserToken, clearUserToken} from './utils/authToken.js';
import {useState, useEffect} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const registerUser = async (data) => {

    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    
      const newUser = await fetch(
        "http://localhost:4000/auth/register",
        configs
      )
      const parasedUser = await newUser.json()
      console.log(parasedUser)

      //sets local storage
      setUserToken(parasedUser.token)
      //put the returned user object in state
      setCurrentUser(parasedUser.currentUser)
      //adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(parasedUser.loggedIn)


      const backendURL = 'https://interview-ready.herokuapp.com/'

       } catch (error){
        clearUserToken();
        setCurrentUser(null);
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Main />
    </div>
);
}

//     // <div className="App">
//     //   <Header />
//     //   <LoginForm />
//     //   <Main />
//     //   <RegisterForm />
//     // </div>

export default App;