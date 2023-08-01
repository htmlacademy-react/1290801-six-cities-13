import React, {ChangeEvent, Fragment} from 'react';

type StarsRatingElementProps = {
	ratingChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

function StarsRatingElement({ratingChangeHandler}: StarsRatingElementProps): JSX.Element {
	const ratingValues = {
		'5': 'perfect',
		'4': 'good',
		'3': 'not bad',
		'2': 'badly',
		'1': 'terribly'
	} as const;

	return (
		<div className="reviews__rating-form form__rating">
			{Object.entries(ratingValues).reverse().map(([value, ratingTitle]) => (
				<Fragment key={value}>
					<input
						className="form__rating-input visually-hidden"
						name="rating"
						defaultValue={value}
						id={`${value}-stars`}
						type="radio"
						onChange={ratingChangeHandler}
					/>
					<label
						htmlFor={`${value}-stars`}
						className="reviews__rating-label form__rating-label"
						title={ratingTitle}
					>
						<svg className="form__star-image" width={37} height={33}>
							<use xlinkHref="#icon-star"/>
						</svg>
					</label>
				</Fragment>
			)
			)}
		</div>
	);
}

export default StarsRatingElement;
