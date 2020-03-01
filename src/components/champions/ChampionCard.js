import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChampionStatTable from './championCardInfo/ChampionStatTable'

 class ChampionCard extends Component {
    state = {
        lore: false
    }
    
    loreClick = () => {
        this.setState({
            lore: !this.state.lore
        })
    }

    renderLore = () => {
       return this.state.lore ? this.props.champion.lore : this.props.champion.blurb
    }
    
    render() {
        return (
            <div className='content-container'>
                <div className='champion-card'>
                    <div className='champion-icon'>
                    <img src={this.props.champion && this.props.champion.id ? `/champion_cards/${this.props.champion.name}_0.jpg` : null} alt={this.props.champion.name}/>
                    </div>
                    <div className='champion-info'>
                    <h2>{this.props.champion && this.props.champion.id ? this.props.champion.name: null }, {this.props.champion && this.props.champion.id ? this.props.champion.title: null } </h2>
                    
                    <h3>Lore</h3>
                    <p onClick={this.loreClick}>{this.renderLore()}</p>
                    <ChampionStatTable champion={this.props.champion} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampionCard)
