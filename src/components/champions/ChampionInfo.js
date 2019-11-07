import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ChampionInfo extends Component {
    render() {
        console.log(this.props.champion)
        return (
            <div>
                <h2>{this.props.champion && this.props.champion.id ? this.props.champion.name: ""}</h2>
                
                <h3>Blurb</h3>
                <p>{this.props.champion && this.props.champion.id ? this.props.champion.blurb: ""}</p>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // champion: state.champion
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionInfo)
