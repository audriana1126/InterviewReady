import React from 'react';
import Auth from '../components/Auth'
import {Link} from 'react-router-dom'
import io from 'socket.io-client'
import endpoint from '../utils/endpoint'
import {useNavigate} from 'react-router-dom'

function Career () {
    const navigate = useNavigate()
    const socket = io(endpoint.uri)

    // socket.on('go-to-software-engineer-room', ()=>{
    //     navigate('/software-engineer-room')
    // })
    const se = () => socket.emit('join-software-engineer-room')

    socket.on('go-to-software-engineer-room', ()=> navigate('/software-engineer-room'))

    const ui = () => socket.emit('join-ui-ux-room')
    socket.on('go-to-ui-ux-room', ()=> navigate('/ui-ux-room'))

    const da = () => socket.emit('join-data-analyst-room')
    socket.on('go-to-data-analyst-room', ()=> navigate('/data-analyst-room'))

    return (
        <Auth navigate={navigate}>
            
            <div className="Career">
            
                <h1 className='careerH1'>Choose Your Career</h1>
                <button className='profileButton' onClick={()=>navigate('/profile')}>Profile</button>
                <div className="careerButtons"> 
                <button onClick={se}>Software Engineer</button>
                </div>
                <div className="careerButtons">
                <br />
                <button onClick={ui}>UI/UX</button>
                </div>
                <br />
                <div className="careerButtons">
                <button onClick={da}>Data Analyst</button>
                </div>
                <br />
                <div className="careerButtons">
                
                </div>
            </div>
        </Auth>
  )}

  export default Career








