import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChampionStatTable from './championCardInfo/ChampionStatTable'
import ChampionImg from './championCardInfo/ChampionImg'
import ChampionInfo from './championCardInfo/ChampionInfo'

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
                    <ChampionImg champion={this.props.champion}/>
                    </div>
                    <div className='champion-info'>
                    <ChampionInfo champion={this.props.champion} loreClick={this.loreClick} renderLore={this.renderLore} />
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
