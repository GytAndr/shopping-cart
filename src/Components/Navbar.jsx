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
				<div className="nav-cartbox">
					<a href="/cart">Cart</a>
					<FaShoppingCart id="nav-cart-icon" />
					{cart ? <span id="nav-cart-number">{cart}</span> : null}
				</div>
			</Link>
		</nav>
	);
};
export default Navbar;
