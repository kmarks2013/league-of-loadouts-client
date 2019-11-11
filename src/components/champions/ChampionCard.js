import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ChampionCard extends Component {
    state = {
        lore: false
    }
    
    loreClick = () => {
        console.log('should render more info')
        this.setState({
            lore: !this.state.lore
        })
        console.log(this.state.lore)
    }

    renderLore = () => {
       return this.state.lore ? this.props.champion.lore : this.props.champion.blurb
    }
    
    render() {
        // console.log(this.props.champion)
        return (
            <div className='content-container'>
                <div className='champion-card'>
                    <img src={this.props.champion && this.props.champion.id ? `./champion_tiles/${this.props.champion.name}_0.jpg` : null} alt={this.props.champion.name}/>
                    <h2>{this.props.champion && this.props.champion.id ? this.props.champion.name: null }</h2>
                    
                    <h3>Lore</h3>
                    <p onClick={this.loreClick}>{this.renderLore()}</p>

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
