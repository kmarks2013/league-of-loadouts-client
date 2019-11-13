import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'


export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <NavLink to='/loadouts'>
                <h3 className='button'>Loadouts</h3>
                <img className="button-image" src='/sidebar_buttons/champion1.png' alt="Loadouts" title='All Loadouts'/>
                </NavLink>
                <br></br>
                <NavLink to='/champions'>
                <h3>Champions</h3>
                <img className="button-image" src='/sidebar_buttons/champion0.png' alt="Champions" title='All Champions'/>
                </NavLink>
                <NavLink to='/items'>
                <h3>Items</h3>
                <img className="button-image" src='/sidebar_buttons/item0.png' alt="Items" title='All Items'/>
                </NavLink>
            </div>
        )
    }
}
