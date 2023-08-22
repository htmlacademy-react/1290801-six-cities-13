export type TReview = {
	id: string;
	comment: string;
	date: string;
	rating: number;
	user: TReviewUser;
}

export type TReviewUser = {
	name: string;
	avatarUrl: string;
	isPro: boolean;
}
