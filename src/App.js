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




export class App extends Component {
 componentDidMount() {
    this.props.fetchChampionsFromDB()
    this.props.fetchItemsFromDB()
    this.props.fetchLoadoutsFromDB()
 }

  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Switch>
        <Route path='/signup' component = {SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/loadouts' component = {LoadoutList} />
        <Route path='/champions' component = {ChampionList} />
        <Route path='/items' component={ItemList} />
        <Route path='/' exact component={LoadoutList} />
        </Switch>
        <ContentContainer />
        <FormConatiner />
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
