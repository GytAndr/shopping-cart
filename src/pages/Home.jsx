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
			<h3>UP TO 17% OFF</h3>
			<h3>FOR A WEEK</h3>
			<div className="home-images">
				{smartphones.map((product, index) => {
					return <img key={index} src={product.thumbnail} alt="" />;
				})}
			</div>
			<div className="home-images">
				{laptops.map((product, index) => {
					return <img key={index} src={product.thumbnail} alt="" />;
				})}
			</div>
			<div className="home-images">
				{mensWatches.map((product, index) => {
					return <img key={index} src={product.thumbnail} alt="" />;
				})}
			</div>
			<div className="home-images">
				{sunglasses.map((product, index) => {
					return <img key={index} src={product.thumbnail} alt="" />;
				})}
			</div>
		</div>
	);
}
