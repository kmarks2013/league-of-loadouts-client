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
                <img className="button-image" src='/sidebar_buttons/champion0.png' title='All Champions'/>
                </NavLink>
                <NavLink to='/items'>
                <h3>Items</h3>
                <img className="button-image" src='/sidebar_buttons/item0.png'  title='All Items'/>
                </NavLink>
            </div>
        )
    }
}
