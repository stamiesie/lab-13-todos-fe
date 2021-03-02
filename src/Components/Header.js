import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="nav-bar">
                        <NavLink className="nav-button" to="/">Home</NavLink>
                        <NavLink className="nav-button" to="/login">Login</NavLink>
                        <NavLink className="nav-button" to="/signup">Signup</NavLink>
                        <NavLink className="nav-button" to="/todos">Todo List</NavLink>

                    </div>
                </header>
            </div>
        )
    }
}
