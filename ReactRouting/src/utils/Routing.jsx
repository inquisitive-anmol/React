import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import User from '../Components/User';
import UserDetails from '../Components/UserDetails';

const Routing = () => {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/user" element={<User />} >
  <Route path="/user/:name" element={<UserDetails />} />
  
  </Route>
</Routes>  )
}

export default Routing