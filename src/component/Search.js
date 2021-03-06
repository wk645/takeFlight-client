import React from 'react'
import { Input, Button, Container, Header, Dropdown, Grid} from 'semantic-ui-react'
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

		let returnDateDuration = new Date(this.state.returnDate)
		let departDateDuration = new Date(this.state.departDate)
		let duration = (Math.abs(returnDateDuration - departDateDuration) / 86400000)

		if	((!!this.state.from && !!this.state.departDate && !!this.state.returnDate && !!this.state.theme && !!this.state.budget && !!this.state.top) && (airportData.map(d => d.Destinations)[0].map(d => d.Destination).includes(this.state.from)) && (this.state.budget > 0) && (this.state.top > 1 && this.state.top <= 50)) 
		{

			this.props.fetchCB(this.state)
			.then(res => this.props.history.push("/results"))

		} else if (duration > 14) {
			this.msg.error("Your return date has to be within 14 days after the departure date!")

		} else if (this.state.budget < 150) {
			this.msg.error("Your budget is too low! Please enter a higher amount.")

		} else {

			this.msg.error("An unknown error occurred during your search. Please try again!")
		}

	}

	handleSelect = (event, data) => {
		this.setState({ theme: data.value })
	}

	render() {

		return (
		<div>
		<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<AutoComplete className="airportSearch" fullWidth={true} animated={true} name="from" hintText="Airport Code" from={this.state.from} onUpdateInput={this.handleUpdateInput} dataSource={this.handleAirportDupes()} filter={(from, key) => (key.indexOf(from.toUpperCase()) !== -1)} openOnFocus={false} underlineStyle={{display: 'none'}} />
					</Grid.Column>
					<Grid.Column>
						<DatePicker className="datePicker" selected={this.state.departDate} minDate={moment()} onChange={this.handleDepartDate} placeholderText="Departure Date" />
					</Grid.Column>
					<Grid.Column>
						<DatePicker placeholderText="Return Date" className="datePicker" selected={this.state.returnDate} minDate={moment()} onChange={this.handleReturnDate} />
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
	   <center><p className="Description">takeFlight allows our users to plan for trips by formulating a destination from the help of a few things: the <b>departing location</b>, <b>date of travel</b>, <b>theme</b>, <b>budget</b>, and you can also narrow the results to get a list of <b>1~50</b> recommendations.</p></center>
	    <br />
	    <br />
	 </Container>
		</div>
		)
	}
}