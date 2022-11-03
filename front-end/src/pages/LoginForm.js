import { useState } from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import endpoint from '../utils/endpoint';
// import Main from '../components/Main';

function LoginForm() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const initialState = { username: '', password: '' };
  const [formState, setformState] = useState({ username: '', password: '' });
  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState('')
  // console.log(formState)

  const [userState, setuserState] = useState(initialState);

  const handleChange = (event) => {
    setformState({ ...formState, [event.target.name]: event.target.value });
  };

  const logout = () => {
    localStorage.removeItem('token')
    // Redirect user to login page
    navigate('/login')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the data in the component state
    // console.log(formState);


    // Delete this afterwards
      // const url = 'https://interview-ready.herokuapp.com/user'
      // fetch(url)
      // .then(res=>res.json())
      // .then(res=>{
      //   if(res){
      //     const result = res.find(item=>item.id === '6344a575b8981dae2c48ae9c')
      //     //console.log('result',result)
      //     localStorage.setItem('token', JSON.stringify(result))
      //     navigate('/profile')
      //   }
      // })
      // .catch(err=>console.log(err))
    // End of Delete this afterwards

    const url = `${endpoint.uri}auth/login`
    const context = {
      headers: {
        "Content-Type": 'Application/json'
      },
      method: "POST",
      body: JSON.stringify({username: user, password: pass})
    }
    fetch(url, context)
    .then(response=>response.json())
    .then(response=>{
      // console.log('back-end response',response)
      // localStorage.setItem('token', JSON.stringify(response))
      //navigate('/profile')

      if(response.isLoggedIn){
        console.log(response)
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        navigate('/career')
      }else{
        setErrMsg(response.error)
        setTimeout(()=>setErrMsg(''), 3000)
      }
      
    })
    .catch(err=>console.log(err))

    // setTimeout(() => {
    //   localStorage.setItem('token', 'set-user-token')

    //   //redirect to chat
    //   navigate('/career')
    // }, 1000)

    // clear the form
    setuserState(initialState);

  };
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
      <section className='loginSection'>
        <form onSubmit={handleSubmit}>
            
            
        <h1 className="Login">Login</h1>

      {/* <label className='loginLabel' htmlFor="username">Username:</label> */}
      <div  className='container'>
          <div className='container2'>
          <input
            name="username"
            type="text"
            value={user}
            placeholder='Username'
            className="password"
            onChange={(e)=>setUser(e.target.value)}
            // value={formState.username}
          />
          </div>
      {/* <label className='loginLabel' htmlFor="password">Password:</label> */}
          <div className='container2'>
          <input
            name="password"
            onChange={(e)=>setPass(e.target.value)}
            value={pass}
            id="password"
            type="password"
            className="password"
            placeholder='password'
          />
      </div>
      {/* <div style={{color: 'white', fontSize: '20px'}}>{errMsg}</div> */}
      </div>
      <div className='container'>
          <button className='loginSubmit' type="submit">Login</button>
      </div>
      </form>
      </section>
  );
}
export default LoginForm;

