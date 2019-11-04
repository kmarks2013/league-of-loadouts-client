import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../Redux/userActions'

class SignUpForm extends Component {
    state = {
        name: '',
        age: '',
        username:'',
        password: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log('i was submitted', localStorage)
        this.props.createNewUserToDB(this.state)
        this.setState({
            name: '',
            age: '',
            username: '',
            password: ''
        })
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
                <label>Name</label>
                <input
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                />
                <label>Age</label>
                <input
                    type="number"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChange}
                />
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

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = {
    createNewUserToDB: Actions.createNewUserToDB
}

export default connect(null, mapDispatchToProps)(SignUpForm)
