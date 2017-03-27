import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import App from '../client/src/app';

//Redux Store
import createStore from '../client/src/createStore';
const store = createStore(); 

export default function render (req, res) {
	let context = {};

	const html = renderToString(
		<Provider store={ store }>
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	)

	if (context.status >= 400) {
	   res.status(context.status).send(html);
	} else if (context.url) {
	    res.redirect(context.status, context.url);
	} else {
	    res.send(html);
	}

};

