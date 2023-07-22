import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {NUMBERS_OF_OFFERS} from './consts';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);


root.render(
	<React.StrictMode>
		<App numbersOfOffers={NUMBERS_OF_OFFERS}/>
	</React.StrictMode>
);
