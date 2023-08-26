import {TOfferForList} from '../../types/offer-for-list';
import FavoriteButtonSmall from '../favorite-button/favorite-button-small';
import {Link} from 'react-router-dom';
import {AppRoute, OfferCardAdditionalProps} from '../../consts';

type OfferCardProps = {
	offer: TOfferForList;
	cardType: 'Main' | 'Favorites' | 'Near';
	onMouseEnter?:(offer) => void;
	onMouseLeave?:() => void;
}

function OfferCard({offer, cardType, onMouseEnter, onMouseLeave}: OfferCardProps): JSX.Element {
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
	const additionalProps = OfferCardAdditionalProps[cardType];

	return (
		<article
			className={`place-card${additionalProps.cardStyle}`}
			onMouseEnter={() => (onMouseEnter ? onMouseEnter(offer) : '')}
			onMouseLeave={onMouseLeave}
		>
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>)}
			<div
				className={`place-card__image-wrapper${additionalProps.imageWrapperStyle}`}
			>
				<Link to={`${AppRoute.Offer}/${id}`}>
					<img
						className="place-card__image"
						src={previewImage}
						width={additionalProps.imgWidth}
						height={additionalProps.imgHeight}
						alt="Place image"
					/>
				</Link>
			</div>
			<div
				className={`place-card__info${additionalProps.cardInfo}`}
			>
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
