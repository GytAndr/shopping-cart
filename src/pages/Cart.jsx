const Cart = ({ cartProducts }) => {
	return (
		<div className="cart-wrapper">
			<div className="cart--product-card">
				<h3>Cart Page</h3>
				{cartProducts.map((product, index) => {
					return <p>{product.title}</p>;
				})}
				<button>Check Out</button>
			</div>
		</div>
	);
};
export default Cart;
