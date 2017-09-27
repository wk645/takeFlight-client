import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const Flight = ({fareInfos, addFlight}) => {

	// console.log("FareInfo", fareInfos)

	const handleClick = (event) => {
		event.preventDefault()
		addFlight(fareInfos)
		// displayModal()
		alert("This flight has now been saved!")
	}

	// const displayModal = (flight) => {
	// 	return (
	// 		<Modal onOpen={handleClick}>
	// 			<Modal.Header>Flight Info</Modal.Header>
	// 				<Modal.Content>
	// 					<Modal.Description>
	// 						<Header>Flight</Header>
	// 						<p>Proceed to the search page?</p>
	// 					</Modal.Description>
	// 				</Modal.Content>
	// 		</Modal>
	// 	)
	// }

	return (
		<Card style={{width: 900}}>
			<Card.Content>
			<p>Ranking: {fareInfos.rank}</p>
			<p>Destination: {fareInfos.destination}</p>
			<p>Airline: {fareInfos.airline}</p>
			<p>Departure Date: {fareInfos.departureDateTime.split("T")[0]}</p>
			<p>Return Date: {fareInfos.returnDateTime.split("T")[0]}</p>
			<p>Lowest Fare: ${fareInfos.fare}</p>
			<Button className="button" onClick={handleClick} icon='add'/>
			</Card.Content>
		</Card>
	)
}



export default Flight
// <a href={fareInfos.Links[0].href}>Buy</a>