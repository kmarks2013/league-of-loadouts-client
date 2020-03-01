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
                                <td>{champion && champion.id ? champion.stats.hp: null}</td>
                                <td>+{champion && champion.id ? champion.stats.hpperlevel: null}</td> 

                            </tr>
                            <tr>
                                <td>Health Regen</td> 
                                <td>{champion && champion.id ? champion.stats.hpregen: null}</td>
                                <td>+{champion && champion.id ? champion.stats.hpregenperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Armor</td> 
                                <td>{champion && champion.id ? champion.stats.armor: null}</td>
                                <td>+{champion && champion.id ? champion.stats.armorperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Spell Block</td> 
                                <td>{champion && champion.id ? champion.stats.spellblock: null}</td>
                                <td>+{champion && champion.id ? champion.stats.spellblockperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Movement Speed</td> 
                                <td>{champion && champion.id ? champion.stats.movespeed: null}</td>
                                <td>+{champion && champion.id ? 0 : null}</td> 
                            </tr>
                            <tr>
                                <td>Mana</td> 
                                <td>{champion && champion.id ? champion.stats.mp: null}</td>
                                <td>+{champion && champion.id ? champion.stats.mpperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Attack Range</td> 
                                <td>{champion && champion.id ? champion.stats.attackrange: null}</td>
                                <td>+{champion && champion.id ? 0 : null}</td> 
                            </tr>
                            <tr>
                                <td>Attack Damage</td> 
                                <td>{champion && champion.id ? champion.stats.attackdamage: null}</td>
                                <td>+{champion && champion.id ? champion.stats.attackdamageperlevel: null}</td> 
                            </tr>
                            <tr>
                                <td>Crit Chance</td> 
                                <td>{champion && champion.id ? `${champion.stats.crit}%`: null}</td>
                                <td>+{champion && champion.id ? champion.stats.critperlevel : null}</td> 
                            </tr>
                            <tr>
                                <td>Attack Speed</td> 
                                <td>{champion && champion.id ? champion.stats.attackspeed: null}</td>
                                <td>+{champion && champion.id ? champion.stats.attackspeedperlevel: null}</td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}

export default ChampionStatTable
