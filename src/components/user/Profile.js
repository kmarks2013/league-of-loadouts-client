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
    // removeUserLoadoutsFromState = () => {
    //     this.props.user.
    //     this.props.deleteLoadoutAction(this)

    // }

    deleteClick = () => {
        console.log('i should delete a user profile')
        this.props.clearLoadouts()
        this.props.deleteUserFromDB(this.props.user.id)
        this.props.fetchLoadoutsFromDB()
    }

    renderEditDeleteButtons = () => {
        if (this.props.user && this.props.user.id === parseInt(localStorage.id)){
            return (
                <>
                <NavLink to={`/user/${this.props.user.username}/edit`}>
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
        const {user: {name, username, age }} = this.props
        return (
            <div className="content-container">
                <h1>Hello {username}!</h1>
                {this.renderEditDeleteButtons()}
                <h2>Bio</h2>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                
                <h2>View Your Loadouts</h2>
                {this.renderLoadoutTiles()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    loadouts: state.user.user.loadouts
})

const mapDispatchToProps = {
    deleteUserFromDB: userActions.deleteUserFromDB,
    clearLoadouts: loadoutActions.clearLoadouts,
    fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
