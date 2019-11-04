import React, { Component } from 'react'
import {Route, NavLink, Link } from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <NavLink to='/loadouts'>
                <button>Loadouts</button>
                </NavLink>
                <NavLink to='/champions'>
                <button>Champions</button>
                </NavLink>
                <NavLink to='/items'>
                <button>Items</button>
                </NavLink>
            </div>
        )
    }
}
