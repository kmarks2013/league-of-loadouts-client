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
import ChampionInfo from './components/champions/ChampionInfo';
import ItemInfo from './components/items/ItemInfo';




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
  // console.log('champ was clicked', item)
  this.setState({
    loadout: null,
    champion: null,
    item
  })
}

renderItems = (renderProps) => {
  const slug = renderProps.match.params.slug
  const item = this.props.items.find(item => item.name === slug)
  if (item) {
    return <ItemInfo item={item} />
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
    return <LoadoutInfo loadout={loadout} />
  }
  else {
      return <div>Not Found</div>
  }

}

renderChampions = (renderProps) => {
  // console.log(renderProps.match.params.slug)
  const slug = renderProps.match.params.slug
  const champion = this.props.champions.find(champion => champion.name === slug)
  if (champion) {
    return <ChampionInfo champion={champion}/>
  }
  else {
    return <div>Not Found</div>
  }
  // return "HELLO"
  

}

  render() {
    return (
      <div>

        <div className='navbar' > 
        <NavBar />
        </div>
       <div className='columns'>
        <Sidebar />
        <div className='column is-one-fifth'>
        </div>
       </div> 
        <Switch>
        <Route path='/signup' component = {SignUpForm} />
        <Route path='/login' component={LoginForm} />
       
        <Route path='/champions' exact render={ () => <ChampionList  championClick={this.championClick}/>} />
        <Route path='/champions/:slug' exact render={this.renderChampions} /> 
        <Route path='/items' exact render={ () => <ItemList  itemClick={this.itemClick}/>} />
        <Route path='/items/:slug' exact render={this.renderItems} />
        {/* <Route path='/loadouts/:id' render={() => <LoadoutInfo loadout={this.state.loadout}/>}/> */}
        
        <Route path='/loadouts' exact render={ () => <LoadoutList  loadoutClick={this.loadoutClick}/>} />
        <Route path='/loadouts/new' component={LoadoutForm} />
        <Route path='/loadouts/:slug' exact render={this.renderLoadout} />

        <Route path='/' exact render={ () => <LoadoutList  loadoutClick={this.loadoutClick}/>} />
        </Switch>
        <ContentContainer loadout={this.state.loadout}  champion={this.state.champion} item={this.state.item} />
        {/* <FormConatiner /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state) 
  return {
     champions: state.champions,
     items: state.items,
     loadouts: state.loadouts
   }
}

const mapDispatchToProps = {
  fetchChampionsFromDB: championActions.fetchChampionsFromDB,
  fetchItemsFromDB: itemActions.fetchItemsFromDB,
  fetchLoadoutsFromDB: loadoutActions.fetchLoadoutsFromDB

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
