import {TOfferForList} from '../../types/offer-for-list';
import FavoriteButtonSmall from '../favorite-button/favorite-button-small';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type OfferCardProps = {
	offer: TOfferForList;
}

function OfferCard({offer}: OfferCardProps): JSX.Element {
	const {id, title, type, price, city, location, isFavorite, isPremium, rating, previewImage} = offer;
	return (
		<article className="cities__card place-card">
			<div className="cities__image-wrapper place-card__image-wrapper">
				{isPremium && (
					<div className="place-card__mark">
						<span>Premium</span>
					</div>)}
				<a href="#">
					<img
						className="place-card__image"
						src={previewImage}
						width={260}
						height={200}
						alt="Place image"
					/>
				</a>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>{' '}
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<FavoriteButtonSmall isFavorite={isFavorite} />
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{width: String(Math.round(rating) * 20).concat('%')}}/>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	);
}

export default OfferCard;
