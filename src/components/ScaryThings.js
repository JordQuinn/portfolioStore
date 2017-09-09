import React, { Component } from 'react'
import {scaryData} from '../data'

class ScaryThings extends Component {
	render () {
		return (
			<div>
				<div className='items'>

						{scaryData.map((item, i) => (
							<div className='scaryWrap' key={"item" + i}>
								<img className='scary'alt='Dog'src={item.pic}/>
								<img className='scary'alt='Dog'src={item.pic2}/>
								<img className='scary'alt='Lion Dog'src={item.pic3}/>
								<img className='scary'alt='Funny Dog'src={item.pic4}/>
							</div>
						))}

				</div>
			</div>
		)
	}
}

export default ScaryThings
