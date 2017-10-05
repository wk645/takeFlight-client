import React from 'react'
import { Card, Button } from 'semantic-ui-react'
// import FloatingActionButton from 'material-ui/FloatingActionButton'
// import ContentAdd from 'material-ui/svg-icons/content/add'

export default class Flight extends React.Component {

	handleClick = (event) => {
		event.preventDefault()
		this.props.addFlight(this.props.fareInfos)
	}

	style = {
		marginRight: 0
	}

	render() {

		return (
				<div>
<Card className="cardDiv">
	<div className="box">
        <ul className="left">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <ul className="right">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <div className="ticket">
          <span className="airline">{this.props.fareInfos.airline}</span>
          <span className="airline airlineslip">{this.props.fareInfos.airline}</span>
          <span className="boarding">Boarding pass</span>
          <div className="contentFlight">
            <span className="jfk">{this.props.origin}</span>
            <span className="plane"><svg clipRule="evenodd" fillRule="evenodd" height="60" width="60" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" strokeLinecap="round" strokeWidth="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" strokeLinejoin="round" strokeWidth="10"/></g></svg></span>
            <span className="sfo">{this.props.fareInfos.destination}</span>

            <span className="jfk jfkslip">{this.props.origin}</span>
            <span className="plane planeslip"><svg clipRule="evenodd" fillRule="evenodd" height="50" width="50" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" strokeLinecap="round" strokeWidth="30" x1="300" x2="55" y1="390" y2="390"/><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" strokeLinejoin="round" strokeWidth="10"/></g></svg></span>
            <span className="sfo sfoslip">{this.props.fareInfos.destination}</span>
            <div className="sub-content">
              <span className="name">PASSENGER NAME</span>
              <span className="passengerName"></span>
              <span>{this.props.user.fullna}</span>
              <span className="flight">FLIGHT N&deg;</span>
              <span className="airlineName">{this.props.fareInfos.airline}</span>
              <span className="gate">GATE</span>
              <span className="gateNumber">00</span>
              <span className="seat">PRICE</span>
              <span className="seatNumber">${this.props.fareInfos.fare}</span>
              <span className="boardingtime">BOARDING TIME</span>
              <span className="boardingDate">{this.props.fareInfos.departureDateTime.split("T")[0]}</span>
              <span className="flight flightslip">FLIGHT N&deg;</span>
              <span className="airlineStub">{this.props.fareInfos.airline}</span>
              <span className="seat seatslip">SEAT</span>
              <span className="seatStub">00</span>
              <span className="name nameslip">PASSENGER NAME</span>
              <span className="nameStub"></span>
            </div>
          </div>
          <div className="barcode"></div>
          <div className="barcode slip"></div>
      <Button className="button" onClick={this.handleClick}>+</Button>
        </div>
      </div>
</Card>
</div>

		)
	}
}
