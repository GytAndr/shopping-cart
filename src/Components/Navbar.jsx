import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav>
			<a href="/">About</a>
			<a href="/shop">Shop</a>
			<a href="/cart">Cart</a>
		</nav>
	);
};
export default Navbar;
