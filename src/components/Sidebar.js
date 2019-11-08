import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        return (
            <div className='buttons'>

                <NavLink to='/loadouts'>
                <button className='button'>Loadouts</button>
                </NavLink>
                <NavLink to='/champions'>
                <button className='button'>Champions</button>
                </NavLink>
                <NavLink to='/items'>
                <button className='button'>Items</button>
                </NavLink>
            </div>
        )
    }
}
