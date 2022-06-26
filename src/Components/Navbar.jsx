import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartProducts }) => {
	const cart = cartProducts
		.reduce((total, item) => item.qty + total, 0)
		.toFixed(0);
	return (
		<nav>
			<Link to="shopping-cart/">HOME</Link>
			<Link to="shopping-cart/shop">SHOP</Link>
			<Link to="shopping-cart/cart">
				<div className="nav-cartbox">
					<p>CART</p>
					<FaShoppingCart id="nav-cart-icon" />
					{cart == 0 ? null : <span id="nav-cart-number">{cart}</span>}
				</div>
			</Link>
		</nav>
	);
};
export default Navbar;
