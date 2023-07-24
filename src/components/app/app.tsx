import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {HelmetProvider} from 'react-helmet-async';

import MainPage from '../../pages/main-page';
import LoginPage from '../../pages/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page';
import {TOfferForList} from '../../types/offer-for-list';

type AppProps = {
	offers: TOfferForList[];
}

function App({offers}: AppProps): JSX.Element {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Main} element={<MainPage offers={offers}/>}/>
					<Route path={AppRoute.Login} element={<LoginPage/>}/>
					<Route
						path={AppRoute.Favorites}
						// element={<FavoritesPage />}
						element={
							<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
								<FavoritesPage/>
							</PrivateRoute>
						}
					/>
					<Route path={AppRoute.Offer} element={<OfferPage/>}/>
					<Route path='*' element={<NotFoundPage/>}/>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
