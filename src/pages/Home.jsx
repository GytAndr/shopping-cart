import { useState, useEffect } from 'react';
import '../Styles/Home.css';
export default function Home() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const smartphones = products.filter((product) => {
		return product.category === 'smartphones';
	});
	const laptops = products.filter((product) => {
		return product.category === 'laptops';
	});
	const mensWatches = products.filter((product) => {
		return product.category === 'mens-watches';
	});
	const sunglasses = products.filter((product) => {
		return product.category === 'sunglasses';
	});
	async function FechProductList() {
		const response = await fetch(
			'https://dummyjson.com/products?limit=100&skip=0'
		);
		const json = await response.json();
		//put response into state
		setProducts(json.products);
		//switch loading state
		setIsLoading(false);
	}
	useEffect(() => {
		FechProductList();
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="home">
			<div className="home-slider-track">
				{smartphones.map((product, index) => {
					return (
						<div className="home-slide" key={index}>
							<img src={product.thumbnail} alt="" height="250" width="250" />
						</div>
					);
				})}
			</div>
			<div className="home-slider-track">
				{laptops.map((product, index) => {
					return (
						<div className="home-slide" key={index}>
							<img src={product.thumbnail} alt="" height="250" width="250" />
						</div>
					);
				})}
			</div>
			<div className="home-slider-track">
				{mensWatches.map((product, index) => {
					return (
						<div className="home-slide" key={index}>
							<img src={product.thumbnail} alt="" height="250" width="250" />
						</div>
					);
				})}
			</div>
			<div className="home-slider-track">
				{sunglasses.map((product, index) => {
					return (
						<div className="home-slide" key={index}>
							<img src={product.thumbnail} alt="" height="250" width="250" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
