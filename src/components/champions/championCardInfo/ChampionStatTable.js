import React from 'react'

function ChampionStatTable({champion}) {
    return (
        <div>
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
    )
}

export default ChampionStatTable
