import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        
        username:'',
        password: ''
    }

    handleSubmit = (evt, ) => {
        evt.preventDefault()
        console.log('i was submitted', this.state.username)    
    }

    handleChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                />
                <input type="submit" />
            </form>
            </div>
        )
    }
}
