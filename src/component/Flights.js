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

	let flight = this.props.fareInfos.map((info, index) => <Flight key={index} fareInfos={info} addFlight={this.props.addFlight}/>)
		
	if (this.state.filteredPrice) {
		flight = this.sortPrice(flight)
	}

		return (
			<div>
				<p className="price" onClick={this.togglePrice}>Price</p>
				<Card.Group>
					{this.props.fareInfos.length === 0 ? null : flight }
				</Card.Group>
			</div>
		)
	}

}