import React from 'react'
import Flight from './Flight'
import { Card } from 'semantic-ui-react'

const Flights = (props) => {

	// console.log("Flights props", props.fareInfos)
	
	// let flight = <Flight fareInfos={flight}/>

	return (
		<Card.Group>
			{props.fareInfos.length === 0 ? null : <Flight fareInfos={props.fareInfos}/> }
		</Card.Group>
	)
}

export default Flights
// {flight}

// function to ignore saved flights that are before today