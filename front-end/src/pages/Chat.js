import React, {useState, useEffect} from 'react';
import Auth from '../components/Auth'
import {useNavigate} from 'react-router-dom'
import io from 'socket.io-client'
import endpoint from '../utils/endpoint'

function Chat () {
  
  // client-side
    const socket = io(endpoint.uri)
    const [msg, setMsg] = useState('')
    const [typing, setTyping] = useState('')
    const [username, setUsername] = useState('')
    const [messages, setMessages] = useState([{name: "Unknown", msg: 'Hello world'}])
    const navigate = useNavigate()

    useEffect(()=>{
        let user = localStorage.getItem('name')
        user = user ?? "Unknown"
        console.log('User', user)
        setUsername(user)
    }, [])
    
    const logout = () => {
        localStorage.removeItem('token')

        //redirecting user to login
        navigate('login')
    }

    const onChange = text => {
        setMsg(text)
        //socket.emit('typing', username)
        socket.emit('typing', {id: socket.id, username})
    }

    const sendMsg = () => {
        socket.emit('message', {name: username, msg})
        console.log('message sent')
    }

    socket.on('typing-response', (name)=>{
        let typing = `${name} is typing`
        setTyping(typing)
    })

    socket.on('display-mesage', (msgObj)=>{
        const msgArr = [...messages, msgObj]
        setMessages(msgArr)
    })

    const messageDisplay = messages.map(({name, msg}, index)=>(
        <React.Fragment key={index}>
            <div>
                <div>{name}</div>
                <div>{msg}</div>
            </div>
        </React.Fragment>
    ))
    //console.log('Message', msg)
    return (
        <Auth navigate={navigate}>
            <div > 
                <h1>This is Chat</h1>
                <div>{typing}</div>
                <div className="chatInput">
                <input
                  name="name"
                  type="text"
                  value={msg}
                  onChange={(e)=>onChange(e.target.value)}
                /></div>
                {/* <button onClick={logout}>Logout</button> */}
                <button onClick={sendMsg}>Send</button>
                <br /><br />

                <div>{messageDisplay}</div>
            </div>
        </Auth>
    )}

  export default Chat
