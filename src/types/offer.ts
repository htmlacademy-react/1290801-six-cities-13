export type TOffer = {
	id: string;
	title: string;
	type: 'apartment' | 'room' | 'house' | 'hotel';
	price: number;
	city: City;
	location: Location;
	isFavorite: boolean;
	isPremium: boolean;
	rating: number;
	description: string;
	bedrooms: number;
	goods: string[];
	host: Host;
	images: string[];
	maxAdults: number;
}

export type City = {
	name: string;
	location: Location;
}

export type Location = {
	latitude: number;
	longitude: number;
	zoom: number;
}

export type Host = {
	name: string;
	avatarUrl: string;
	isPro: boolean;
}

export type TAdditionalProp = {
	cardStyle: string;
	cardInfo: string;
	imageWrapperStyle: string;
	imgWidth: number;
	imgHeight: number;
}

export type TAdditionalProps = {
	Main: TAdditionalProp;
	Favorites: TAdditionalProp;
	Near: TAdditionalProp;
}
