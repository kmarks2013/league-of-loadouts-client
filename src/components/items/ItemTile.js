import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink } from 'react-router-dom'

class ItemTile extends Component {
    render() {
        const {item} = this.props
        // console.log(item.api_num)
        return (
            <div className='item-tile' >
            <NavLink to={`/items/${item.name}`} >
                <h2> {item.name} </h2>
                <img src={`/items_images/${item.api_num}.png`} alt=''/>
                {/* <p> {item.api_num} </p> */}
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
