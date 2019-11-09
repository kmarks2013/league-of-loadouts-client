import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, NavLink, Link } from 'react-router-dom'

class ItemTile extends Component {
    render() {
        const {item} = this.props
        return (
            <div className='item-tile' onClick={() =>{this.props.itemClick(item)}} >
            <NavLink to={`/items/${item.name}`} >
                <h2> {item.name} </h2>
            </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTile)
