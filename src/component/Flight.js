import React from 'react'
import { Card } from 'semantic-ui-react'

const Flight = (props) => {

	let departure = props.fareInfos.DepartureDateTime.split("T")[0]

	let returnDate = props.fareInfos.ReturnDateTime.split("T")[0]

	return (
		<Card>
			<Card.Content>
			<p>Ranking: {props.fareInfos.DestinationRank}</p>
			<p>Destination: {props.fareInfos.DestinationLocation}</p>
			<p>Airline: {props.fareInfos.LowestFare.AirlineCodes}</p>
			<p>Departure Date/Time: {departure}</p>
			<p>Return Date/Time: {returnDate}</p>
			<p>Lowest Fare: ${props.fareInfos.LowestFare.Fare}</p>
			</Card.Content>
		</Card>
	)
}

export default Flight

// https://api.test.sabre.com/v2/shop/flights/fares?origin=JFK&lengthofstay=5&topdestinations=5