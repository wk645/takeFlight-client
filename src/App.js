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
import Back from './component/Back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ScrollUpButton from 'react-scroll-up-button'
import AlertContainer from 'react-alert'

class App extends Component {

  constructor() {
    super()

    this.state = {
      fareInfos: [],
      currentUser: {},
      currentUserFlights: []
    }
  }

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'dark',
    time: 3000,
    transition: 'fade'
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
    
    return fetch(`http://localhost:3000/api/v1/flight/`, options)
    .then(res => res.json())
    .then(data => {
      if (data) {
        this.setState({ fareInfos: data })
    } else {
      this.msg.error("An unknown error occurred with your search. Please try again!")
    }})
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
        this.msg.show('Welcome to takeFlight!')
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
          this.msg.success(`Welcome back ${res.user.username}!`)
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
    SavedFlight.saveFlight(flight.id).then(json => {
      this.msg.success("This flight has been saved to your list!")
      this.setState({ currentUser: json.user, currentUserFlights: json.flights })
    })
  }

  render() {
  return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <ScrollUpButton />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={({history}) => <MuiThemeProvider><Search history={history} fetchCB={this.fetchFlights} /></MuiThemeProvider>} />
        <Route exact path="/results" component={Back} />
        <Route exact path="/results" render={({history}) => <MuiThemeProvider><Flights history={history} fareInfos={this.state.fareInfos} addFlight={this.addFlight} /></MuiThemeProvider> } />
        <Route exact path="/login" render={() => this.checkLoggedIn(<Login loginUser={this.loginUser} />)} />
        <Route exact path="/signup" render={() => this.checkLoggedIn(<SignUp signUpUser={this.signUpUser} />)} />
        <Route exact path="/profile" component={Back} />
        <Route exact path="/profile" render={() => <Profile user={this.state.currentUser} delete={this.deleteFlight} />} />
      </div>
    );
  }
}

export default App;