import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Grid } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'
import SavedFlight from '../adapters/savedFlight'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import AlertContainer from 'react-alert'


export default class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			image: "https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg",
			currentUserFlights: [],
			filteredPrice: false,
			filteredDate: false
		}
	}

	alertOptions = {
	    offset: 14,
	    position: 'top left',
	    theme: 'dark',
	    time: 3000,
	    transition: 'fade'
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
    	SavedFlight.deleteFlight(flight.id).then(json => {
    		this.msg.show("This flight has been removed from your list!")
    		this.setState({ user: json.user, currentUserFlights: json.flights })
    	})
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

	togglePrice = () => {
		this.setState({ filteredPrice: !this.state.filteredPrice })
	}

	toggleDate = () => {
		this.setState({ filteredDate: !this.state.filteredDate })
		// console.log("toggled date")
	}

	sortPrice = (flights) => {
		return flights.sort((a, b) => (a.fare - b.fare))
	}

	sortDate = (flights) => {
		return flights.sort((a, b) => (a.departureDateTime > b.departureDateTime))
	}

	render() {


		let flights = this.state.currentUserFlights.map(flight => flight)
		let today = (new Date()).toISOString().split("T")[0]
		let filter = flights.filter(flight => flight.departureDateTime.split("T")[0] >= today)

		if (this.state.filteredPrice) {
			filter = this.sortPrice(filter)
		}

		if (this.state.filteredDate) {
			filter = this.sortDate(filter)
		}

		let savedFlights = filter.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} delete={this.deleteFlight} />)

		let info = (
			<div>
			<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
				<center>
					<br />
					<Card className="profilePicture" style={{width: 250, height: 250}} image={this.state.image} />
					<p className="username">Name: {this.props.user.fullname}</p>
					<p className="username">Username: {this.props.user.username}</p>
					<p className="username">E-mail: {this.props.user.email}</p>
					<br />
					<Dropzone className="dropzone" onDrop={this.handleDrop} multiple accept="image/*">
					<p className="profileImage">Change Profile Image</p>
					</Dropzone>
				</center>
					<h2 className="profile saved flights"><u>Your Saved Flights</u></h2>
					<p className="sort">Sort by:</p>
					<p className="price" onClick={this.togglePrice}>Price</p>
					<p className="date" onClick={this.toggleDate}>Departure Date</p>
					<br />
				<Grid relaxed columns={2}>{savedFlights}</Grid>
			</div>
		)
		return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
	}
}

// .sort .date {
//   cursor: pointer;
// }
