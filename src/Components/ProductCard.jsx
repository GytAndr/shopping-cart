import { useState } from 'react';
import '../Styles/ProductCard.css';
export default function ProductCard({
	data: { title, price, thumbnail, discountPercentage },
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
				<img
					className="product-thumbnail"
					src={thumbnail}
					alt="thumbnail"
					title={title}
				/>
				<div className="product-discount">-{discountPercentage}%</div>
			</div>
			<p className="product-title">{title}</p>
			<div className="product-prices-box">
				<p className="product-price">{price} €</p>

				<p className="product-final-price">{discountedPrice.toFixed(2)} €</p>
			</div>
			{hovered ? (
				<div className="product-add">
					<button className="add-btn">Į krepšelį</button>
				</div>
			) : null}
		</div>
	);
}
