import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './app';

// Redux Store
import createStore from './createStore';
const store = createStore(); 

const render = Component => {
  ReactDOM.render(
    <AppContainer>
	    <Provider store={ store }>
            <Component />
		</Provider>
    </AppContainer>,
    !!module.hot ? document.getElementById('root') : document
  );
}

render(App);

if (!!module.hot) {
	console.log('Module HOT!');
	module.hot.accept('./app', () => { render(App) });
}