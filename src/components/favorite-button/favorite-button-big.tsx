import classNames from 'classnames';
import {FavoriteButtonProps} from '../../types/favorite-button';

function FavoriteButtonBig({isFavorite}: FavoriteButtonProps): JSX.Element {
	return (
		<button className={classNames('offer__bookmark-button', 'button', {'offer__bookmark-button--active' : isFavorite})} type="button">
			<svg className="offer__bookmark-icon" width={31} height={33}>
				<use xlinkHref="#icon-bookmark"/>
			</svg>
			<span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
		</button>
	);
}

export default FavoriteButtonBig;
