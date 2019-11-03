import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChampionInfo } from './ChampionInfo'

export class ChampionTile extends Component {
    render() {
        return (
            <div>
                I will render an imgage and name card for each ChampionTile 
                when a ChampionTile is clicked it will render:
                <ChampionInfo/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionTile)
