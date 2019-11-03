import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar';
import FormConatiner from './containers/FormConatiner';
import ContentContainer from './containers/ContentContainer';
import Actions from './Redux/championActions'


export class App extends Component {
 componentDidMount() {
    this.props.fetchChampionsFromDB()
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
//     stateObj: state
// })

const mapDispatchToProps = {
  fetchChampionsFromDB: Actions.fetchChampionsFromDB
}

export default connect(null, mapDispatchToProps)(App)
