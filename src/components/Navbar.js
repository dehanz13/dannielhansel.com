import React from 'react'
import { FaAlignRight } from 'react-icons/fa'
import PageLinks from "../constants/links"

import logo from '../assets/dh.svg'


const Navbar = () => {
	return(
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo"/>
					<button type="button" className="toggle-btn"></button>
					<FaAlignRight></FaAlignRight>
				</div>
				<PageLinks styleClass="nav-links"></PageLinks>
			</div>
		</nav>
	)
}

export default Navbar