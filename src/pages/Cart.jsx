import '../Styles/Cart.css';
const Cart = ({ cartProducts, deleteCartItem }) => {
	const totalSum = cartProducts
		.reduce(
			(total, item) =>
				item.price - (item.price * item.discountPercentage) / 100 + total,
			0
		)
		.toFixed(2);
	return (
		<div className="cart">
			<div className="cart-wrapper">
				<div className="cart-labels">
					<p>Product</p>
					<p>Price</p>
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
									className="product-page--btn"
									onClick={() => deleteCartItem(index)}
								>
									Remove from Cart
								</button>
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
