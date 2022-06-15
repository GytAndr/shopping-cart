import { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
const Shop = () => {
	const [product, setProducts] = useState();
	const [isLoading, setIsLoading] = useState(true);

	async function FechProductData() {
		const response = await fetch('https://dummyjson.com/products/1');
		const resJson = await response.json();
		setProducts(resJson);
		setIsLoading(false);
	}
	useEffect(() => {
		FechProductData();
	}, []);
	return (
		<div>
			<h3>Shop page</h3>
			{isLoading ? <p>Loading...</p> : <ProductCard data={product} />}
		</div>
	);
};
export default Shop;
