import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutTile from './LoadoutTile'

class LoadoutList extends Component {

    
    renderLoadoutTiles = () => {
        // console.log(this.props.loadouts)
        return this.props.loadouts.map(loadout => {
          return  <LoadoutTile key={loadout.id} loadout={loadout} />
        })
    }

    render() {
        // console.log(this.props)
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

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutList)
