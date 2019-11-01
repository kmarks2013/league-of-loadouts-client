import React, { Component } from 'react'

export default class Login extends Component {

    loginClick = () => {
        console.log('i should open up a login form')
    }

    signUpClick = () => {
        console.log('i should open up a sign up form')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.loginClick}>Login</button>
                <button onClick={this.signUpClick}>Sign-up</button>
                <p>When a user is logged in i should then render a make a new loadout button and a username and a logout button</p>
            </div>
        )
    }
}
