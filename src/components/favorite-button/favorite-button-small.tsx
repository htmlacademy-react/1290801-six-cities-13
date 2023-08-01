import classNames from 'classnames';
import {FavoriteButtonProps} from '../../types/favorite-button';

function FavoriteButtonSmall({isFavorite}: FavoriteButtonProps): JSX.Element {
	return (
		<button className={classNames('place-card__bookmark-button', 'button', { 'place-card__bookmark-button--active' : isFavorite}) } type="button">
			<svg className="place-card__bookmark-icon" width={18} height={19}>
				<use xlinkHref="#icon-bookmark"/>
			</svg>
			<span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
		</button>
	);
}

export default FavoriteButtonSmall;
