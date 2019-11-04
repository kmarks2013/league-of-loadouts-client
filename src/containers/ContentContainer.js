import React, { Component } from 'react'
// import ChampionList from '../components/champions/ChampionList'
// import ChampionInfo from '../components/champions/ChampionInfo'
// import ItemList from '../components/items/ItemList'
import ItemInfo from '../components/items/ItemInfo'
// import LoadoutList from '../components/loadouts/LoadoutList'
// import LoadoutCard from '../components/loadouts/LoadoutCard'
// import LoadoutInfo from '../components/loadouts/LoadoutInfo'



export default class ContentContainer extends Component {
    render() {
        return (
            <div>

            <p>this should render loadout indexes and shows, champ index and shows, and item index and show conditionally</p>
            {/* <ItemList />  */}
            <ItemInfo /> 
            {/* <ChampionList/>       
            <ChampionInfo /> 
            <LoadoutList />
            <LoadoutInfo /> */}
            </div>
        )
    }
}
