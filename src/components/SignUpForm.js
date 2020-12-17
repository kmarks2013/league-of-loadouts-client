import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../Redux/userActions'
import {withRouter } from 'react-router-dom'


class SignUpForm extends Component {
    state = {
        name: '',
        age: '',
        username:'',
        password: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.createNewUserToDB(this.state).then(
            () => {
                if (!this.props.errors.length){
                    this.props.history.push(`/user/${this.state.username}`)
                } else {
                    console.log(this.props.errors)
                    this.props.history.push('/signup')
                }
            })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
       
    renderErrors  = () => {
        if (this.props.errors.length > 0) {
            return this.props.errors.map(error => <p>{error}</p>)
        }
    }


    render() {
        return (
            <div className='form-container'>
                <h2>Sign Up</h2>
                {this.renderErrors()}
                <div className='signup-form'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleChange}
                        /><br/>
                        <label>Age:</label>
                        <input
                            type="number"
                            value={this.state.age}
                            name="age"
                            onChange={this.handleChange}
                        /><br/>
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
                        /><br/>
                        
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    errors : state.user.errors
})

const mapDispatchToProps = {
    createNewUserToDB: Actions.createNewUserToDB
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm))
