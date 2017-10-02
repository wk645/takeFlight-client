import React from 'react'
import Flight from './Flight'
import { Card } from 'semantic-ui-react'

const Flights = (props) => {

	let flight = props.fareInfos.map((info, index) => <Flight key={index} fareInfos={info} addFlight={props.addFlight}/>)

	return (
		<Card.Group>
			{props.fareInfos.length === 0 ? null : flight }
		</Card.Group>
	)
}

export default Flights