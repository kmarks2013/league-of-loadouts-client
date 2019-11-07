import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChampionInfo } from './ChampionInfo'
import championActions from '../../Redux/championActions'
import {Route, NavLink, Link } from 'react-router-dom'

class ChampionTile extends Component {
    render() {
        const {champion} = this.props
        // console.log(this.props)
        return (
            <NavLink to={`/champions/${champion.name}`}>
            <div className='content' onClick={() =>{this.props.championClick(champion)}} >
            <h2>{champion.name}</h2>
            </div>
            </NavLink>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionTile)
