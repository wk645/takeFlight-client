import React from 'react'
import { Input, Button, Container, Header, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import moment from 'moment'

export default class Search extends React.Component {


	constructor(props) {
		super(props)

		this.state = {
			from: "",
			departDate: "",
			returnDate: "",
			length: "",
			theme: "",
			budget: "",
			top: ""
		}
	}


	options = [
		{
			text: "Beach",
			value: 'beach'
		},
		{
			text: "Casino",
			value: 'gambling'
		},
		{
			text: "Disney",
			value: 'disney'
		},
		{
			text: "Mountains",
			value: 'mountains'
		},
		{
			text: "Romantic",
			value: 'romantic'
		},
		{
			text: "Shopping",
			value: 'shopping'
		},
		{
			text: "Skiing",
			value: 'skiing'
		}
	]

	handleDepartDate = (date) => {
		this.setState({ departDate: date
		})
	}

	handleReturnDate = (date) => {
		this.setState({ returnDate: date
		})
	}



	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value 
		})
	}

	handleSubmit = (event) => {
		this.props.fetchCB(this.state)
	}

	handleSelect = (event) => {
		this.setState({ theme: event.target.value })
	}

	render() {

		// console.log("locale", this.state.departDate._locale)
		// console.log("info", this.state.departDate._d)

		return (
			<div><center>
				<Input type="text" name="from" onChange={this.handleChange} value={this.state.from} placeholder="From" />
				<DatePicker className="datePicker" selected={this.state.departDate} onChange={this.handleDepartDate} placeholderText="Departure Date" />
				<DatePicker placeholderText="Return Date" className="datePicker" selected={this.state.returnDate} onChange={this.handleReturnDate} />
				<Dropdown placeholder="Theme" selection options={this.options} onChange={this.handleSelect} />
				<Input type="text" name="budget" onChange={this.handleChange} value={this.state.budget} placeholder="Budget" />
				<Input type="text" name="top" onChange={this.handleChange} value={this.state.top} placeholder="Limit Results Top (1~50)" />
				<Button basic color="black" 
				onClick={this.handleSubmit} 
				type="submit" 
				value="Submit" name="Submit">Search Flights</Button>
				<br />
				<br />
			</center>

	  <Container text>
	    <Header as='h2'>How to!</Header>
	    <p className="HowTo">takeFlight formulates a destination with the help of a few things from our users: <b>departing location</b>, <b>date of travel</b> OR <b>length of stay</b>, the <b>theme</b>, <b>budget</b>, and you can also narrow the results to get a list of <b>1~50</b> recommendations.</p>
	  </Container>
	  </div>
		)
	}
}

// <Input type="text" name="departDate" onChange={this.handleChange} value={this.state.departDate} placeholder="YYYY-MM-DD" />
// <Input type="text" name="returnDate" onChange={this.handleChange} value={this.state.returnDate} placeholder="YYYY-MM-DD" />