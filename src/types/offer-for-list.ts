import {TOffer} from './offer';

export type TOfferForList = Omit<TOffer, 'description' | 'bedrooms' | 'goods' | 'host' | 'images' | 'maxAdults'> & {
	previewImage: string;
}


