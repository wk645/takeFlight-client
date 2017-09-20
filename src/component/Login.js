import React from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'

export default class SignUp extends React.Component {


	state = {
		username: "",
		password: "",
	}



	handleSubmit = (event) => {
		event.preventDefault()
		this.props.loginUser(this.state)
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
				<center><h2>Login Page</h2></center>
				<br />
				<Grid centered columns={4}>
				<Grid.Column>
				<Form onSubmit={this.handleSubmit}>				
					<Form.Field>
					<input type="text" name="username" onChange={this.handleChange} placeholder="username" />
					</Form.Field>
					<Form.Field>
					<input type="password" name="password" onChange={this.handleChange} placeholder="password" />
					</Form.Field>
					<center><Button type="submit">Login</Button></center>
				</Form>
				</Grid.Column>
				</Grid>
			</div>
		)
	}
}