import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChampionTile } from './ChampionTile'

export class ChampionList extends Component {
    // renderCharacterTiles = () => 

    render() {
        return (
            <div>
                This  should render the list of champions as tiles
                <ChampionTile />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionList)
