import React from 'react'

const SavedFlights = (props) => {

	console.log("In SavedFlights", props.currentUserFlights)

	return (
		<div>
		<p>Destination: {props.currentUserFlights.destination}</p>
		<p>Airline: {props.currentUserFlights.airline}</p>
		<p>Departure: {props.currentUserFlights.departureDateTime.split("T")[0]}</p>
		<p>Return: {props.currentUserFlights.returnDateTime.split("T")[0]}</p>
		<p>Fare: {props.currentUserFlights.fare}</p>
		</div>
	)
}

export default SavedFlights