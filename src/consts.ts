import {TAdditionalProps} from './types/offer';

export const enum AppRoute {
	Main = '/',
	Login = '/login',
	Favorites = '/favorites',
	Offer = '/offer',
}

export const enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

export const enum OFFER_CARD_TYPES {
	Main = 'Main',
	Favorites = 'Favorites',
	Near = 'Near'
}

export const OfferCardAdditionalProps : TAdditionalProps = {
	'Main': {
		cardStyle: ' cities__card',
		cardInfo: '',
		imageWrapperStyle: ' cities__image-wrapper',
		imgWidth: 260,
		imgHeight: 200
	},
	'Favorites': {
		cardStyle: ' favorites__card',
		cardInfo: ' favorites__card-info',
		imageWrapperStyle: ' favorites__image-wrapper',
		imgWidth: 150,
		imgHeight: 110
	},
	'Near': {
		cardStyle: ' near-places__card',
		cardInfo: '',
		imageWrapperStyle: ' near-places__image-wrapper',
		imgWidth: 260,
		imgHeight: 200
	}
};


export const URL_MARKER_DEFAULT = 'markup/img/pin.svg';

export const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';

//// нет смысла фильтровать все офферы, чтобы достать из них уникальные города - их список будет неизменен
export const CITIES = ['paris', 'cologne', 'brussels', 'amsterdam', 'hamburg', 'dusseldorf'];


