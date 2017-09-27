import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Grid } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'
import SavedFlight from '../adapters/savedFlight'
import Dropzone from 'react-dropzone'
import axios from 'axios'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			image: [],
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

	render() {

		// console.log("Image state", this.state.image)

		let savedFlights = this.state.currentUserFlights.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} delete={this.deleteFlight} />)

		let info = (
			<div>
				<center>
					<br />
					<Card style={{width: 250, height: 250}} image={this.state.image} header={this.props.user.username} meta="User" />
					<br />
					<br />
					<br />
					<Dropzone className="dropzone" onDrop={this.handleDrop} multiple accept="image/*">
					<p>Change Profile Image</p>
					</Dropzone>
					<h2><u className="profile saved flights">Your Saved Flights</u></h2>
					<br />
				</center>
				<Grid relaxed columns={2}>{savedFlights}</Grid>
			</div>
		)
		return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
	}
}

	// # handlePastFlights = () => {
	// # 	let flightDate = this.state.currentUserFlights.map(flight => flight.departureDateTime.split("T")[0])

	// # 	let today = (new Date()).toISOString().split('T')[0]

	// # 	if (flightDate !== today) {
	// # 		// ignore flights
	// # 		where to call this function?
	// # 	}
	// # }