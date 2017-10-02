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
				this.msg.show("Your username or password does not match with our records!", {time: 4000})
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