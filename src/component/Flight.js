import React from 'react'
import { Card } from 'semantic-ui-react'

const Flight = (props) => {

	// console.log("Flight props", props)
	// only the last FareInfos gets passed down to Flight

	return (
		<Card>
			<Card.Content>
			<p>Ranking: {props.fareInfos.rank}</p>
			<p>Destination: {props.fareInfos.destination}</p>
			<p>Airline: {props.fareInfos.airline}</p>
			<p>Departure Date/Time: {props.fareInfos.departureDateTime}</p>
			<p>Return Date/Time: {props.fareInfos.returnDateTime}</p>
			<p>Lowest Fare: ${props.fareInfos.fare}</p>
			</Card.Content>
		</Card>
	)
}

export default Flight

// https://api.test.sabre.com/v2/shop/flights/fares?origin=JFK&lengthofstay=5&topdestinations=5