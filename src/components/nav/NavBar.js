import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {NavLink} from 'react-router-dom'
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
    
    loginLogout = () =>{
        if (this.props.user && this.props.user.id){
            return (
                <div className='navbar-end'>

                <p>{this.props.user.username} </p>
                    <div className='buttons'>
                        <button className='button' onClick={console.log('take me to my profile')}>Profile</button>
                        <button  className='button' onClick={this.logoutClick}>Logout</button>
                        <NavLink to='/loadouts/new'>
                        <button className='button' onClick={this.newLoadoutClick}>New Loadout</button>
                        </NavLink>
                    </div>
                </div>
            )
        }
            return(
                <div className='navbar-end'>
                    <div className='buttons'>
                    <NavLink to='/login'>
                    <button className='button is-light' >Login</button>
                    </NavLink>

                    <NavLink  to='/signup'>
                    <button className='button is-light' >Sign-up</button>
                    </NavLink>
                    </div>
                </div>
            )
    }


    render() {
        // console.log(this.props)
        return (
                <div calssName='navbar'>
                    <div className='navbar-menu'>
                        <div className='navbar-menu'>
                        <NavLink  to='/'>
                        <button className='button' >Home</button>
                        </NavLink>
                        </div>
                        <div >
                            {this.loginLogout()}
                        </div>
                    </div>
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
