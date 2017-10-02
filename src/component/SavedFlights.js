import React from 'react'
import { Card, Button, Container, Divider } from 'semantic-ui-react'

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
	}

	render() {

		console.log(this.state.currentUserFlights)

		return (
			<div>
				<Card className="savedFlightCards" style={{width: 900}}>
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
				<Divider className="divider" />
			</div>

		)
	}
}

