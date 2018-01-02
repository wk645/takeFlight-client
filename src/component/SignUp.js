import React from 'react'
import { Form, Button } from 'semantic-ui-react'
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
				<h2 className="signUpHeader">Sign Up Page</h2>
				<br />
				<Form onSubmit={this.handleSubmit} >
					<Form.Field>
					<Form.Input type="text" name="fullname" onChange={this.handleChange} placeholder="full name" width={6} />
					</Form.Field>
					<Form.Field>
					<Form.Input type="text" name="email" onChange={this.handleChange} placeholder="e-mail address" width={6} />
					</Form.Field>
					<Form.Field>
					<Form.Input type="text" name="username" onChange={this.handleChange} placeholder="username" width={6} />
					</Form.Field>
					<Form.Field>
					<Form.Input type="password" name="password" onChange={this.handleChange} placeholder="password" width={6} />
					</Form.Field>
					<Button className="signup" type="submit">Sign up</Button>
				</Form>
			</div>
		)
	}
}