import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from '../loadouts/LoadoutTile'
import userActions from '../../Redux/userActions'


export class Profile extends Component {
    renderLoadoutTiles = () => {
        return this.props.loadouts.map(loadout => {
          return  <LoadoutTile key={loadout.id} loadout={loadout} />
        })
    }

    editClick = () => {
        console.log('i should open up a form to update a user profile')
    }

    deleteClick = () => {
        console.log('i should delete a user profile')
        this.props.deleteUserFromDB(this.props.user.id)
    }

    renderEditDeleteButtons = () => {
        if (this.props.user.id === parseInt(localStorage.id)){
            return (
                <>
                <button onClick={this.editClick}>Edit Profile</button>
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
            <div>
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
