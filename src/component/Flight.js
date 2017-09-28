import React from 'react'
import { Card } from 'semantic-ui-react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const Flight = ({fareInfos, addFlight}) => {

	// console.log("FareInfo", fareInfos)

	const handleClick = (event) => {
		event.preventDefault()
		addFlight(fareInfos)
		// displayModal()
		alert("This flight has now been saved!")
	}

	const style = {
		marginRight: 0
	}

	return (
		<Card className="searchResults" style={{width: 900}}>
			<Card.Content>
			<p>Ranking: {fareInfos.rank}</p>
			<p>Destination: {fareInfos.destination}</p>
			<p>Airline: {fareInfos.airline}</p>
			<p>Departure Date: {fareInfos.departureDateTime.split("T")[0]}</p>
			<p>Return Date: {fareInfos.returnDateTime.split("T")[0]}</p>
			<p>Lowest Fare: ${fareInfos.fare}</p>
			<FloatingActionButton className="button" mini={true} style={style} onClick={handleClick}><ContentAdd /></FloatingActionButton>
			</Card.Content>
		</Card>
	)
}



export default Flight
// <a href={fareInfos.Links[0].href}>Buy</a>