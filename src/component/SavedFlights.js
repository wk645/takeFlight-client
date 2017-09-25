import React from 'react'
import { Card } from 'semantic-ui-react'

const SavedFlights = (props) => {

	// console.log("In SavedFlights", props.currentUserFlights)

	const handleClick = (event) => {
		// event.preventDefault()
		// props.deleteFlight(props.currentUserFlights)
	}

	return (
		<Card>
			<Card.Content>
			<p>Destination: {props.currentUserFlights.destination}</p>
			<p>Airline: {props.currentUserFlights.airline}</p>
			<p>Departure: {props.currentUserFlights.departureDateTime.split("T")[0]}</p>
			<p>Return: {props.currentUserFlights.returnDateTime.split("T")[0]}</p>
			<p>Fare: {props.currentUserFlights.fare}</p>
			</Card.Content>
		</Card>
	)
}

export default SavedFlights