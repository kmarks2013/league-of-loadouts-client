import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'

class ItemTile extends Component {
    render() {
        const {item} = this.props
        return (
            <div className='item-tile' >
            <NavLink to={`/items/${item.name}`} >
                <h2> {item.name} </h2>
                <img src={`/items_images/${item.api_num}.png`} alt='' title={item.plaintext}/>
            </NavLink>
            </div>
        )
    }
}

export default (ItemTile)
