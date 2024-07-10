import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='flex flex-col gap-3'>
        <Link to="/user/john">John</Link>
        <Link to="/user/shivam">Shivam</Link>
        <Link to="/user/abhishek">Abhishek</Link>

        <hr />


        <Outlet />
    </div>
  )
}

export default User