import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
const Shop = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function FechProductList() {
			const response = await fetch(
				'https://dummyjson.com/products?limit=10&skip=0'
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
		<div>
			<h3>Shop page</h3>
			{products.map((product) => {
				return <ProductCard data={product} key={product.id} />;
			})}
			;
		</div>
	);
};
export default Shop;
