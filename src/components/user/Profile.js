import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from '../loadouts/LoadoutTile'


export class Profile extends Component {
    renderLoadoutTiles = () => {
        return this.props.loadouts.map(loadout => {
          return  <LoadoutTile key={loadout.id} loadout={loadout} />
        })
    }

    render() {
        const {user: {name, username, age, loadouts }} = this.props
        return (
            <div>
                <h1>Hello {username}</h1>

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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
