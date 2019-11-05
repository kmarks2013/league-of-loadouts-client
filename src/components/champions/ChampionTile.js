import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChampionInfo } from './ChampionInfo'
import championActions from '../../Redux/championActions'

class ChampionTile extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='content' onClick={() =>{this.props.championClick(this.props.champion)}} >
            <h2>{this.props.champion.name}</h2> 
                {/* I will render an imgage and name card for each ChampionTile 
                when a ChampionTile is clicked it will render:
                <ChampionInfo/> */}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionTile)
