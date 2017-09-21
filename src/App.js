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

class App extends Component {

  constructor() {
    super()

    this.state = {
      origins: "",
      fareInfos: [],
      links: [],
      currentUser: {}
    }
  }

  fetchFlights = ({from, departDate, returnDate, top, budget, theme}) => {
    let options = {
      headers: {
        'Authorization': 'Bearer T1RLAQKQIxO4qNOeiFE/1zDC0BOqHkOETRArl1STWSnakRR6rK/zxZR2AADA5F2CtdzCu1ndeeA+8IZdNJgQwN0CpJ0Rr/du81G/s9BxJmOnRZlub8xq2CyKI34OeEtnhe0VCXzaMC2zOS6Haz+eV4eCKee23cumAOhOtLUQgJ0tiewNezsbk+MVXNXVXszGqqIQ73WhCJr71d37ryWH+5n18kQjOCdYXIQ1bh7gFeqlbsr9pyydAMYPejGSYdwJd778hHkoWWW1RuQyUmm/QCZCPHJHkNivt5exDZ/GOwz9GXsCc4tCW7501LmJ'
      },
      method: 'GET'
    }

    fetch(`https://api.test.sabre.com/v2/shop/flights/fares?origin=${from}&departuredate=${departDate}&returndate=${returnDate}&theme=${theme.toUpperCase()}&maxfare=${budget}&topdestinations=${top}`, options)
    .then(res => res.json())
    .then(data => this.setState({ origins: data.OriginLocation, fareInfos: data.FareInfo, links: data.links }))
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
        // this.msg.success('You are now a member of takeFlight!')
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
          // this.msg.success(`Welcome back ${res.user.username}!`)
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

  render() {

  return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => <Search fetchCB={this.fetchFlights} />} />
        <Route exact path="/" render={() => <Flights fareInfos={this.state.fareInfos} links={this.state.links} />} />

        <Route exact path="/login" render={() => this.checkLoggedIn(<Login loginUser={this.loginUser} />)} />
        <Route exact path="/signup" render={() => this.checkLoggedIn(<SignUp signUpUser={this.signUpUser} />)} />
        <Route exact path="/profile" render={() => <Profile user={this.state.currentUser} />} />
      </div>
    );
  }
}

export default App;

        // <Flights fareInfos={this.state.fareInfos} links={this.state.links} />

