import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ChampionInfo extends Component {
    render() {
        return (
            <div>
                hello from the info
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionInfo)
