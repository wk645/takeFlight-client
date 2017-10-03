import React from 'react'
import { Input, Button, Container, Header, Dropdown, Grid } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import airportData from '../data'
import AutoComplete from 'material-ui/AutoComplete'
import AlertContainer from 'react-alert'
import moment from 'moment'


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

	alertOptions = {
	    offset: 14,
	    position: 'top left',
	    theme: 'dark',
	    time: 3000,
	    transition: 'fade'
  }

	handleUpdateInput = (from) => {
		this.setState({ from: from })
	}

	handleAirportDupes = () => {

		let data = airportData[0].Destinations.map(des => des.Destination)
		var unique = Array.from(new Set(data))
		return unique
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
		.then(res => this.props.history.push("/results"))
	}

	handleSelect = (event) => {
		this.setState({ theme: event.target.value })
	}

	render() {
		return (
		<div>
		<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
			<Grid columns='equal'>
				<Grid.Row>
					<Grid.Column>
						<AutoComplete className="airportSearch" fullWidth={true} animated={true} name="from" hintText="Airport Code" from={this.state.from} onUpdateInput={this.handleUpdateInput} dataSource={this.handleAirportDupes()} filter={(from, key) => (key.indexOf(from.toUpperCase()) !== -1)} openOnFocus={false} underlineStyle={{display: 'none'}} />
					</Grid.Column>
					<Grid.Column>
						<DatePicker className="datePicker" selected={this.state.departDate} isClearable={true} minDate={moment()} onChange={this.handleDepartDate} placeholderText="Departure Date" />
					</Grid.Column>
					<Grid.Column>
						<DatePicker placeholderText="Return Date" className="datePicker" isClearable={true} selected={this.state.returnDate} minDate={moment()} onChange={this.handleReturnDate} />
					</Grid.Column>
					<Grid.Column>
						<Input type="text" name="budget" onChange={this.handleChange} value={this.state.budget} placeholder="Budget" />
					</Grid.Column>
					<Grid.Column>
						<Input type="text" name="top" onChange={this.handleChange} value={this.state.top} placeholder="Limit Results (1~50)" />
					</Grid.Column>
					<Grid.Column>
						<Dropdown placeholder="Theme" selection options={this.options} onChange={this.handleSelect} />
					</Grid.Column>
					<Grid.Column>
				<Button basic color="black" 
				onClick={this.handleSubmit} 
				type="submit" 
				value="Submit" name="Submit">Search Flights</Button>
				<br />
				<br />
					</Grid.Column>
				</Grid.Row>
			</Grid>
	  <Container text>
	    <Header as='h2'>How to!</Header>
	    <p className="Description">takeFlight allows our users to plan for trips by formulating a destination from the help of a few things: the <b>departing location</b>, <b>date of travel</b>, <b>theme</b>, <b>budget</b>, and you can also narrow the results to get a list of <b>1~50</b> recommendations.</p>
	    <br />
	    <br />
	  </Container>
		</div>
		)
	}
}