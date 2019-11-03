import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../Redux/userActions'

export class Login extends Component {
    loginClick = () => {
        console.log('i should open up a login form')
    }

    signUpClick = () => {
        console.log('i should open up a sign up form')
    }
    logoutClick = () => {
        console.log('i should clear local storage')
        this.props.logoutUser()
    }
    newLoadoutClick = () => {
        console.log('i should open up a new loadout up form')
    }

    componentDidMount(){
        if (localStorage.token){
          this.props.persistUserFromAPI()
        }
      }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.loginClick}>Login</button>
                <button onClick={this.signUpClick}>Sign-up</button>
                <button onClick={this.logoutClick}>Logout</button>
                <button onClick={this.newLoadoutClick}>New Loadout</button>
           
                <p>{this.props.user ? this.props.user.username : 'null'}</p>
                <p>When a user is logged in i should then render a make a new loadout button and a username and a logout button</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state })

const mapDispatchToProps = {
    logoutUser: Actions.logoutUser,
    persistUserFromAPI: Actions.persistUserFromAPI
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
