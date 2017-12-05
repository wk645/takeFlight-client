import React from 'react'
import Auth from '../adapters/auth'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const NavBar = ({currentUser}) => {

	const logLinks = (localStorage.getItem('jwt')) ? 
		<Menu.Menu position="right">
			<NavLink className='item nav-item' to='/profile'>Profile</NavLink>
			<NavLink className='item nav-item' activeClassName="" to="/" onClick={Auth.logOut}>Log out</NavLink>
		</Menu.Menu> :

		<Menu.Menu position="right">
			<NavLink className='item nav-item' to='/signup'>Sign up</NavLink>
			<NavLink className='item nav-item' to='/login'>Log in</NavLink>
		</Menu.Menu>

	return(

		<Menu borderless className="nav-bar-background">
				<NavLink className="item nav-item-logo" activeClassName="" to='/'>takeFlight</NavLink> 
			{logLinks}
		</Menu>
	)
}

export default NavBar