import React, { Component } from 'react'
import Login from '../components/Login'
import LoginForm from '../components/LoginForm'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Login />
                <LoginForm />
            </div>
        )
    }
}
