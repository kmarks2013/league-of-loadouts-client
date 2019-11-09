import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ChampionCard extends Component {
    render() {
        console.log(this.props.champion)
        return (
            <div className='content-container'>
                <div className='champion-card'>
                    <h2>{this.props.champion && this.props.champion.id ? this.props.champion.name: null }</h2>
                    
                    <h3>Blurb</h3>
                    <p>{this.props.champion && this.props.champion.id ? this.props.champion.blurb: null }</p>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // champion: state.champion
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionCard)
