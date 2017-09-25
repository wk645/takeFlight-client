import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'



const Profile = (props) => {

	let savedFlights = props.currentUserFlights.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} />)

	const info = (
		<center>
		<Card image="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg" header={props.user.username} meta="User" />
			<br />
			<h2><u>Your Saved Flights</u></h2>
			{savedFlights}
		</center>
	)

	return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
}

export default Profile


