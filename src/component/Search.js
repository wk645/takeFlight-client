import React from 'react'
import { Input, Button, Container, Header, Dropdown } from 'semantic-ui-react'
// import DatePicker from 'material-ui/DatePicker'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

	handleDate = (event, date) => {
		this.setState({ departDate: date
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

		return (
			<div><center>
				<Input type="text" name="from" onChange={this.handleChange} value={this.state.from} placeholder="From" />
				<Input type="text" name="departDate" onChange={this.handleChange} value={this.state.departDate} placeholder="YYYY-MM-DD" />
				<Input type="text" name="returnDate" onChange={this.handleChange} value={this.state.returnDate} placeholder="YYYY-MM-DD" />
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

				// <MuiThemeProvider>
				// <DatePicker hintText="Departure Date" value={this.state.departDate} onChange={this.handleDate} />
				// </MuiThemeProvider>