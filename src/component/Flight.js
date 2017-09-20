import React from 'react'
import { Card } from 'semantic-ui-react'

const Flight = (props) => {

	// let departure = props.fareInfos.DepartureDateTime.

	// let return = props.fareInfos.ReturnDateTime.

	return (
		<Card>
			<Card.Content>
			<p>Ranking: {props.fareInfos.DestinationRank}</p>
			<p>Destination: {props.fareInfos.DestinationLocation}</p>

			<p>Departure Date/Time: {props.fareInfos.DepartureDateTime}</p>
			<p>Return Date/Time: {props.fareInfos.ReturnDateTime}</p>
			<p>Lowest Fare: ${props.fareInfos.LowestFare.Fare}</p>
			</Card.Content>
		</Card>
	)
}

export default Flight

// https://api.test.sabre.com/v2/shop/flights/fares?origin=JFK&lengthofstay=5&topdestinations=5

// <p>Theme: {props.fareInfos.Theme.toLowerCase()}</p>