import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {offersForListMock} from './mocks/offers-for-list';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);


root.render(
	<React.StrictMode>
		<App offers={offersForListMock}/>
	</React.StrictMode>
);
