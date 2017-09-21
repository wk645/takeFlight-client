import React from 'react'
import { Input, Button, Container, Header } from 'semantic-ui-react'
// import { Redirect } from 'react-router-dom'

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
			// traveler: ""
		}
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value 
		})
	}

	handleSubmit = (event) => {
		this.props.fetchCB(this.state)
	}

	render() {

		return (
			<div><center>
				<Input type="text" name="from" onChange={this.handleChange} value={this.state.from} placeholder="From" />
				<Input type="text" name="departDate" onChange={this.handleChange} value={this.state.departDate} placeholder="YYYY-MM-DD" />
				<Input type="text" name="returnDate" onChange={this.handleChange} value={this.state.returnDate} placeholder="YYYY-MM-DD" />
				<Input type="text" name="theme" onChange={this.handleChange} value={this.state.theme} placeholder="Theme of Trip" />
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
	    <p>takeFlight formulates a destination with the help of a few things from our users: <b>departing location</b>, <b>date of travel</b> OR <b>length of stay</b>, the <b>theme</b>, <b>budget</b>, and you can also narrow the results to get a list of <b>1~50</b> recommendations.</p>
	  </Container>
	  </div>
		)
	}
}
