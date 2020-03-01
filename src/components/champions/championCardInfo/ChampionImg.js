import React from 'react'

function ChampionImg({champion}) {
    return (
        <div>
            <img src={champion && champion.id ? `/champion_cards/${champion.name}_0.jpg` : null} alt={champion.name}/>
        </div>
    )
}

export default ChampionImg
