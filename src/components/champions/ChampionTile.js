import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class ChampionTile extends Component {
    render() {
        const {champion} = this.props
        // console.log(this.props)
        return (
            <div className='champion-tile' >
            <NavLink to={`/champions/${champion.name}`}>
            <h2 className="title">{champion.name}</h2>
            <img src={`/champion_tiles/${champion.name}_0.jpg`} alt='' height='100' width='100'/>
            </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionTile)
