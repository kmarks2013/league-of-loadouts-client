import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from '../loadouts/LoadoutTile'
import userActions from '../../Redux/userActions'
import { NavLink } from 'react-router-dom'
import loadoutActions from '../../Redux/loadoutActions'

export class Profile extends Component {

    renderLoadoutTiles = () => {
        if (this.props.loadouts && this.props.loadouts.length > 0){
            return this.props.loadouts.map(loadout => {
              return  <LoadoutTile key={loadout.id} loadout={loadout} />
            })
        }else
            return null

    }

    deleteClick = () => {
        this.props.clearLoadouts()
        this.props.deleteUserFromDB(this.props.loggedInUser.id)
        this.props.fetchLoadoutsFromDB()
    }

    renderEditDeleteButtons = () => {
        if (this.props.loggedInUser && this.props.loggedInUser.id === parseInt(localStorage.id)){
            return (
                <>
                <NavLink to={`/user/${this.props.loggedInUser.username}/edit`}>
                <button >Edit Profile</button>
                </NavLink>
                <NavLink to='/'> 
                <button onClick={this.deleteClick}>Delete Account</button>            
                </NavLink>
                </>
            )
        } else {
            return null
        }
    }
    
    render() {
        const {loggedInUser: {name, username, age }} = this.props
        
        return (
            <div className="content-container">
                <div className='profile-info'>
                <h1>Hello {username}!</h1>
                {this.renderEditDeleteButtons()}
                <h2>Bio:</h2>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>

                </div>
                
                <h2>View Your Loadouts</h2>
                {this.renderLoadoutTiles()}
            </div>
        )
    }

    // this conditiional is an attempt to render profile pages for users who arent logged in
    // render() {
    //     const {loggedInUser, user } = this.props
    //     {if (loggedInUser === parseInt(localStorage.id)) {
    //         return ( 
    //             <div className="content-container">
    //                 <h1>Hello {loggedInUser.username}!</h1>
    //                 {this.renderEditDeleteButtons()}
    //                 <h2>Bio</h2>
    //                 <h4>Name: {loggedInUser.name}</h4>
    //                 <h4>Age: {loggedInUser.age}</h4>
                    
    //                 <h2>View Your Loadouts</h2>
    //                 {this.renderLoadoutTiles()}
    //             </div>
    //             )
    //     }
    //     else 
    //         return (
    //             <div className="content-container">
    //                     <h1>Hello {user.username}!</h1>
    //                     {this.renderEditDeleteButtons()}
    //                     <h2>Bio</h2>
    //                     <h4>Name: {user.name}</h4>
    //                     <h4>Age: {user.age}</h4>
                        
    //                     <h2>View Your Loadouts</h2>
    //                     {this.renderLoadoutTiles()}
    //                 </div>
    //         )
    // }
    // }
}

const mapStateToProps = (state) => ({
    loggedInUser: state.user.user,
    loadouts: state.user.user.loadouts,
})

const mapDispatchToProps = {
    deleteUserFromDB: userActions.deleteUserFromDB,
    clearLoadouts: loadoutActions.clearLoadouts,
    fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
