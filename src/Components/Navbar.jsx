import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cart }) => {
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
					{cart ? <span id="nav-cart-number">{cart}</span> : null}
				</div>
			</Link>
		</nav>
	);
};
export default Navbar;
