import React from 'react'
import { Card, Button, Container, Divider } from 'semantic-ui-react'	

const SavedFlight = (props) => {

	const handleClick = (event) => {
		event.preventDefault()
		props.delete(props.currentUserFlights)
	}

	return(
		<div>
			<Card className="savedFlightCards" style={{width: 900}}>
						<Card.Content>
						<p>Destination: {props.currentUserFlights.destination}</p>
						<p>Airline: {props.currentUserFlights.airline}</p>
						<Container textAlign="left">
						<p>Departure: {props.currentUserFlights.departureDateTime.split("T")[0]}</p>
						</Container>
						<p>Return: {props.currentUserFlights.returnDateTime.split("T")[0]}</p>
						<p>Fare: ${props.currentUserFlights.fare}</p>
						<Container textAlign='right'>
							<Button className="button" onClick={handleClick}>Delete</Button>
						</Container>
						</Card.Content>
			</Card>
			<Divider className="divider" />
		</div>
	)
}

export default SavedFlight