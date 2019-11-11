import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink } from 'react-router-dom'


class LoadoutTile extends Component {

    renderLoadoutItems = () => {
        // console.log(this.props.loadout)
        return this.props.loadout.items.map(item => {
          return (
            <div>
                <img src={`./items_images/${item.api_num}.png`} alt="" />
                <p>{item.name}</p>
            </div>
          )
        })
    }

    render() {
        // console.log(this.props)
        const {loadout} = this.props
        return (
            <div className='loadout-tile' >
            <NavLink to={`/loadouts/${loadout.id}`}>
                <h2>{loadout.name}</h2>
                <img src={`./champion_tiles/${loadout.champion.name}_0.jpg`} alt="" />
                <h6>{loadout.user_name}</h6>
                <ul>
                    {this.renderLoadoutItems()}
                </ul>
            </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutTile)
