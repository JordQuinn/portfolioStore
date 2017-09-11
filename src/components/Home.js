import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import image from '../styles/images/image1.jpg'

class Home extends Component {
	render () {
		return (
			<div className='homeWrap'>

				<br></br>
				<img id='pumpkin'alt="evil pumpkn" src={image}/>
				<h4>Be sure to check out our Halloween Specials!</h4>
				<Link to='/Contact'>More about our company</Link>
			</div>
		)
	}
}

export default Home
