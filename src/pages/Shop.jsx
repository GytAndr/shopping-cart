import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import '../Styles/Shop.css';
const Shop = ({ add }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const categories = [...new Set(products.map((product) => product.category))];
	const filterItem = (curcat) => {
		const newItem = products.filter((newVal) => {
			return newVal.category === curcat;
		});
		setProducts(newItem);
	};
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

	//if resposne was not received, show loading...
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="shop-container">
			<div className="shop-categories">
				<div className="category" onClick={() => FechProductList()}>
					All categories
				</div>
				{categories.map((category, index) => {
					return (
						<div
							key={index}
							className="category"
							onClick={() => filterItem(category)}
						>
							{category}
						</div>
					);
				})}
			</div>
			<div className="products-wrapper">
				{products.map((product) => {
					return <ProductCard data={product} key={product.id} add={add} />;
				})}
			</div>
		</div>
	);
};
export default Shop;
