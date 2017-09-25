import React from 'react'
import { Card, Button, Container } from 'semantic-ui-react'

// const SavedFlights = (props) => {

// 	// console.log("In SavedFlights", props.currentUserFlights)
// 	// console.log("SavedFlights", props.delete)

// 	const handleClick = (event) => {
// 		event.preventDefault()
// 		props.delete(props.currentUserFlights)
// 		alert("This flight has been removed from your list!")

// 	}

// 	return (
			// <Card className="savedFlights" style={{width: 900}}>
				// <Card.Content>
				// <p>Destination: {props.currentUserFlights.destination}</p>
				// <p>Airline: {props.currentUserFlights.airline}</p>
				// <Container textAlign="left">
				// <p>Departure: {props.currentUserFlights.departureDateTime.split("T")[0]}</p>
				// </Container>
				// <p>Return: {props.currentUserFlights.returnDateTime.split("T")[0]}</p>
				// <p>Fare: ${props.currentUserFlights.fare}</p>
				// <Container textAlign='right'>
					// <Button className="button" onClick={handleClick}>Delete</Button>
				// </Container>
				// </Card.Content>
			// </Card>

// 	)
// }

// export default SavedFlights

export default class SavedFlights extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: props.user,
			currentUserFlights: props.currentUserFlights
		}
	}

	handleClick = (event) => {
		event.preventDefault()
		this.props.delete(this.props.currentUserFlights)
		alert("This flight has been removed from your list!")
	}

	render() {

		return (
			<Card className="savedFlights" style={{width: 900}}>
				<Card.Content>
				<p>Destination: {this.props.currentUserFlights.destination}</p>
				<p>Airline: {this.props.currentUserFlights.airline}</p>
				<Container textAlign="left">
				<p>Departure: {this.props.currentUserFlights.departureDateTime.split("T")[0]}</p>
				</Container>
				<p>Return: {this.props.currentUserFlights.returnDateTime.split("T")[0]}</p>
				<p>Fare: ${this.props.currentUserFlights.fare}</p>
				<Container textAlign='right'>
					<Button className="button" onClick={this.handleClick}>Delete</Button>
				</Container>
				</Card.Content>
			</Card>

		)
	}
}

