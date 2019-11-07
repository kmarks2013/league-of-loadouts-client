import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, NavLink, Link } from 'react-router-dom'

class ItemTile extends Component {
    render() {
        const {item} = this.props
        return (

            <NavLink to={`/items/${item.name}`} >

            <div className='content' onClick={() =>{this.props.itemClick(item)}} >
                <h2> {item.name} </h2>
            </div>
            </NavLink>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTile)
