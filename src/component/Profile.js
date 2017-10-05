import React from 'react'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import SavedFlightsContainer from './SavedFlightsContainer'
import SavedFlight from '../adapters/savedFlight'
import ProfilePic from './ProfilePic'
import AlertContainer from 'react-alert'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user,
			image: "https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg",
			showForm: false,
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

  	handleClick = () => {
  		this.setState({ showForm: true })
  	}

	hideForm = () => {
		this.setState({
			showForm: false
		})
	}

  	formSubmit = (profile) => {
  		this.setState({ showForm: false })
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
    		this.msg.show("This flight has been removed from your list!",)
    		this.setState({ user: json.user, currentUserFlights: json.flights })
    	})
 	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	togglePrice = () => {
		this.setState({ filteredPrice: !this.state.filteredPrice })
	}

	toggleDate = () => {
		this.setState({ filteredDate: !this.state.filteredDate })
	}

	sortPrice = (flights) => {
		return flights.sort((a, b) => (a.fare - b.fare))
	}

	sortDate = (flights) => {
		return flights.sort((a, b) => (a.departureDateTime > b.departureDateTime))
	}

	render() {

		// console.log(this.state.filteredDate)

		let flights = this.state.currentUserFlights.map(flight => flight)
		let today = (new Date()).toISOString().split("T")[0]
		let filter = flights.filter(flight => flight.departureDateTime.split("T")[0] >= today)

		if (this.state.filteredPrice) {
			filter = this.sortPrice(filter)
		}

		if (this.state.filteredDate) {
			filter = this.sortDate(filter)
		}

		let info = (
			<div>
			<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
				<center>
					<br />
					{this.state.user.image_url != null ? <img src={this.state.user.image_url} alt="" width="250px" height="250px" /> : <img src={this.state.image} alt="" width="250px" height="250px" />}
					<br />

					{this.state.user ? <button onClick={this.handleClick} >Add Profile Picture</button> : null }

					<br />

					{this.state.showForm ? <ProfilePic hideForm={this.hideForm} submit={this.handleSubmit} formSubmit={this.formSubmit} /> : null }

					<p className="username">Name: {this.props.user.fullname}</p>
					<p className="username">Username: {this.props.user.username}</p>
					<p className="username">E-mail: {this.props.user.email}</p>
					<br />
				</center>
					<h2 className="profile saved flights"><u>Your Saved Flights</u></h2>
				<br />

				<Grid relaxed columns={2}>
				<SavedFlightsContainer currentUserFlights={this.state.currentUserFlights} filter={filter} delete={this.deleteFlight} toggleDate={this.toggleDate} togglePrice={this.togglePrice} user={this.props.user} origin={this.props.origin} />
				</Grid>
			</div>
		)
		return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
	}
}

// <form className="form" onSubmit={this.handleDrop}>
// 					<input type="file" name="avatar" onChange={ this.uploadFile } ref="imageInput" accept="image/png, image/jpeg"  multiple="false" />
// 					</form>

// <form className="picture" onSubmit={this.handleSubmit}>
// <Dropzone className="dropzone" onDrop={this.handleDrop} multiple accept="image/*">
// <p className="profileImage">Change Profile Image</p>
// </Dropzone>
// {this.state.image.length > 0 ? <img src={this.state.image} width="500px" height="500px" /> : null }
// <input type="submit" value="submit" />
// </form>

// <Card className="profilePicture" style={{width: 250, height: 250}} image={this.state.image} />