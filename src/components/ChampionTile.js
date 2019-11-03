import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ChampionTile extends Component {
    render() {
        return (
            <div>
                I will render an imgage and name card for each ChampionTile
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionTile)
