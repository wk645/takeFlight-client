import React from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'

export default class SignUp extends React.Component {


	state = {
		name: "",
		email: "",
		username: "",
		password: "",
	}



	handleSubmit = (event) => {
		event.preventDefault()
		this.props.signupUser(this.state)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {

	// console.log("Sign up props", this.props.signupUser)

		return (
			<div>
				<center><h2>Sign Up Page</h2></center>
				<br />
				<Grid centered columns={4}>
				<Grid.Column>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
					<input type="text" name="name" onChange={this.handleChange} placeholder="full name" />
					</Form.Field>
					<Form.Field>
					<input type="text" name="email" onChange={this.handleChange} placeholder="e-mail address" />
					</Form.Field>
					<Form.Field>
					<input type="text" name="username" onChange={this.handleChange} placeholder="username" />
					</Form.Field>
					<Form.Field>
					<input type="password" name="password" onChange={this.handleChange} placeholder="password" />
					</Form.Field>
					<center><Button type="submit">Sign up</Button></center>
				</Form>
				</Grid.Column>
				</Grid>
			</div>
		)
	}
}