import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../Redux/userActions'
import {NavLink, withRouter} from 'react-router-dom'
// import Login from './Login'


export class NavBar extends Component {

    logoutClick = () => {
        this.props.logoutUser()
        this.props.history.push('/')
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
                        <button className='button' >Profile</button>
                        </NavLink>
                        <button  className='button' onClick={this.logoutClick}>Logout</button>
                        <NavLink to='/loadouts/new'>
                        <button className='button' >New Loadout</button>
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
                        <div className='title'>
                            <h1> League of Loadouts</h1>
                        </div>
                            {this.loginLogout()}
                    </div>
                
        )
    }
}

const mapStateToProps = state => ({user: state.user.user })

const mapDispatchToProps = {
    logoutUser: Actions.logoutUser,
    persistUserFromAPI: Actions.persistUserFromAPI
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
