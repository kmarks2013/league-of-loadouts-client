import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import NavBar from './components/nav/NavBar';
import championActions from './Redux/championActions'
import itemActions from './Redux/itemActions';
import loadoutActions from './Redux/loadoutActions';
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './components/SignUpForm';
import LoadoutList from './components/loadouts/LoadoutList';
import ChampionList from './components/champions/ChampionList';
import ItemList from './components/items/ItemList';
import Sidebar from './components/Sidebar';
import Login from './components/nav/Login';
import LoadoutCard from './components/loadouts/LoadoutCard';
import LoadoutForm from './components/LoadoutForm';
import ChampionCard from './components/champions/ChampionCard';
import ItemCard from './components/items/ItemCard';
import Profile from './components/user/Profile';
import EditUserForm from './components/user/EditUserForm';




export class App extends Component {

 componentDidMount() {
    this.props.fetchChampionsFromDB()
    this.props.fetchItemsFromDB()
    this.props.fetchLoadoutsFromDB()
 }

renderUser = (renderProps) => {
  const slug = renderProps.match.params.slug
  const user = this.props.user.username === slug
  if (user) {
    return <Profile />
  }
}

editUser = (renderProps) => {
  const slug = renderProps.match.params.slug
  const user = this.props.user.username === slug
  if (user) {
    return <EditUserForm  />
  }
}

renderItems = (renderProps) => {
  const slug = renderProps.match.params.slug
  const item = this.props.items.find(item => item.name === slug)
  if (item) {
    return <ItemCard item={item} />
  }
  else {
      return <div>Not Found</div>
  }
}

renderLoadout = (renderProps) => {
  // console.log(renderProps)
  const slug = renderProps.match.params.slug
  const loadout = this.props.loadouts.find(loadout => loadout.id === parseInt(slug))
  // console.log(slug)
  // console.log(loadout)
  if (loadout){
    return <LoadoutCard loadout={loadout} />
  }
  else {
      console.log(loadout)
      return <div>Not Found</div>
  }

}

renderChampions = (renderProps) => {
  // console.log(renderProps.match.params.slug)
  const slug = renderProps.match.params.slug
  const champion = this.props.champions.find(champion => champion.name === slug)
  if (champion) {
    return <ChampionCard champion={champion}/>
  }
  else {
    return <div>Not Found</div>
  }
  // return "HELLO"
  

}

  render() {
    console.log(this.props.state)
    return (
      <div className='lol-wrapper'>

        <NavBar />

        <Sidebar />
        
        <Switch>
        <Route path='/signup' component = {SignUpForm} />
        <Route path='/login' component={Login} />
        <Route path='/user/:slug' exact render={this.renderUser} /> 
        <Route path='/user/:slug/edit' exact render={this.editUser} />

        <Route path='/champions' exact render={ () => <ChampionList />} />
        <Route path='/champions/:slug' exact render={this.renderChampions} /> 
        <Route path='/items' exact render={ () => <ItemList />} />
        <Route path='/items/:slug' exact render={this.renderItems} />
        {/* <Route path='/loadouts/:id' render={() => <LoadoutInfo loadout={this.state.loadout}/>}/> */}
        
        <Route path='/loadouts' exact render={ () => <LoadoutList />} />
        <Route path='/loadouts/new' component={LoadoutForm} />
        <Route path='/loadouts/:slug' exact render={this.renderLoadout} />

        <Route path='/' exact render={ () => <LoadoutList />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state) 
  return {
     champions: state.champions,
     items: state.items,
     loadouts: state.loadouts,
     user: state.user.user,
     state: state
   }
}

const mapDispatchToProps = {
  fetchChampionsFromDB: championActions.fetchChampionsFromDB,
  fetchItemsFromDB: itemActions.fetchItemsFromDB,
  fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
