import React, { Component } from 'react'
import {costumeData} from '../data'


class Costumes extends Component {
	render () {
		return (
			<div>
				<h2>Costumes</h2>
				<div className='items'>

					{costumeData.map((item, i) => (
						<div className='costumeWrap' key={"item" + i}>
							<h3>{item.name}</h3>
							<div><img className='allimages' src={item.img}></img></div>
							<div> {item.title} <br/> {item.price}</div>
							<div> <a href={item.link}>Learn More</a></div>
						</div>
					))}

				</div>
			</div>
		)
	}
}

export default Costumes
