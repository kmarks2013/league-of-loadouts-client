import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                    <h3>Base Stats</h3>
                    <table className='base-stats'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Base Value</th>
                                <th>Increase Per Level</th>
                            </tr>
                            <tr>
                                <td>Health</td>
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.hp: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.hpperlevel: null}</td> 

                            </tr>
                            <tr>
                                <td>Health Regen</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.hpregen: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.hpregenperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Armor</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.armor: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.armorperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Spell Block</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.spellblock: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.spellblockperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Movement Speed</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.movespeed: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? 0 : null}</td> 
                            </tr>
                            <tr>
                                <td>Mana</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.mp: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.mpperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Attack Range</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.attackrange: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? 0 : null}</td> 
                            </tr>
                            <tr>
                                <td>Attack Damage</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.attackdamage: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.attackdamageperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Crit Chance</td> 
                                <td>{this.props.champion && this.props.champion.id ? `${this.props.champion.stats.crit}%`: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.critperlevel : null}</td> 
                            </tr>
                            <tr>
                                <td>Attack Speed</td> 
                                <td>{this.props.champion && this.props.champion.id ? this.props.champion.stats.attackspeed: null}</td> 
                                <td>+{this.props.champion && this.props.champion.id ? this.props.champion.stats.attackspeedperlevel: null}</td>
                            </tr>
                        </tbody>
                    </table>
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
