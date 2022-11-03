import { Routes, Route } from "react-router-dom"
import Chat from "../pages/Chat"
// import Career from "../pages/Career"
import Home from "../pages/Home"
// import LoginForm from "../pages/LoginForm"
import Profile from "../pages/Profile"
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"
import Update from "../pages/Update"
import React from 'react';
import Career from "../pages/Career"
import Se from "../pages/Se"
import Ui from "../pages/Ui"
import Da from "../pages/Da"
// import LogInComponent from "../pages/LogInComponent"



function Main() {


  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (<main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/career" element={<Career />} />
      
      
      <Route path="/update" element={<Update />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginForm />} /> 
      <Route path="/software-engineer-room" element={<Se/>} /> 
      <Route path="/ui-ux-room" element={<Ui />} /> 
      <Route path="/data-analyst-room" element={<Da />} /> 

    </Routes>
  </main>)
    
}
export default Main;

{/* <Route path="/career" element={<LogInComponent />} /> */}
{/* <Route path="/career" element={<Career />} /> */}
// const Main = (props) => {
//     return (<main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/update/:id" element={<Update />} />
          
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<LoginForm />} /> 
//         </Routes>
//       </main>)
//   }
  
//   export default Main
//   
//            <
//           <Route path="/career/chat" element={<Chat />} />
//           {/* <Route path="/" element={<Home />} /> */}
// 