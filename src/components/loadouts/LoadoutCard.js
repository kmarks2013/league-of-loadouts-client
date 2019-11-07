import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, NavLink, Link } from 'react-router-dom'


class LoadoutCard extends Component {

    renderLoadoutItems = () => {
        console.log(this.props.loadout)
        return this.props.loadout.items.map(item => {
          return <li>{item.name}</li>
        })
    }

    render() {
        // console.log(this.props)
        const {loadout} = this.props
        return (
            <NavLink to={`/loadouts/${loadout.id}`}>
            <div className='content' onClick={() =>{this.props.loadoutClick(this.props.loadout)}}>
                <h2>{this.props.loadout.name}</h2>
                <h6>{this.props.loadout.user.username}</h6>
                <ul>
                    {this.renderLoadoutItems()}
                </ul>
            </div>
            </NavLink>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadoutCard)
