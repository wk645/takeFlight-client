import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import SavedFlight from './SavedFlight'
// import { Scrollbars } from 'react-custom-scrollbars'
// import Events from '../Events'
import { Grid } from 'semantic-ui-react'

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
			<BigCalendar selectable events={this.Events} defaultView='month' scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2017, 9, 1)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )} />
				<br />
				<br />
				<h3 className="sort">Sort by:</h3>
				<p className="price" onClick={this.props.togglePrice}>Price</p>
				<p className="date" onClick={this.props.toggleDate}>Departure Date</p>
				<Grid relaxed columns={4}>{savedFlight}</Grid>
			</div>

		)
	}
}
// <Scrollbars className="scroll" style={{ width: 930, height: 500 }}>{savedFlight}</Scrollbars>