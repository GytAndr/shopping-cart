import '../Styles/Navbar.css';

const Navbar = ({ cart }) => {
	return (
		<nav>
			<a href="/">About</a>
			<a href="/shop">Shop</a>
			<a href="/cart">Cart</a>
			<p>items in cart {cart}</p>
		</nav>
	);
};
export default Navbar;
