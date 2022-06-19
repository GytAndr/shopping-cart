import '../Styles/Cart.css';
import { Link } from 'react-router-dom';
const Cart = ({ cartProducts, deleteCartItem, addToCart }) => {
	// const totalProduct =
	const totalSum = cartProducts
		.reduce(
			(total, item) =>
				item.price - (item.price * item.discountPercentage) / 100 + total,
			0
		)
		.toFixed(2);
	if (!cartProducts.length) {
		return (
			<div className="cart-empty">
				<p>Cart is empty... </p>
				<Link to="/shop">
					<button className="product-page--btn">Continue Shopping</button>
				</Link>
			</div>
		);
	}
	return (
		<div className="cart">
			<div className="cart-wrapper">
				<div className="cart-labels">
					<p>PRODUCT</p>
					<p>PRICE</p>
					<p>QTY</p>
					<p>TOTAL</p>
				</div>
				{cartProducts.map((product, index) => {
					return (
						<div key={index} className="cart-card">
							<div className="cart-product-col">
								<img src={product.thumbnail} alt="" className="cart-thumb" />
								<p>{product.title}</p>
							</div>
							<p className="cart-price-col">
								{product.price -
									((product.price * product.discountPercentage) / 100).toFixed(
										2
									)}{' '}
								€
							</p>
							<div className="cart-qty-col">
								<button
									onClick={() => deleteCartItem(product)}
									className="cart-qty--btn"
								>
									-
								</button>
								<p>{product.qty}</p>
								<button
									onClick={() => addToCart(product)}
									className="cart-qty--btn"
								>
									+
								</button>
							</div>
							<div className="cart-total-col">
								<p>
									{(
										(product.price -
											(
												(product.price * product.discountPercentage) /
												100
											).toFixed(2)) *
										product.qty
									).toFixed(2)}{' '}
									€
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="cart-sidebar">
				<p>
					Cart total: <span id="cart-total-sum">{totalSum} €</span>
				</p>
				<p>Shipping &amp; taxes calculated at checkout</p>
				<p>
					<input type="checkbox"></input>I agree to{' '}
					<span className="fake-link">Terms and Conditions</span>
				</p>
				<button className="product-page--btn">Check Out</button>
			</div>
		</div>
	);
};
export default Cart;
