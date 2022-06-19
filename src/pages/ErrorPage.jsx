import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
	return (
		<div>
			<p>
				This page is not implemented yet.{' '}
				<Link to="/shop">
					<button>Back to Shop</button>
				</Link>
			</p>
		</div>
	);
}

export default ErrorPage;
