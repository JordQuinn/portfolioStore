import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import About from './components/About'
import Contact from './components/Contact'
import Costumes from './components/Costumes'
import DogCostume from './components/DogCostume'
import ScaryThings from './components/ScaryThings'
import Home from './components/Home'

ReactDOM.render(
	<Router>
		<BaseLayout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/About' component={About} />
				<Route path='/Contact' component={Contact} />
				<Route path='/Costumes' component={Costumes} />
				<Route path='/DogCostume' component={DogCostume} />
				<Route path='/ScaryThings' component={ScaryThings} />
			</Switch>
		</BaseLayout>
	</Router>
, document.getElementById('root'));
registerServiceWorker();
