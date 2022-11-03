import React from 'react'


export default function UserProfile({data}) {
    if(!data){
        return <div />
    }
  return (
    <div className="userProfileComponent">
        <div className='profileInfo'>Username: {data.username}</div>
        <br />
        <div className='profileInfo'>Email: {data.email}</div>
        <br />
        <div className='profileInfo'>Name: {data.name}</div>
    </div>
  )
}
