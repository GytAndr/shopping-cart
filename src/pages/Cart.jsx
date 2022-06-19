import '../Styles/Cart.css';
const Cart = ({ cartProducts }) => {
	return (
		<div className="cart">
			<h3>Cart Page</h3>
			<div className="cart-wrapper">
				{cartProducts.map((product, index) => {
					return (
						<div key={index} className="cart-card">
							<img src={product.thumbnail} alt="" className="cart-thumb" />
							<p>{product.title}</p>
							<p>
								{product.price -
									((product.price * product.discountPercentage) / 100).toFixed(
										2
									)}{' '}
								€
							</p>
							<button>remove</button>
						</div>
					);
				})}
			</div>
			<button>Check Out</button>
		</div>
	);
};
export default Cart;
