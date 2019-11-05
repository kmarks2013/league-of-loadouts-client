import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {Route, NavLink, Link } from 'react-router-dom'
import { LoginForm } from './LoginForm'


export class Login extends Component {

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
        // console.log(this.props)
        return (
            <div>
                <NavLink to='/'>
                <button>Home</button>
                </NavLink>
                <NavLink to='/login'>
                <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                <button>Sign-up</button>
                </NavLink>
                    
                {/* <NavLink to='/signup'>Sign-up </NavLink> */}
                <button onClick={this.logoutClick}>Logout</button>
                <button onClick={this.newLoadoutClick}>New Loadout</button>
           
                <p>{this.props.user && this.props.user.id ? this.props.user.username : 'no logged in'}</p>
                <p>When a user is logged in i should then render a make a new loadout button and a username and a logout button</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.user })

const mapDispatchToProps = {
    logoutUser: Actions.logoutUser,
    persistUserFromAPI: Actions.persistUserFromAPI
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)