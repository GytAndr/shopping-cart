import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product() {
	//takes id from url and later used to fetch data
	let { id } = useParams();
	let navigate = useNavigate();
	//product state
	const [product, setProduct] = useState();
	//Loading state
	const [isLoading, setIsLoading] = useState(true);
	//fetch single product data on first render
	useEffect(() => {
		async function FetchProduct() {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			const json = await response.json();
			//put response into state
			setProduct(json);
			//switch loading state
			setIsLoading(false);
		}
		FetchProduct();
	}, []);
	//render loading while data is not received
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<p>id: {product.id}</p>
			<p>title: {product.title}</p>
			<p>description: {product.description}</p>
			<p>price: {product.price} €</p>
			{product.images.map((image) => {
				return <img src={image} />;
			})}
			<button
				onClick={() => {
					navigate('/shop');
				}}
			>
				Back to Shop
			</button>
		</div>
	);
}

export default Product;
