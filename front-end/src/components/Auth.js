import React, {useEffect} from 'react'
// import {useNavigate} from 'react-router-dom'


export default function Auth({children, navigate}) {
    // const navigate = useNavigate()

    useEffect(()=>{
        const local = localStorage.getItem('token')
        if (!local) {
            navigate('/career')
        }
    }, [])
    return (
        <React.Fragment>{children}</React.Fragment>
    )
}