import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink } from 'react-router-dom'


class LoadoutTile extends Component {


    renderLoadoutItems = () => {
        // console.log(this.props.loadout)
        return this.props.loadout.items.map(item => {
          return (
            <div className='loadout-tile-items'>
                <img src={`/items_images/${item.api_num}.png`} alt="" />
            </div>
          )
        })
    }

    render() {
        // console.log(this.props)
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutTile)
