import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChampionInfo } from './ChampionCard'
import championActions from '../../Redux/championActions'
import {Route, NavLink, Link } from 'react-router-dom'

class ChampionTile extends Component {
    render() {
        const {champion} = this.props
        // console.log(this.props)
        return (
            <div className='champion-tile' onClick={() =>{this.props.championClick(champion)}} >
            <NavLink to={`/champions/${champion.name}`}>
            <h2 className="title">{champion.name}</h2>
            <img src={`./champion_tiles/${champion.name}_0.jpg`} height='100' width='100'/>
            </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionTile)
