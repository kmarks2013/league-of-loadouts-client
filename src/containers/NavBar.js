import React, { Component } from 'react'
import Login from '../components/nav/Login'
import LoginForm from '../components/nav/LoginForm'

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
