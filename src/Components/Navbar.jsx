import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartProducts }) => {
	const cart = cartProducts
		.reduce((total, item) => item.qty + total, 0)
		.toFixed(0);
	return (
		<nav>
			<Link to="/">
				<p>Home</p>
			</Link>
			<Link to="/shop">
				<p>Shop</p>
			</Link>
			<Link to="/cart">
				<div className="nav-cartbox">
					<p>Cart</p>
					<FaShoppingCart id="nav-cart-icon" />
					{cart == 0 ? null : <span id="nav-cart-number">{cart}</span>}
				</div>
			</Link>
		</nav>
	);
};
export default Navbar;
