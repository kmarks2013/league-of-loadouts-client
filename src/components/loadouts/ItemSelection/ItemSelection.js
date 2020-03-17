import React from 'react'

export const ItemSelection = ({items}) => {
    return (
        <React.Fragment>
            { 
                items.map( item => {
                    return <option value={item.id}>{item.name}</option>
                }) 
            }
        </React.Fragment>
    )
}
