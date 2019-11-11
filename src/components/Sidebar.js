import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <NavLink to='/loadouts'>
                <button className='button'>Loadouts</button>
                </NavLink>
                <br></br>
                <NavLink to='/champions'>
                <h3>Champions</h3>
                <img src='/sidebar_buttons/champion0.png' height='150px' width='150px'/>
                {/* <button className='button'>Champions</button> */}
                </NavLink>
                <NavLink to='/items'>
                <h3>Items</h3>
                <img src='/sidebar_buttons/item0.png' height='150px' width='150px'/>
                {/* <button className='button'>Items</button> */}
                </NavLink>
            </div>
        )
    }
}
