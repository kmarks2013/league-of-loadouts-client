import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {withRouter } from 'react-router-dom'


class Login extends Component {
    state = {
        
        username:'',
        password: ''
    }

    handleSubmit = (evt, ) => {
        evt.preventDefault()
        // console.log('i was submitted', this.state.username) 
        this.props.loginUserToDB(this.state)
        if (!this.props.errors.length){
            // console.log('here')
            this.props.history.push(`/user/${this.state.username}`)
        }
        // this.setState({
        //     username: '',
        //     password: ''
            
        // })
        
    }
    
    renderErrors  = () => {
        console.log(this.props.errors)
        if (this.props.errors.length > 0) {
            console.log('here')
            return this.props.errors.map(error => <p>{error}</p>)
        }
    }

    handleChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    render() {
        console.log(this.props)
        return (

            <div>
            {this.renderErrors()}
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

const mapStateToProps = (state) => ({
    errors: state.user.errors,
    state: state
 })

const mapDispatchToProps = {
    loginUserToDB: Actions.loginUserToDB
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
