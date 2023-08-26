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
					<Route path={`${AppRoute.Main}/:urlCity`} element={<MainPage offers={offers}/>} />
					<Route path={AppRoute.Login} element={<LoginPage/>}/>
					<Route
						path={AppRoute.Favorites}
						element={
							<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
								<FavoritesPage favoritesOffers={offers.filter((offer) => offer.isFavorite)}/>
							</PrivateRoute>
						}
					/>
					<Route path={`${AppRoute.Offer}/:id`} element={<OfferPage isLogged={false}/>}/>
					<Route path='*' element={<NotFoundPage/>}/>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
