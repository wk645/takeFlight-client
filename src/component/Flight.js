import React from 'react'
import { Card } from 'semantic-ui-react'

const Flight = (props) => {

	console.log("Flight props", props)
	// only the last FareInfos gets passed down to Flight

	return (
		<Card>
			<Card.Content>
			<p>Ranking: {props.fareInfos.DestinationRank}</p>
			<p>Destination: {props.fareInfos.DestinationLocation}</p>
			<p>Airline: {props.fareInfos.LowestFare.AirlineCodes[0].toString()}</p>
			<p>Lowest Fare: ${props.fareInfos.LowestFare.Fare}</p>
			<p>Departure Date: {props.fareInfos.DepartureDateTime.split("T")[0]}</p>
			<p>Return Date: {props.fareInfos.ReturnDateTime.split("T")[0]}</p>
			<a href={props.fareInfos.Links[0].href}>Buy</a>
			</Card.Content>
		</Card>
	)
}



export default Flight