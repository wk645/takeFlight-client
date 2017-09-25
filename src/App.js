import React, { Component } from 'react';
import './App.css';
import Home from './component/Home'
import Flights from './component/Flights'
import Search from './component/Search'
import { Route, Redirect } from 'react-router-dom'
import SignUp from './component/SignUp'
import Auth from './adapters/auth'
import NavBar from './component/NavBar'
import Login from './component/Login'
import Profile from './component/Profile'
import SavedFlight from './adapters/savedFlight'

class App extends Component {

  constructor() {
    super()

    this.state = {
      origins: "",
      fareInfos: [],
      links: [],
      currentUser: {},
      currentUserFlights: []
    }
  }


  fetchFlights = ({from, departDate, returnDate, top, budget, theme}) => {
    let options = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
        body: JSON.stringify({ 
        "origin": from,
        "departuredate": departDate,
        "returndate": returnDate,
        "theme": theme,
        "maxfare": budget,
        "topdestinations": top
      })
    }
    fetch(`http://localhost:3000/api/v1/flight/`, options)
    .then(res => res.json())
    .then(data => this.setState({ fareInfos: data }))
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      return Auth.userInfo()
      .then(json => this.setState({ currentUser: json.user }))
    }
  }

  signUpUser = (userParams) => {
    return Auth.signup(userParams)
    // static signup from auth.js
    .then(res => {
      if (res.success) {
        localStorage.setItem('jwt', res.jwt)
        this.setState({ currentUser: res.user })
      } else {
        return res
      }
    })
  }

  loginUser = (userParams) => {
    return Auth.login(userParams)
    .then(res => {
      if (res.message) {
        return res
      } else {
          localStorage.setItem('jwt', res.jwt)
          this.setState({ currentUser: res.user })
      }
    })
  }

  checkLoggedIn = (target) => {
    return localStorage.getItem('jwt') ? (
      <Redirect to="/" />
    ) : (
      target
    )
  }

  addFlight = (flight) => {
    SavedFlight.saveFlight(flight.id).then(json => this.setState({ currentUser: json.user, currentUserFlights: json.flights }))
  }

  render() {

  return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => <Search fetchCB={this.fetchFlights} />} />
        <Route exact path="/" render={() => <Flights fareInfos={this.state.fareInfos} addFlight={this.addFlight} />} />

        <Route exact path="/login" render={() => this.checkLoggedIn(<Login loginUser={this.loginUser} />)} />
        <Route exact path="/signup" render={() => this.checkLoggedIn(<SignUp signUpUser={this.signUpUser} />)} />
        <Route exact path="/profile" render={() => <Profile user={this.state.currentUser} delete={this.deleteFlight} />} />
      </div>
    );
  }
}

export default App;

        // <Flights fareInfos={this.state.fareInfos} links={this.state.links} />

