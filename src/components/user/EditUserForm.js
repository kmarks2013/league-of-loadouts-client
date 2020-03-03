import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {withRouter } from 'react-router-dom'

class EditUserForm extends Component {
    state = {
        name: this.props.user.name,
        age: this.props.user.age,
        username: this.props.user.username,
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        let formData = {...this.state}
        fetch(`https://league-of-loadouts.herokuapp.com/users/${this.props.user.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(updatedUser => {
            this.props.updateUserInDB(updatedUser)
            this.props.history.push(`/user/${updatedUser.username}`)
        })
    }

    
    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }


    render() {
        return (
            <div className='form-container'>
                <h1> Hello {this.props.user.username}! </h1>
                <p> Fill out the form below to update your profile</p>
                <div className='signup-form'>
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
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
        user: state.user.user
})

const mapDispatchToProps = {
    updateUserInDB: Actions.updateUserInDB,
    persistUserFromAPI: Actions.persistUserFromAPI
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserForm))
