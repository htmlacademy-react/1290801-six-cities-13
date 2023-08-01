import {TOfferForList} from '../../types/offer-for-list';
import FavoriteButtonSmall from '../favorite-button/favorite-button-small';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type FavoritesOfferCardProps = {
	offer: TOfferForList;
}

////конечно, эта карточка невероятно сильно похожа на offer-card
////думаю, что может иметь смысл их объединить и передавать просто тип, чтобы понимать
////какие стили присваивать и размеры картинок
////из отличий вижу события по маусоверу, но из можно сделать необязательными

function FavoritesOfferCard({offer}: FavoritesOfferCardProps): JSX.Element {
	const {
		id,
		title,
		type,
		price,
		// city,
		// location,
		isFavorite,
		isPremium,
		rating,
		previewImage
	} = offer;
	return (
		<article className="favorites__card place-card">
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={`${AppRoute.Offer}/${id}`}>
					<img
						className="place-card__image"
						src={previewImage}
						width={150}
						height={110}
						alt="Place image"
					/>
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
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

export default FavoritesOfferCard;
