import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Grid } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'
import SavedFlight from '../adapters/savedFlight'

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

	deleteFlight = (flight) => {
    SavedFlight.deleteFlight(flight.id).then(json => this.setState({ user: json.user, currentUserFlights: json.flights }))
 	}

	render() {

		// console.log("In profile", this.props.delete)

		let savedFlights = this.state.currentUserFlights.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} delete={this.deleteFlight} />)

		let info = (
			<div>
				<center>
					<br />
					<Card style={{width: 250, height: 250}} image="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg" header={this.props.user.username} meta="User" />
					<br />
					<h2><u>Your Saved Flights</u></h2>
					<br />
				</center>
				<Grid relaxed columns={2}>{savedFlights}</Grid>
			</div>
		)
		return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
	}
}