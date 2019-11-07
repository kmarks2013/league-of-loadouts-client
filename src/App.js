import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar';
import FormConatiner from './containers/FormConatiner';
import ContentContainer from './containers/ContentContainer';
import championActions from './Redux/championActions'
import itemActions from './Redux/itemActions';
import loadoutActions from './Redux/loadoutActions';
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './components/SignUpForm';
import LoadoutList from './components/loadouts/LoadoutList';
import ChampionList from './components/champions/ChampionList';
import ItemList from './components/items/ItemList';
import Sidebar from './components/Sidebar';
import LoginForm from './components/nav/LoginForm';
import LoadoutInfo from './components/loadouts/LoadoutInfo';
import LoadoutForm from './components/LoadoutForm';




export class App extends Component {

  state={
    loadout: null,
    champion: null,
    item: null
  }
 componentDidMount() {
    this.props.fetchChampionsFromDB()
    this.props.fetchItemsFromDB()
    this.props.fetchLoadoutsFromDB()
 }


loadoutClick = (loadout) => {
  console.log("i was clicked", loadout)
  // this.props.getLoadout(this.props.loadout)
  this.setState({
    loadout,
    champion: null,
    item:null
  })
}

championClick = (champion) => {
  console.log('champ was clicked', champion)
  this.setState({
    loadout: null,
    champion,
    item:null
  })
}

itemClick = (item) => {
  console.log('champ was clicked', item)
  this.setState({
    loadout: null,
    champion: null,
    item
  })
}

  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Switch>
        <Route path='/signup' component = {SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/loadouts' exact render={ () => <LoadoutList  loadoutClick={this.loadoutClick}/>} />
       
        <Route path='/champions' exact render={ () => <ChampionList  championClick={this.championClick}/>} />
        <Route path='/items' exact render={ () => <ItemList  itemClick={this.itemClick}/>} />
       
        {/* <Route path='/loadouts/:id' render={() => <LoadoutInfo loadout={this.state.loadout}/>}/> */}
        <Route path='/newloadout' component={LoadoutForm} />
        <Route path='/' exact render={ () => <LoadoutList  loadoutClick={this.loadoutClick}/>} />
        </Switch>
        <ContentContainer loadout={this.state.loadout}  champion={this.state.champion} item={this.state.item} />
        {/* <FormConatiner /> */}
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   return
//     stateObj: state
// })

const mapDispatchToProps = {
  fetchChampionsFromDB: championActions.fetchChampionsFromDB,
  fetchItemsFromDB: itemActions.fetchItemsFromDB,
  fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB

}

export default connect(null, mapDispatchToProps)(App)
