import React from 'react'
import { Input, Button } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';

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
			</center></div>

		)
	}
}