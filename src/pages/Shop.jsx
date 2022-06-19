import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import '../Styles/Shop.css';
const Shop = ({ add }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const categories = [
		'smartphones',
		'laptops',
		'fragrances',
		'skincare',
		'groceries',
		'home-decoration',
		'furniture',
		'tops',
		'womens-dresses',
		'womens-shoes',
		'mens-shirts',
		'mens-shoes',
		'mens-watches',
		'womens-watches',
		'womens-bags',
		'womens-jewellery',
		'sunglasses',
		'automotive',
		'motorcycle',
		'lighting',
	];

	useEffect(() => {
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
		FechProductList();
	}, []);
	//if resposne was not received, show loading...
	if (isLoading) {
		return <p>Loading...</p>;
	}
	//else map trough array and display products.
	return (
		<div className="shop-container">
			<div className="shop-categories">
				{categories.map((category, index) => {
					return (
						<div key={index} className="category">
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
