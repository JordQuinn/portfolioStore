import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
	render () {
		return (
			<div className='fullWrap'>
				<div className='nav'>
					<h1><NavLink exact activeClassName='active' to='/'>Creepy Costume Superstore</NavLink></h1>
					<div className='topped'>
						<NavLink activeClassName='active' to='/About'>About</NavLink>
						<NavLink activeClassName='active' to='/Contact'>Contact</NavLink>
					</div>
					<NavLink activeClassName='active' to='/Costumes'>Costumes</NavLink>
					<NavLink activeClassName='active' to='/DogCostume'>Dog Costumes</NavLink>
					<NavLink activeClassName='active' to='/ScaryThings'>Creepy Dog Pics</NavLink>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default BaseLayout
