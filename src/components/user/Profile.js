import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from '../loadouts/LoadoutTile'
import userActions from '../../Redux/userActions'
import { NavLink} from 'react-router-dom'

export class Profile extends Component {

    renderLoadoutTiles = () => {
        if (this.props.loadouts.length > 0){
            return this.props.loadouts.map(loadout => {
              return  <LoadoutTile key={loadout.id} loadout={loadout} />
            })
        }else
            return null

    }


    deleteClick = () => {
        console.log('i should delete a user profile')
        this.props.deleteUserFromDB(this.props.user.id)
    }

    renderEditDeleteButtons = () => {
        if (this.props.user.id === parseInt(localStorage.id)){
            return (
                <>
                <NavLink to={`/user/${this.props.user.username}/edit`}>
                <button >Edit Profile</button>
                </NavLink>
                <button onClick={this.deleteClick}>Delete Account</button>            
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
    user: state.user,
    loadouts: state.user.loadouts
})

const mapDispatchToProps = {
    deleteUserFromDB: userActions.deleteUserFromDB
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
