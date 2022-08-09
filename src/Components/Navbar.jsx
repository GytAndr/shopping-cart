import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartProducts }) => {
	const cart = cartProducts
		.reduce((total, item) => item.qty + total, 0)
		.toFixed(0);

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light mb-1">
			<button
				className="navbar-toggler ms-auto"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end me-3"
				id="navbarNav"
			>
				<ul className="navbar-nav ">
					<li className="nav-item ms-auto me-2">
						<Link to="shopping-cart/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item ms-auto me-2">
						<Link to="shopping-cart/shop" className="nav-link">
							Products
						</Link>
					</li>
					<li className="nav-item ms-auto me-2 ">
						<Link to="shopping-cart/cart" className="nav-link">
							Cart
							<FaShoppingCart className="ms-1" />
							<span className="badge rounded-circle bg-danger ms-1">
								{cart == 0 ? null : cart}
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
