import React, { Component } from 'react'
import { loginUser } from '../api-utils.js';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        // use POST function to enter new user in db, get token
        const user = await loginUser(this.state.email, this.state.password)

        // sets token/user into state and localStorage in app.js - (passing UP to parent)
        this.props.handleUserChange(user);

        // redirect to Todo List
        this.props.history.push('/todos');
    }
    render() {
        return (
            <div>
                <h1>Login Page</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email Address:
                        <input placeholder="me@you.com" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </label>

                    <label>
                        Password:
                        <input placeholder="shhh...secrets" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

