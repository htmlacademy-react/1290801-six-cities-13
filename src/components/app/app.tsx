import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../consts';

import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import FavoritesPage from '../../pages/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page';

type AppProps = {
	numbersOfOffers: number;
}

function App({numbersOfOffers} : AppProps): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={AppRoute.Main} element={<MainPage numbersOfOffers={numbersOfOffers} />} />
				<Route path={AppRoute.Login} element={<LoginPage />} />
				<Route path={AppRoute.Favorites} element={<FavoritesPage />} />
				<Route path={AppRoute.Offer} element={<OfferPage />} />
				<Route path ='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
	// return (
	// 	<>
	// 		<MainPage numbersOfOffers={numbersOfOffers}/>
	// 		{/*<FavoritesPage />*/}
	// 		{/*<FavoritesEmptyPage />*/}
	// 		{/*<LoginPage />*/}
	// 		{/*<MainEmptyPage />*/}
	// 		{/*<OfferNotLoggedPage />*/}
	// 		{/*<OfferPage />*/}
	// 	</>
	// );
}

export default App;
