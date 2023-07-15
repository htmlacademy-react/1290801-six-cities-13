import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';

import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page';

type AppProps = {
	numbersOfOffers: number;
}

function App({numbersOfOffers} : AppProps): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={AppRoute.Main} element={<MainPage numbersOfOffers={numbersOfOffers} />} />
				<Route path={AppRoute.Login} element={<LoginPage />} />
				<Route
					path={AppRoute.Favorites}
					// element={<FavoritesPage />}
					element={
						<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
							<FavoritesPage />
						</PrivateRoute>
					}
				/>
				<Route path={AppRoute.Offer} element={<OfferPage />} />
				<Route path ='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
