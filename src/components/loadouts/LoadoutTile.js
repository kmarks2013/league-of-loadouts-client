import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'


class LoadoutTile extends Component {


    renderLoadoutItems = () => {
        return this.props.loadout.items.map(item => {
          return (
            <div className='loadout-items'>
                <img src={`/items_images/${item.image}`} alt="" />
            </div>
          )
        })
    }

    render() {
        const {loadout} = this.props
        return (
            <div className='loadout-tile' title={loadout.name}>
            <NavLink to={`/loadouts/${loadout.id}`}>
                <h2>{loadout.name}</h2>
                <img src={`/champion_tiles/${loadout.champion.name}_0.jpg`} alt=""  />
                <h6 className="loadout-tile-user">{loadout.user_name}</h6>
                    {this.renderLoadoutItems()}
             
            </NavLink>
            <div></div>
            </div>
        )
    }
}

export default (LoadoutTile)
