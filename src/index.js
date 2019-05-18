import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Router from 'routes/router';
import Contact from 'components/Contact';
import 'styles/index.scss';

ReactDOM.render(
	<div>
		<Contact />
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</div>,
	document.getElementById('app'));

serviceWorker.unregister();
