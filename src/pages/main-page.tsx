import {Helmet} from 'react-helmet-async';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {SetStateAction, useState} from 'react';

import OfferCard from '../components/offer-card/offer-card';
import Header from '../components/header/header';
import NotFoundPage from './not-found-page/not-found-page';
import {TOfferForList} from '../types/offer-for-list';
import Map from '../components/map/map';
import {OFFER_CARD_TYPES, CITIES} from '../consts';

type MainPageProps = {
	offers: TOfferForList[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
	const {urlCity} :{urlCity: string | undefined} = useParams();

	const [activeOffer, setActiveOffer] = useState<TOfferForList | undefined>(undefined);
	const handleActiveOfferChange = (offer: SetStateAction<TOfferForList | undefined>) => {
		setActiveOffer(offer);
	};

	const currentCity: string = urlCity || CITIES[0];
	const currentOffers = offers.filter((offer) => offer.city.name.toLowerCase() === currentCity);

	return (
		(!urlCity || CITIES.find((uniqCity) => uniqCity === urlCity)) ?
			<div className="page page--gray page--main">
				<Helmet>
					<title>6 cities</title>
				</Helmet>
				<Header/>
				{/*<main className="page__main page__main--index ">*/}
				<main className={classNames(
					'page__main',
					'page__main--index',
					{'page__main--index-empty' : !currentOffers.length}
				)}
				>
					<h1 className="visually-hidden">Cities</h1>
					<div className="tabs">
						<section className="locations container">
							<ul className="locations__list tabs__list">
								{CITIES.map((city) => (
									<li key={city} className="locations__item">
										<Link
											className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': city === currentCity})}
											to={`/${city}`}
										>
											<span>{(city[0].toUpperCase() + city.slice(1))}</span>
										</Link>
									</li>
								))}
							</ul>
						</section>
					</div>
					{!currentOffers.length && (
						<div className="cities">
							<div className="cities__places-container cities__places-container--empty container">
								<section className="cities__no-places">
									<div className="cities__status-wrapper tabs__content">
										<b className="cities__status">No places to stay available</b>
										<p className="cities__status-description">
											We could not find any property available at the moment in {(currentCity[0].toUpperCase() + currentCity.slice(1))}
										</p>
									</div>
								</section>
								<div className="cities__right-section" />
							</div>
						</div>
					)}
					{currentOffers.length && (
						<div className="cities">
							<div className="cities__places-container container">
								<section className="cities__places places">
									<h2 className="visually-hidden">Places</h2>
									<b className="places__found">{currentOffers.length} places to stay in {(currentCity[0].toUpperCase() + currentCity.slice(1))}</b>
									<form className="places__sorting" action="#" method="get">
										<span className="places__sorting-caption">Sort by</span>{' '}
										<span className="places__sorting-type" tabIndex={0}>
										Popular
											<svg className="places__sorting-arrow" width={7} height={4}>
												<use xlinkHref="#icon-arrow-select"/>
											</svg>
										</span>
										<ul className="places__options places__options--custom places__options--opened">
											<li
												className="places__option places__option--active"
												tabIndex={0}
											>
												Popular
											</li>
											<li className="places__option" tabIndex={0}>
												Price: low to high
											</li>
											<li className="places__option" tabIndex={0}>
												Price: high to low
											</li>
											<li className="places__option" tabIndex={0}>
												Top rated first
											</li>
										</ul>
									</form>
									<div className="cities__places-list places__list tabs__content">

										{currentOffers.map((offer) => <OfferCard offer={offer} key={offer.id} cardType={OFFER_CARD_TYPES.Main} onMouseEnter={() => handleActiveOfferChange(offer)} onMouseLeave={() => handleActiveOfferChange(undefined)}/>)}

									</div>
								</section>

								<Map className="cities__map map" selectedPoint={(activeOffer && activeOffer.id) || ''} points={currentOffers} city={currentOffers[0].city} isOfferPage={false} />

							</div>
						</div>
					)}

				</main>
			</div>
			: <NotFoundPage/>
	//// я не уверен, что это верное решение, но работает так, как мне хотелось бы
	);
}

export default MainPage;
