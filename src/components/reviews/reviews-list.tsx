import OfferForm from '../offer-form/offer-form';
import React from 'react';
import ReviewsItem from './reviews-item';

import {reviewsMock} from '../../mocks/reviews';

const reviews = reviewsMock;

type ReviewProps = {
	isLogged: boolean;
}

function ReviewsList({isLogged}: ReviewProps): JSX.Element {
	return (
		<section className="offer__reviews reviews">
			<h2 className="reviews__title">
			Reviews{reviews.length ? (<> · <span className="reviews__amount">{reviews.length}</span></>) : ''}
			</h2>
			<ul className="reviews__list">
				{reviews.map((review) => (
					<ReviewsItem key={review.id} review={review}/>
				))}
			</ul>
			{isLogged && (<OfferForm />)}
		</section>
	);
}

export default ReviewsList;
