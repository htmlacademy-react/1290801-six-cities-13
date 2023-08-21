import Header from '../components/header/header';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {offersMock} from '../mocks/offers';
import {nearbyOffers} from '../mocks/nearby-offers';
import React from 'react';
import NotFoundPage from './not-found-page/not-found-page';
import FavoriteButtonBig from '../components/favorite-button/favorite-button-big';
import classNames from 'classnames';
import OfferForm from '../components/offer-form/offer-form';
import Map from '../components/map/map';
import OfferCard from '../components/offer-card/offer-card';
import {OFFER_CARD_TYPES} from '../consts';

function OfferPage(): JSX.Element {
	const {id} = useParams();
	const offer = offersMock.find((offersElement) => offersElement.id === id);
	const randomNearbyOffers = [nearbyOffers[0], nearbyOffers[1], nearbyOffers[2]];
	//// наверное это плохо, что я моковые данные вставляю прямо тут через импорт,
	//// но мы же планируем использовать редакс, поэтому я подумал, что нет смысла спускать их через пропсы
	return (
		offer ?
			<div className="page">
				<Helmet>
					<title>6 cities: offer</title>
				</Helmet>
				<Header/>
				<main className="page__main page__main--offer">
					<section className="offer">
						<div className="offer__gallery-container container">
							<div className="offer__gallery">
								{offer.images.map((image) => (
									//// ссылка в виде ключа это окей?
									<div key={image} className="offer__image-wrapper">
										<img
											className="offer__image"
											src={image}
											alt="Photo studio"
										/>
									</div>)
								)}
							</div>
						</div>
						<div className="offer__container container">
							<div className="offer__wrapper">
								{offer.isPremium && (
									<div className="offer__mark">
										<span>Premium</span>
									</div>)}
								<div className="offer__name-wrapper">
									<h1 className="offer__name">
										{offer.title}
									</h1>
									<FavoriteButtonBig isFavorite={offer.isFavorite} />
								</div>
								<div className="offer__rating rating">
									<div className="offer__stars rating__stars">
										<span style={{width: String(Math.round(offer.rating) * 20).concat('%')}}/>
										<span className="visually-hidden">Rating</span>
									</div>
									<span className="offer__rating-value rating__value">{offer.rating}</span>
								</div>
								<ul className="offer__features">
									<li className="offer__feature offer__feature--entire">{(offer.type[0].toUpperCase() + offer.type.slice(1))}</li>
									<li className="offer__feature offer__feature--bedrooms">
										{offer.bedrooms} Bedrooms
									</li>
									<li className="offer__feature offer__feature--adults">
										Max {offer.maxAdults} adults
									</li>
								</ul>
								<div className="offer__price">
									<b className="offer__price-value">€{offer.price}</b>{' '}
									<span className="offer__price-text">&nbsp;night</span>
								</div>
								<div className="offer__inside">
									<h2 className="offer__inside-title">What&apos;s inside</h2>
									<ul className="offer__inside-list">
										{offer.goods.map((goodsElement) => (
											<li key={goodsElement} className="offer__inside-item">{goodsElement}</li>
										))}
									</ul>
								</div>
								<div className="offer__host">
									<h2 className="offer__host-title">Meet the host</h2>
									<div className="offer__host-user user">
										<div className={classNames('offer__avatar-wrapper', 'user__avatar-wrapper', {'offer__avatar-wrapper--pro': offer.host.isPro})}>
											<img
												className="offer__avatar user__avatar"
												src={offer.host.avatarUrl}
												width={74}
												height={74}
												alt="Host avatar"
											/>
										</div>
										<span className="offer__user-name">{offer.host.name}</span>
										{offer.host.isPro && <span className="offer__user-status">Pro</span>}
									</div>
									<div className="offer__description">
										<p className="offer__text">
											{offer.description}
										</p>
									</div>
								</div>
								<section className="offer__reviews reviews">
									<h2 className="reviews__title">
										Reviews · <span className="reviews__amount">1</span>
									</h2>
									<ul className="reviews__list">
										<li className="reviews__item">
											<div className="reviews__user user">
												<div className="reviews__avatar-wrapper user__avatar-wrapper">
													<img
														className="reviews__avatar user__avatar"
														src="img/avatar-max.jpg"
														width={54}
														height={54}
														alt="Reviews avatar"
													/>
												</div>
												<span className="reviews__user-name">Max</span>
											</div>
											<div className="reviews__info">
												<div className="reviews__rating rating">
													<div className="reviews__stars rating__stars">
														<span style={{width: '80%'}}/>
														<span className="visually-hidden">Rating</span>
													</div>
												</div>
												<p className="reviews__text">
													A quiet cozy and picturesque that hides behind a a river by
													the unique lightness of Amsterdam. The building is green and
													from 18th century.
												</p>
												<time className="reviews__time" dateTime="2019-04-24">
													April 2019
												</time>
											</div>
										</li>
									</ul>
									<OfferForm />
								</section>
							</div>
						</div>
						<section className="offer__map map">
							<Map selectedPoint={offer.id} points={[offer, ...randomNearbyOffers]} city={offer.city} isOfferPage/>
						</section>
					</section>
					<div className="container">
						<section className="near-places places">
							<h2 className="near-places__title">
								Other places in the neighbourhood
							</h2>
							<div className="near-places__list places__list">
								{randomNearbyOffers.map((nearOffer) => (
									<OfferCard key={nearOffer.id} offer={nearOffer} cardType={OFFER_CARD_TYPES.Near}/>
								))}
							</div>
						</section>
					</div>
				</main>
			</div>
			: <NotFoundPage/>
	//// я не уверен, что это верное решение, но работает так, как мне хотелось бы
	);
}

export default OfferPage;
