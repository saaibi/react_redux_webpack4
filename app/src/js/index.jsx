import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/index.scss';

import App from "./App";
import store from './store';

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

const AppLPA = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

render(<AppLPA />, document.getElementById('app'));
