import React, {useState, useEffect} from 'react';
import Auth from '../components/Auth'
import {useNavigate} from 'react-router-dom'
import io from 'socket.io-client'
import endpoint from '../utils/endpoint'

function Se () {
  
  // client-side
    const socket = io(endpoint.uri)
    const [msg, setMsg] = useState('')
    const [typing, setTyping] = useState('')
    const [username, setUsername] = useState('')
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()

    const styles = {
        sender: {
            display: "flex",
            flexDirection: "row-reverse",
            marginBottom: "10px"
        },
        receiver: {
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px"
        },
        chatR: {
            maxWidth: "50%",
            borderRadius: "10px",
            backgroundColor: "blue",
            color: "white",
            padding: "10px"
        },
        chatS: {
            maxWidth: "50%",
            borderRadius: "10px",
            backgroundColor: "green",
            color: "white",
            padding: "10px"
        },
        input: {
            width: "10%",
            padding: "10px 15px"
        }
    }

    useEffect(()=>{
        let user = localStorage.getItem('user')
        user = JSON.parse(user) ?? "Unknown"
        console.log('User', user)
        setUsername(user.name)
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
        socket.emit('se-message', {name: username, msg})
        setMsg('')
        console.log('message sent')
    }

    socket.on('typing-response', (name)=>{
        let typing = `${name} is typing`
        //setTyping(typing)
    })

    socket.on('se-display-message', (msgObj)=>{
        console.log('getting se msgs')
        const msgArr = [...messages, msgObj]
        setMessages(msgArr)
    })

    const messageDisplay = messages.map(({name, msg}, index)=>(
        <React.Fragment key={index}>
            <div style={name===username ? styles.sender : styles.receiver}>
                <div style={name===username ? styles.chatS : styles.chatR}>   
                    <div style={{fontSize: "10px"}}>{name}</div>
                    <div>{msg}</div>
                </div>
            </div>
        </React.Fragment>
    ))
    //console.log('Message', msg)
    return (
        <Auth navigate={navigate}>
          <section className="seChat">  
            <div style={{width: '100%'}}> 
                <h1 className='SEh1' style={{textAlign: "center", fontSize: "20px",}}>You've entered a chat room</h1>
                <button className='seButton' onClick={()=>navigate("/career")}>Leave</button>
                <div>{messageDisplay}</div>
                {/* <div>
                    <div style={{width: "100%", backgroundColor: "blue"}}>
                        <div style={{display: "flex", }}></div>
                    </div>
                </div> */}
                <br /><br />
                <div>{typing}</div>
                    <div className='container3'>
                    <div style={{ padding: "10px"}}>
                    <input
                    name="name"
                    type="text"
                    value={msg}
                    onChange={(e)=>onChange(e.target.value)}
                    className="seInput"
                    // style={styles.input}
                    />
                    </div>
                    </div>
                <br />
                {/* <button onClick={logout}>Logout</button> */}
                <div className='container3'>
                <button className='seSend' onClick={sendMsg}>Send</button>
                </div>
                <br /><br />
                </div>
          </section>
            
            
        </Auth>
    )}

  export default Se
