import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Grid, Icon } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'
import SavedFlight from '../adapters/savedFlight'
import Dropzone from 'react-dropzone'
import axios from 'axios'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			image: "https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg",
			currentUserFlights: [],
			filtered: false
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

	handleDrop = (files) => {
	  const uploaders = files.map(file => {
	    const formData = new FormData();
	    formData.append("file", file);
	    formData.append("tags", `codeinfuse, medium, gist`);
	    formData.append("upload_preset", "zztcggwp");
	    formData.append("api_key", "521129587314161");
	    formData.append("timestamp", (Date.now() / 1000) | 0);
	    

	    return axios.post("https://api.cloudinary.com/v1_1/zoeykim94/image/upload", formData, {
	      headers: { "X-Requested-With": "XMLHttpRequest" },
	    }).then(response => this.setState({ image: response.data.url })) 
	  });

	  axios.all(uploaders).then(() => {
	   alert("Your Profile Picture Has Been Changed!")
	  });
	}

	toggleFilter = () => {
		this.setState({ filtered: !this.state.filtered })
	}

	sortData = (flights) => {
		return flights.sort((a, b) => (a.fare - b.fare))
	}

	render() {


		let flights = this.state.currentUserFlights.map(flight => flight)
		let today = (new Date()).toISOString().split("T")[0]
		let filter = flights.filter(flight => flight.departureDateTime.split("T")[0] >= today)

		if (this.state.filtered) {
			filter = this.sortData(filter)
		}

		let savedFlights = filter.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} delete={this.deleteFlight} />)

		let info = (
			<div>
				<center>
					<br />
					<Card className="profilePicture" style={{width: 250, height: 250}} image={this.state.image} />
					<p className="username">Name: {this.props.user.fullname}</p>
					<p className="username">Username: {this.props.user.username}</p>
					<p className="username">E-mail: {this.props.user.email}</p>
					<br />
					<Dropzone className="dropzone" onDrop={this.handleDrop} multiple accept="image/*">
					<p>Change Profile Image</p>
					</Dropzone>
				</center>
					<h2 className="profile saved flights"><u>Your Saved Flights</u></h2>
					<Icon className="icon" name="sort ascending" size="large" onClick={this.toggleFilter} />
					<br />
					<br />
				<Grid relaxed columns={2}>{savedFlights}</Grid>
			</div>
		)
		return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
	}
}
