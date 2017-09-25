import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import SavedFlights from './SavedFlights'



const Profile = (props) => {
	// console.log(props.user.username)
	console.log("In Profile", props.currentUserFlights)
	// array of saved flight objects

	let savedFlights = props.currentUserFlights.map((flight, index) => <SavedFlights key={index} currentUserFlights={flight} />)

	const info = (
		<center>
			<h2><u>Your Saved Flights</u></h2>
			{savedFlights}
		</center>
	)

	return localStorage.getItem("jwt") ? info : <Redirect to="/login" />
}

export default Profile


// <Card 
// 			image="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg"
// 			header={props.user.username}
// 			meta="User"
// 			/>
// 			<br />