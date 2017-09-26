import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Back = () => {
	return (
		<center>
			<Link to="/">
				<Button>Back to Search</Button>
			</Link>
		</center>
	)
}

export default Back