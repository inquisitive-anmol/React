import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {name} = useParams();
const navigate = useNavigate()
    const handleClick = () => {
navigate(-1);
    }
  return (
    <div>
<h1>Hii! {name}</h1>
<button onClick={handleClick}>Go Back</button>
    </div>
  )
}

export default UserDetails