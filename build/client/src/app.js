import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Template from './views/template';
import Home from './containers/home/home';

let initialProps = {title: 'React in a Box'};
!!module.hot ? console.log('Module Hot!!') : console.log('No hot module bro.');

export default class App extends Component {

    // Needed for server rendering
	activateTemplate = Component => (
		<Template {...initialProps}>
			<Component />
		</Template>
	);

	Route = () => (
	    <BrowserRouter>
            <Route path='/' component={() => <Home {...initialProps} /> } />
        </BrowserRouter>
    );

	render = () => {
		return !!module.hot ? <this.Route /> : this.activateTemplate(this.Route);
	}
}