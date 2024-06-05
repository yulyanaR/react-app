import React from 'react'
import { NavLink } from 'react-router-dom'

const TempHeader = () => {
    return (
        <div>
            <NavLink to="/">List Page</NavLink>
            <NavLink to="/add">Add Page</NavLink>
            <NavLink to="/update">Update Page</NavLink>
            <NavLink to="/jskdlfj">Not Found Page</NavLink>
        </div >
    )
}

export default TempHeader