import React, {ChangeEvent} from 'react';
import StarsRatingElement from './stars-rating-element';

function OfferForm(): JSX.Element {
	const [formData, setFormData] = React.useState({
		rating: '',
		review: '',
	});

	function handleFormDaraChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const {name, value} = event.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	return (
		<form className="reviews__form form" action="#" method="post">
			<label className="reviews__label form__label" htmlFor="review">
				Your review {formData.rating && `(${formData.rating} stars)` || ''}
			</label>
			<StarsRatingElement ratingChangeHandler={handleFormDaraChange}/>
			<textarea
				className="reviews__textarea form__textarea"
				id="review"
				name="review"
				placeholder="Tell how was your stay, what you like and what can be improved"
				defaultValue={''}
				onChange={handleFormDaraChange}
			/>
			<div className="reviews__button-wrapper">
				<p className="reviews__help">
					To submit review please make sure to set{' '}
					<span className="reviews__star">rating</span> and describe
					your stay with at least{' '}
					<b className="reviews__text-amount">50 characters</b>.
				</p>
				<button
					className="reviews__submit form__submit button"
					type="submit"
					disabled={!(formData.review.length >= 50 && formData.rating !== '')}
				>
					Submit
				</button>
			</div>
		</form>
	);
}

export default OfferForm;
