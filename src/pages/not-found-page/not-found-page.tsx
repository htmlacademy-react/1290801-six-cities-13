import {Link} from 'react-router-dom';

function NotFoundPage (): JSX.Element {
	return (
		<div className='.notFoundPage'>
			<h1>404. Page not found.</h1>
			<p>try another page</p>
			<Link to={'/'}>to main page</Link>
		</div>
	);
}

export default NotFoundPage;
