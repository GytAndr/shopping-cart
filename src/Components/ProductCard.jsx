import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProductCard.css';
import { CgShoppingCart } from 'react-icons/cg';
export default function ProductCard({
	add,
	data: { id, title, price, thumbnail, discountPercentage },
}) {
	const discountedPrice = price - (price * discountPercentage) / 100;
	const [hovered, setHovered] = useState(false);
	return (
		<div
			className="product-card"
			onMouseOver={() => {
				setHovered(true);
			}}
			onMouseOut={() => {
				setHovered(false);
			}}
			style={hovered ? { transform: 'scale(1.05)' } : {}}
		>
			<div className="card-top">
				<Link to={`${id}`}>
					<img
						className="product-thumbnail"
						src={thumbnail}
						alt="thumbnail"
						title={title}
					/>
				</Link>
				<div className="product-discount">-{discountPercentage}%</div>
			</div>
			<p className="product-title">{title}</p>
			<div className="product-prices-box">
				<p className="product-price">{price} €</p>

				<p className="product-final-price">{discountedPrice.toFixed(2)} €</p>
			</div>
			{hovered ? (
				<div className="product-add">
					<button
						className="product-btn"
						onClick={() =>
							add({ id, title, price, thumbnail, discountPercentage })
						}
					>
						<CgShoppingCart className="product-page--cart-icon" />
						Add To Cart
					</button>
					<Link to={`${id}`} style={{ textDecoration: 'none' }}>
						<button className="product-btn">Details...</button>
					</Link>
				</div>
			) : null}
		</div>
	);
}
