import React, { Component } from 'react'
import {dogData} from '../data'

class DogCostume extends Component {
	render () {
		return (
			<div>
				<h2>DogCostume</h2>
				<div className='dogitems'>

					{dogData.map((item, i) => (
						<div className='dogWrap' key={"item" + i}>
							<h3>{item.name}</h3>
							<div>{item.image}</div>
							<div> {item.title} <br/> {item.price}</div>
							<div> <a href={item.link}>Learn More</a></div>

						</div>
					))}

				</div>
			</div>
		)
	}
}

export default DogCostume
