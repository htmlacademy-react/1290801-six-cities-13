import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Helmet} from 'react-helmet-async';
import {TOfferForList} from '../types/offer-for-list';
import FavoritesOfferCard from '../components/offer-card/favorites-offer-card';
import {Link} from 'react-router-dom';

type FavoritesPageProps = {
	favoritesOffers: TOfferForList[];
}

function FavoritesPage({favoritesOffers}: FavoritesPageProps): JSX.Element {
	const favoriteCities: string[] = Array.from(new Set(favoritesOffers.map((offer) => offer.city.name))).map((city) => city);
	return (
		<div className="page">
			<Helmet>
				<title>6 cities: favorites</title>
			</Helmet>
			<Header />
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
										{favoritesOffers.filter((offer) => offer.city.name === city).map((offer) => <FavoritesOfferCard key={offer.id} offer={offer} />)}
									</div>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default FavoritesPage;
