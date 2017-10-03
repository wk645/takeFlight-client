import React from 'react'
import Flight from './Flight'
import { Card } from 'semantic-ui-react'

export default class Flights extends React.Component {

	state = {
		filteredPrice: false,
		fareInfos: this.props.fareInfos
	}

	togglePrice = () => {
		this.setState({ filteredPrice: !this.state.filteredPrice })
	}

	sortPrice = (flights) => {
		return flights.sort((a, b) => (a.fare - b.fare))
	}

	render() {

	let sortedFlight = this.state.fareInfos.slice()

	if (this.state.filteredPrice) {
		sortedFlight = this.sortPrice(sortedFlight)
	}

	let flight = sortedFlight.map((info, index) => <Flight key={index} fareInfos={info} addFlight={this.props.addFlight}/>)

		return (
			<div>
			<br />
				<center><h3 className="priceSearch" onClick={this.togglePrice}>Price</h3></center>
				<Card.Group>
					{this.props.fareInfos.length === 0 ? null : flight }
				</Card.Group>
			</div>
		)
	}

}