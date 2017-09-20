import React, { Component } from 'react';
import './App.css';
import Home from './component/Home'
import Flights from './component/Flights'
import Search from './component/Search'
import { Route } from 'react-router-dom'
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

    fetch(`https://api.test.sabre.com/v2/shop/flights/fares?origin=${from}&departuredate=${departDate}&returndate=${returnDate}&theme=${theme}&maxfare=${budget}&topdestinations=${top}`, options)
    .then(res => res.json())
    // .then(data => console.log(data.FareInfo))
    .then(data => this.setState({ origins: data.OriginLocation, fareInfos: data.FareInfo, links: data.links }))
  }

  signUpUser = (userParams) => {
    return Auth.signup(userParams)
    // static signup from auth.js
    .then(res => {
      if (res.success) {
        localStorage.setItem('jwt', res.jwt)
        this.msg.success('You are now a member at takeFlight!')
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

  render() {
  return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => <Search fetchCB={this.fetchFlights} />} />

        <Route exact path="/login" render={() => <Login loginUser={this.loginUser} />} />
        <Route exact path="/signup" render={() => <SignUp signupUser={this.signupUser} />} />
        <Route exact path="/profile" render={() => <Profile user={this.state.currentUser} />} />
        <Flights fareInfos={this.state.fareInfos} links={this.state.links} />
      </div>
    );
  }
}

export default App;


// search

