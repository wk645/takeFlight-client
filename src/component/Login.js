import React from 'react'
import { Form, Button, Grid } from 'semantic-ui-react'
import AlertContainer from 'react-alert'

export default class SignUp extends React.Component {


	state = {
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
		this.props.loginUser(this.state).then(res => {
			if (res) {
				this.msg.error("Your username or password does not match with our records!")
			}
		})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {

		return (
			<div>
			<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
				<Grid columns={2}>
				<Grid.Row>
				<Grid.Column width={4}/>
				<Grid.Column width={4}>
				<h2 className="loginHeader">Login Page</h2>
				<br />
				<Form onSubmit={this.handleSubmit}>				
					<Form.Field>
					<input type="text" className="loginName" name="username" onChange={this.handleChange} placeholder="username" />
					</Form.Field>
					<Form.Field>
					<input type="password" className="loginPassword" name="password" onChange={this.handleChange} placeholder="password" />
					</Form.Field>
					<Button className="loginButton" type="submit">Login</Button>
				</Form>
				</Grid.Column>
				</Grid.Row>
				</Grid>
			</div>
		)
	}
}