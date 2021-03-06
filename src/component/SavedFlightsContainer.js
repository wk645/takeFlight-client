import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import SavedFlight from './SavedFlight'
import { Scrollbars } from 'react-custom-scrollbars'

BigCalendar.momentLocalizer(moment)

export default class SavedFlights extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.context = context
		this.state = {
			user: props.user

		}
		BigCalendar.setLocalizer(
			BigCalendar.momentLocalizer(moment)
		)
	}

	Events = [
		  {
		    'title': 'LAX',
		    'allDay': true,
		    'start': new Date(2017, 9, 10),
		    'end': new Date(2017, 9, 14)
		  }
	]

	render() {

		let filter = this.props.filter
		let savedFlight = filter.map((flight, index) => <SavedFlight key={index} currentUserFlights={flight} delete={this.props.delete} user={this.props.user} origin={this.props.origin} />)

		return (
			<div>
				<br />
				<br />
				<h3 className="sort">Sort by:</h3>
				<div className="sorts"><center>
				<p onClick={this.props.togglePrice}>Price</p>
				<p onClick={this.props.toggleDate}>Departure Date</p>
				</center></div>
				<br />
				<Scrollbars className="scroll" style={{ width: 930, height: 500 }}>{savedFlight}</Scrollbars>
			</div>

		)
	}
}

				// <Grid relaxed columns={1}>{savedFlight}</Grid>
// <Scrollbars className="scroll" style={{ width: 930, height: 500 }}>{savedFlight}</Scrollbars>