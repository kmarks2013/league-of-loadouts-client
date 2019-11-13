import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ChampionTile extends Component {
    render() {
        const {champion} = this.props
        return (
            <div className='champion-tile' >
            <NavLink to={`/champions/${champion.name}`}>
                <h2 className="title">{champion.name}</h2>
                <img src={`/champion_tiles/${champion.name}_0.jpg`} alt='' height='100' width='100'/>
            </NavLink>
            </div>
        )
    }
}


export default (ChampionTile)
