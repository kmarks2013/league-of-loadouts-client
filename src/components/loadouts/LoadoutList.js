import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from './LoadoutTile'
import loadoutActions from '../../Redux/loadoutActions'

class LoadoutList extends Component {
    componentDidMount() {
        this.props.fetchLoadoutsFromDB()
    }
    
    renderLoadoutTiles = () => {
        if (this.props.loadouts.length > 0) {      
            return this.props.loadouts.map(loadout => {
                return  <LoadoutTile key={loadout.id} loadout={loadout} />
            })
        }
    }

    render() {
        return (
            <div className='content-container'>
                <div className='loadout-tiles'>
                    <h1>Loadouts</h1>
                    {this.renderLoadoutTiles()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadouts: state.loadouts
})

const mapDispatchToProps = {
    fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutList)

