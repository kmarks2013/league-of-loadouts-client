import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar';
import FormConatiner from './containers/FormConatiner';
import Actions from './Redux/actions'


export class App extends Component {
  // componentDidMount(){
  //   if (localStorage.token){
  //     this.props.persistUserFromAPI()
  //   }
  // }

  render() {
    return (
      <div>
        <NavBar />
        <FormConatiner />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    stateObj: state
})

const mapDispatchToProps = {
  // persistUserFromAPI: Actions.persistUserFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
