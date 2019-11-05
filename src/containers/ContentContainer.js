import React, { Component } from 'react'
// import ChampionList from '../components/champions/ChampionList'
// import ChampionInfo from '../components/champions/ChampionInfo'
// import ItemList from '../components/items/ItemList'
import ItemInfo from '../components/items/ItemInfo'
import LoadoutCard from '../components/loadouts/LoadoutCard'
import LoadoutInfo from '../components/loadouts/LoadoutInfo'
import LoadoutList from '../components/loadouts/LoadoutList'
// import LoadoutCard from '../components/loadouts/LoadoutCard'
// import LoadoutInfo from '../components/loadouts/LoadoutInfo'



export default class ContentContainer extends Component {
    

    render() {
        return (
            <div>

            {/* <ItemList />  */}
            {/* <ItemInfo />  */}
            {/* <ChampionList/>       
            <ChampionInfo />  */}
            {/* <LoadoutList /> */}
            {/* <LoadoutInfo /> */}
            <LoadoutInfo/>
            </div>
        )
    }
}
