import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {NavLink, withRouter} from 'react-router-dom'
// import Login from './Login'


export class NavBar extends Component {

    logoutClick = () => {
        console.log('i should clear local storage')
        this.props.logoutUser()
        this.props.history.push('/')
    }
    
    newLoadoutClick = () => {
        console.log('i should open up a new loadout up form')
    }

    profileClick = () => {
        console.log('take me to my profile')
    }

    componentDidMount(){
        if (localStorage.token){
          this.props.persistUserFromAPI()
        }
      }
    
    loginLogout = () =>{
        if (this.props.user && this.props.user.id){
            return (
                <div className='login'>

                <p>{this.props.user.username} </p>
                    <div className='buttons'>
                        <NavLink to={`/user/${this.props.user.username}`}>
                        <button className='button' onClick={this.profileClick}>Profile</button>
                        </NavLink>
                        <button  className='button' onClick={this.logoutClick}>Logout</button>
                        <NavLink to='/loadouts/new'>
                        <button className='button' onClick={this.newLoadoutClick}>New Loadout</button>
                        </NavLink>
                    </div>
                </div>
            )
        }
            return(
                <div className='login'>
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
                
                    <div className='navbar' >
                        <div className='navbar-menu'>
                        <NavLink  to='/'>
                        <button className='button' >Home</button>
                        </NavLink>
                        </div>
                            {this.loginLogout()}
                    </div>
                
        )
    }
}

const mapStateToProps = state => ({user: state.user })

const mapDispatchToProps = {
    logoutUser: Actions.logoutUser,
    persistUserFromAPI: Actions.persistUserFromAPI
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
