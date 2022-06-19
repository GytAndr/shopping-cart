import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cart }) => {
	return (
		<nav>
			<Link to="/">
				<a href="/">Home</a>
			</Link>
			<Link to="/shop">
				<a href="/shop">Shop</a>
			</Link>
			<Link to="/cart">
				<a href="/cart">Cart</a>
			</Link>
			<div className="nav-cartbox">
				<FaShoppingCart id="nav-cart-icon" />
				<span id="nav-cart-number">{cart}</span>
			</div>
		</nav>
	);
};
export default Navbar;
