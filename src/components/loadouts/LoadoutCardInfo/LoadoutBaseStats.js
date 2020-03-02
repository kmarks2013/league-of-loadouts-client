import React from 'react'

function LoadoutBaseStats({loadout, level}) {
    return (
            <div className='loadout-stats'>
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
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.hp + (loadout.champion.stats.hpperlevel * (level - 1)): null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.hpperlevel: null}</td>
                            </tr>
                        <tr>
                                <td>Health Regen</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.hpregen + (loadout.champion.stats.hpregen + (level - 1)) :  null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.hpregenperlevel: null}</td>
                            </tr>
                        <tr>
                                <td>Armor</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.armor + (loadout.champion.stats.armorperlevel * (level - 1)): null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.armorperlevel: null}</td>
                            </tr>
                        <tr>
                                <td>Spell Block</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.spellblock + (loadout.champion.stats.spellblockperlevel * (level - 1)): null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.spellblockperlevel: null}</td>
                            </tr>
                        <tr>
                                <td>Movement Speed</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.movespeed : null}</td>
                            </tr>
                        <tr>
                                <td>Mana</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.mp + (loadout.champion.stats.mpperlevel * (level - 1)): null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.mpperlevel: null}</td>
                            </tr>
                        <tr>
                                <td>Attack Range</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.attackrange : null}</td>
                            </tr>
                        <tr>
                                <td>Attack Damage</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.attackdamage + (loadout.champion.stats.attackdamageperlevel * (level - 1)): null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.attackdamageperlevel: null}</td>
                            </tr>
                        <tr>
                                <td>Crit Chance</td>
                                <td>{loadout.champion && loadout.champion.id ? `${loadout.champion.stats.crit + (loadout.champion.stats.critperlevel * (level - 1) ) }%`: null}</td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.critperlevel : null}</td>
                            </tr>
                        <tr>
                                <td>Attack Speed</td>
                                <td>{loadout.champion && loadout.champion.id ? loadout.champion.stats.attackspeed + (loadout.champion.stats.attackspeedperlevel * (level - 1)): null} </td>
                                <td>+{loadout.champion && loadout.champion.id ? loadout.champion.stats.attackspeedperlevel: null}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default LoadoutBaseStats
