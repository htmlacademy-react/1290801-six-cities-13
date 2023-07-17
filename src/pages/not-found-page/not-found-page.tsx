import {Link} from 'react-router-dom';

import styles from './not-found-page.module.css';
import Header from '../../components/header/header';
import {AppRoute} from '../../consts';
import Footer from '../../components/footer/footer';

function NotFoundPage(): JSX.Element {
	return (
		<div className="page page--favorites-empty">
			<Header/>
			<main className="page__main page__main--favorites page__main--favorites-empty">
				<div className="page__favorites-container container">
					<section className="favorites favorites--empty">
						<h1 className="visually-hidden">404 Page not found</h1>
						<div className={`${styles.wrapper} favorites__status-wrapper`}>
							<b className="favorites__status">404 - Page not found</b>
							<p className="favorites__status-description">
								Try another page
							</p>
							<Link to={AppRoute.Main} className={`${styles.link}`}>To main page</Link>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default NotFoundPage;
