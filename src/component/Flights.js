import React from 'react'
import Flight from './Flight'
import { Card } from 'semantic-ui-react'

const Flights = (props) => {

	// console.log("Flights props", props.fareInfos)
	// debugger
	
	let flight = props.fareInfos.map((flight, index) => <Flight key={index} fareInfos={flight}/>)

	return (
		<Card.Group>
			{flight}
		</Card.Group>
	)
}

export default Flights
// {flight}

// function to ignore saved flights that are before today