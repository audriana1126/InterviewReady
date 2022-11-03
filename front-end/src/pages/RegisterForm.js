import  {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import React from 'react';

const RegisterForm = ({signUp}) => {
    
  const initialState = { name: "", username: "", password: "", email: ""};
  const [input, setInput] = useState(initialState);
	const navigate = useNavigate()

  const [userState, setuserState] = useState(initialState);

  
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submit attempted')

  // const url = 'https://interview-ready.herokuapp.com/auth/register'
  // const context = {
  //   headers: {
  //     "Content-type": 'Application/json'
  //   },
  //   method: "POST",
  //   body: JSON.stringify(input)
  // }
  // fetch(url, context)
  // .then(response=>response.json())
  // .then(response=>{
  //   console.log('back-end response',response)
  //   localStorage.setItem('token', JSON.stringify(response))
  //   navigate('/profile')
  // })
  // .catch(err=>console.log(err))

  // setuserState(initialState);
  };
    // const createdUserToken = await signUp(input)


 
  //   if (createdUserToken) {
  //     navigate("/login")
  //   } else {
  //     navigate("/login")
  //   }
	// 	setInput(initialState);
  // };
  const goBack = e => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <section className='registerSection'>
      <form onSubmit={handleSubmit}>

        <h1 className='registerH1' >Register now!</h1>
      
        {/* <label htmlFor="username">Name: </label> */}
        <div className='Rcontainer1'>
        <div className='Rcontainer2'>
        <input
          type="text"
          placeholder='Username'
          onChange={handleChange}
          value={input.username}
        />
        </div>
        <br />
        
        {/* <label htmlFor="password">Password: </label> */}
        <div id="registerPassword" className='Rcontainer2'>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={input.password}

        />
        </div>
        </div>
        <br />
        <button className='registerButton' > Register</button>
        <br />
        <button className='registerButton' onClick={goBack}  > Back</button>
    </form>
  </section>  
  );
} 
   
export default RegisterForm;

