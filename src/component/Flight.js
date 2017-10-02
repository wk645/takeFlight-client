import React from 'react'
import { Card } from 'semantic-ui-react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

export default class Flight extends React.Component {

	handleClick = (event) => {
		event.preventDefault()
		this.props.addFlight(this.props.fareInfos)
	}

	style = {
		marginRight: 0
	}

	render() {

		return (
			<Card className="searchResults" style={{width: 900}}>
				<Card.Content>
				<p>Ranking: {this.props.fareInfos.rank}</p>
				<p>Destination: {this.props.fareInfos.destination}</p>
				<p>Airline: {this.props.fareInfos.airline}</p>
				<p>Departure Date: {this.props.fareInfos.departureDateTime.split("T")[0]}</p>
				<p>Return Date: {this.props.fareInfos.returnDateTime.split("T")[0]}</p>
				<p>Lowest Fare: ${this.props.fareInfos.fare}</p>
				<FloatingActionButton className="button" mini={true} style={this.style} onClick={this.handleClick}><ContentAdd /></FloatingActionButton>
				</Card.Content>
			</Card>
		)
	}
}
