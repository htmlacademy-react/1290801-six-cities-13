import MainPage from "../../pages/main-page";
// import FavoritesPage from '../../pages/favorites-page';
// import FavoritesEmptyPage from '../../pages/favorites-empty-page';
// import LoginPage from '../../pages/login-page';
// import MainEmptyPage from '../../pages/main-empty-page';
// import OfferPage from '../../pages/offer-page';
// import OfferNotLoggedPage from '../../pages/offer-not-logged-page';

type AppProps = {
	numbersOfOffers: number;
}

function App({numbersOfOffers} : AppProps): JSX.Element {
	return (
		<>
			<MainPage numbersOfOffers={numbersOfOffers}/>
			{/*<FavoritesPage />*/}
			{/*<FavoritesEmptyPage />*/}
			{/*<LoginPage />*/}
			{/*<MainEmptyPage />*/}
			{/*<OfferNotLoggedPage />*/}
			{/*<OfferPage />*/}
		</>
	);
}

export default App;
