import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>

                    <NavLink className="nav-button" to="/">Home</NavLink>


                    {
                        this.props.user && this.props.user.token && <>
                            <NavLink className="nav-button" to="/todos">Todo List</NavLink>
                            <button onClick={this.props.handleLogout}>Log Out</button>
                        </>
                    }

                    {
                        (!this.props.user || !this.props.user.token) &&
                        <>
                            <NavLink className="nav-button" to="/login">Login</NavLink>
                            <NavLink className="nav-button" to="/signup">Signup</NavLink>
                        </>
                    }



                </header>
            </div>
        )
    }
}
