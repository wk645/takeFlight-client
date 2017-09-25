import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'

// 	let savedFlights = props.currentUserFlights.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} />)

export default class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			currentUserFlights: []
		}
	}

	componentDidMount() {
		const jwtToken = localStorage.getItem("jwt")
		return fetch("http://localhost:3000/api/v1/my_flights", {
			headers: {
				"Authorization": `Bearer ${jwtToken}`,
				"Accept": "application/json"
			}
		})
		.then(res => res.json()).then(json => this.setState({ user: json.user, currentUserFlights: json.flights }))
	}

	render() {

		// console.log(this.state.user)

		// console.log("In Profile", this.state.currentUserFlights)

		let savedFlights = this.state.currentUserFlights.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} />)

		let info = (
			<center>
				<Card image="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg" header={this.props.user.username} meta="User" />
				<br />
				<h2><u>Your Saved FLights</u></h2>
				{savedFlights}
			</center>
		)
		return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
	}
}