import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadoutCard from './LoadoutCard'

class LoadoutList extends Component {
    renderLoadoutCards = () => {
        console.log(this.props.loadouts)
        return this.props.loadouts.map(loadout => {
          return  <LoadoutCard key={loadout.id} loadout={loadout} />
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                i will render all loadouts
                {this.renderLoadoutCards()}
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
