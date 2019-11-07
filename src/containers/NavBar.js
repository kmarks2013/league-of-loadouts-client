import React, { Component } from 'react'
import Login from '../components/nav/Login'
import LoginForm from '../components/nav/LoginForm'

export default class NavBar extends Component {
    render() {
        return (
            <div >
                {/* NavLink to='/signup'>
                <button onClick={this.signUpClick}>Sign-up</button>
                </NavLink> */}
                <Login />
                {/* <LoginForm /> */}
            </div>
        )
    }
}
