import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar';
import FormConatiner from './containers/FormConatiner';
import ContentContainer from './containers/ContentContainer';
import championActions from './Redux/championActions'
import itemActions from './Redux/itemActions';
import loadoutActions from './Redux/loadoutActions';
import { Route } from 'react-router-dom'
import { SignUpForm } from './components/SignUpForm';



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
        <Route path='/signup' component = {SignUpForm} />
        {/* <ContentContainer /> */}
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
