import EditForm from '../components/EditForm'
import Auth from '../components/Auth'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import endpoint from '../utils/endpoint'
import {getUserToken, setUserToken, clearUserToken} from '../utils/authToken'
// const BASE_URL = process.env.REACT_APP_URL || "http://localhost:4000/";


const Update = (props) => {
    const [editForm, setEditForm] = useState(null)
    const [user, setUser] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${endpoint.url}user/${id}`
// console.log('hello')
    // const getUser = async () => {
    //     console.log(URL)
    //     // test your endpoint before making a request
    //     try {

    //         const response = await fetch(URL)
    //         const userData = await response.json()
    //         // console.log(userData)
    //         setUser(userData)
    //         setEditForm(userData)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    const loaded = () => {
        return (
            <div className="User">
         
                <h1>Update Page</h1>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <h2>{user.email}</h2>
                <h2>{user.password}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner 
    }

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        console.log('submit fired')
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm) // <===editForm is the current state
        }

        try {
            // await fetch (URL, options) => 
            console.log(URL)
            const response = await fetch(URL, options)
            const updatedUser = await response.json()
            // trigger a new fetch (getUser())

            setUser(updatedUser)
            setEditForm(updatedUser)
        } catch (err) {
            console.log(err)
        }
        // we can reference our other handleSubmit (user) 
    }

    const EditUser = () => {
        localStorage.setItem('user',JSON.stringify(user))
        //setUserToken('new-tok')
        //navigate("/profile")
        const context = {
            headers: {
              "Content-Type": 'Application/json'
            },
            method: "PUT",
            body: JSON.stringify(user)
          }
        fetch(`${endpoint.url}user/${user.id}`, context)
        .then(res=>res.json())
        .then(res=>{
            if (res){
                navigate('/profile')
            }
            //console.log('Edit response from backend', res)
        })
        .catch(err=>console.log(err))
        
    }

    const removeUser = async () => {
        try {

            const options = { method: 'DELETE' }
            const URL = `https://interview-ready.herokuapp.com/user/${user._id}`
            // 
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedUser = await response.json()
            // our destroy - findByIdAndDelete >> original document
            console.log(deletedUser)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.reload()
            // navigate('/')
        } catch (err) {
            console.log(err)
            window.location.reload()
            // https://interview-ready.herokuapp.com/user/
        }
    }
    /* How to delete a resource from the Update page:
    1. Add a dom button (return) +++
    2. Event Handler (click) > 
        > contact our database with a fetch
        > URL -> http://.../user/objectid 
        > options - method (delete)
        (assuming delete is a success)
        > redirect to homepage (useNavigate)
    3. add onClick to the button r
    */


    useEffect(() => {
        //getUser()
        let userData = localStorage.getItem('user')
        userData = userData ? JSON.parse(userData) : null

        if(userData){
            setUser(userData)
        }
    }, [])

    // console.log(`Current User: ${JSON.stringify(User)}`)

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    return (
    <Auth navigate={navigate}>
        <section className='updateSection'>
        
            {/* {editForm ?
            <EditForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                userData={editForm}
                val={`Edit ${user.name}`}
                /> : null} */}
            <div>
                <h1 className="editAccount">Edit Your Account</h1>
            </div>
                <form action="" method="POST">
            <div>
                
                <input
                className="updateInput"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={user?.name ?? ''}
                onChange={(e)=>onChange(e)}
                />
            </div>
            <div>
                
                <input
                className="updateInput"
                type="text" 
                placeholder="username" 
                name="username"
                value={user?.username ?? ''} 
                onChange={(e)=>onChange(e)}
                id="updateUsername" />
            </div>
            <div>
                
                <input
                className="updateInput"
                type="text"
                placeholder="your@email.com"
                name="email"
                value={user?.email ?? ""}
                onChange={(e)=>onChange(e)}
                id="updateEmail"
                />
            </div>
          
                </form>
        {/* {user ? loaded() : loading()} */}
            <div className='updateButton'>
                <button className="button is-info" onClick={EditUser}>Edit User</button>
            </div>
            <br /> 
            <div className="updateButton">
            <button 
            onClick={()=>navigate('/profile')}>Back
            </button>
        {/* <Link to="/">Back Home</Link> */}
            </div>
            <br />
            <div className='updateButton'>
                <button onClick={removeUser}>Delete User</button>
            </div>
        </section>
    </Auth>    

)}

export default Update








