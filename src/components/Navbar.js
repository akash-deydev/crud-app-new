

import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className='logo'>
                <h3>React CRUD</h3>
            </div>
            <div className='navlinks'>
                <NavLink to="/">Admin</NavLink>
                <NavLink to="/all">All User</NavLink>
                <NavLink to="/add">Add User</NavLink>
            </div>
        </div>
    )
}

export default Navbar