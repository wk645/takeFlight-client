import React from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import AlertContainer from 'react-alert'

export default class SignUp extends React.Component {


	state = {
		fullname: "",
		email: "",
		username: "",
		password: "",
	}

	alertOptions = {
		offset: 14,
		position: 'top left',
		theme: 'dark',
		time: 3000,
		transition: 'fade'
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.signUpUser(this.state)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {

	// console.log("Sign up props", this.props.signUpUser)

		return (
			<div>
			<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

				<Grid columns={2}>
				<Grid.Row>
				<Grid.Column width={4}/>
				<Grid.Column width={4}>
				<h2 className="signUpHeader">Sign Up Page</h2>
				<br />
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
					<input type="text" name="fullname" onChange={this.handleChange} placeholder="full name" />
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
					<Button className="signup" type="submit">Sign up</Button>
				</Form>
				</Grid.Column>
				</Grid.Row>
				</Grid>
			</div>
		)
	}
}