import React from 'react'

const LoadoutIcon = ({loadout, level, addClick, subtractClick}) => {
    return (
        <div className='loadout-icon'>
            <h1>{loadout && loadout.id ? loadout.name : null} </h1>
            <h2>Champion</h2>
            <img src={`/champion_tiles/${loadout.champion.name}_0.jpg`} alt=""></img>
            <h3>{loadout && loadout.id ? loadout.champion.name : null}</h3>
            <h2> Level: 
                <button onClick={subtractClick}> - </button>
                    {level}
                <button onClick={addClick} > + </button>
            </h2>
            <p>{loadout && loadout.id ? loadout.user_name : null}</p>
        </div>
    )
}

export default LoadoutIcon
