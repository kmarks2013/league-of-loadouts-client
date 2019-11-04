import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar';
import FormConatiner from './containers/FormConatiner';
import ContentContainer from './containers/ContentContainer';
import championActions from './Redux/championActions'
import itemActions from './Redux/itemActions';


export class App extends Component {
 componentDidMount() {
    this.props.fetchChampionsFromDB()
    this.props.fetchItemsFromDB()
 }

  render() {
    return (
      <div>
        <NavBar />
        <FormConatiner />
        <ContentContainer />
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
  fetchItemsFromDB: itemActions.fetchItemsFromDB
}

export default connect(null, mapDispatchToProps)(App)
