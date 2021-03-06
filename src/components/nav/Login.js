import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {withRouter } from 'react-router-dom'


class Login extends Component {
    state = {
        
        username:'',
        password: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.loginUserToDB(this.state).then(
           () => {

               if (!this.props.errors.length){
                   console.log(this.props.errors)
                   this.props.history.push(`/user/${this.state.username}`)
               } else {
                   this.props.history.push('/login')
               }
           })
    }
    
    renderErrors  = () => {
        if (this.props.errors.length > 0) {
            return this.props.errors.map(error => <p>{error}</p>)
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        return (

            <div className='form-container'>
            <h2>Login</h2>
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChange}
                /><br/>
                <label>Password:</label>
                <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                /> <br/>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.user.errors,
    state: state
 })

const mapDispatchToProps = {
    loginUserToDB: Actions.loginUserToDB
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
