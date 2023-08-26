import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Helmet} from 'react-helmet-async';
import {TOfferForList} from '../types/offer-for-list';
import {Link} from 'react-router-dom';
import OfferCard from '../components/offer-card/offer-card';
import {OFFER_CARD_TYPES} from '../consts';

type FavoritesPageProps = {
	favoritesOffers: TOfferForList[];
}

function FavoritesPage({favoritesOffers}: FavoritesPageProps): JSX.Element {
	const favoriteCities: string[] = Array.from(new Set(favoritesOffers.map((offer) => offer.city.name)));
	return (
		<div className="page">
			<Helmet>
				<title>6 cities: favorites{!favoritesOffers.length ? ' empty' : ''}</title>
			</Helmet>
			<Header />
			{!favoritesOffers.length && (
				<main className="page__main page__main--favorites page__main--favorites-empty">
					<div className="page__favorites-container container">
						<section className="favorites favorites--empty">
							<h1 className="visually-hidden">Favorites (empty)</h1>
							<div className="favorites__status-wrapper">
								<b className="favorites__status">Nothing yet saved.</b>
								<p className="favorites__status-description">
									Save properties to narrow down search or plan your future trips.
								</p>
							</div>
						</section>
					</div>
				</main>
			)}
			{favoritesOffers.length && (
				<main className="page__main page__main--favorites">
					<div className="page__favorites-container container">
						<section className="favorites">
							<h1 className="favorites__title">Saved listing</h1>
							<ul className="favorites__list">
								{favoriteCities.map((city) => (
									<li key={city} className="favorites__locations-items">
										<div className="favorites__locations locations locations--current">
											<div className="locations__item">
												<Link
													className='locations__item-link'
													to={`/${city.toLowerCase()}`}
												>
													<span>{city}</span>
												</Link>
											</div>
										</div>
										<div className="favorites__places">
											{favoritesOffers
												.filter((offer) => offer.city.name === city)
												.map((offer) =>
													<OfferCard key={offer.id} offer={offer} cardType={OFFER_CARD_TYPES.Favorites}/>
												)}
										</div>
									</li>
								))}
							</ul>
						</section>
					</div>
				</main>
			)}
			<Footer />
		</div>
	);
}

export default FavoritesPage;
