import React from 'react'
import { Card } from 'semantic-ui-react'

const Flight = ({fareInfos, addFlight}) => {

	console.log("FareInfo", fareInfos)

	const handleClick = (event) => {
		event.preventDefault()
		addFlight(fareInfos)
	}

	return (
		<Card>
			<Card.Content>
			<p>Ranking: {fareInfos.rank}</p>
			<p>Destination: {fareInfos.destination}</p>
			<p>Airline: {fareInfos.airline}</p>
			<p>Departure Date: {fareInfos.departureDateTime.split("T")[0]}</p>
			<p>Return Date: {fareInfos.returnDateTime.split("T")[0]}</p>
			<p>Lowest Fare: ${fareInfos.fare}</p>
			<button onClick={handleClick} type="submit" value="Add">Save</button>
			</Card.Content>
		</Card>
	)
}



export default Flight
// <a href={fareInfos.Links[0].href}>Buy</a>