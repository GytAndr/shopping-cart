import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import '../Styles/ProductPage.css';

function Product({ add }) {
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

	//image slider logics
	const [currentImg, setCurrentImg] = useState(0);
	const nextSlide = () => {
		setCurrentImg(
			currentImg === product.images.length - 1 ? 0 : currentImg + 1
		);
	};
	const prevSlide = () => {
		setCurrentImg(
			currentImg === 0 ? product.images.length - 1 : currentImg - 1
		);
	};

	//render loading while data is not received
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="product-page-container">
			<div className="image-slider">
				<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
				<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
				{product.images.map((image, index) => {
					return (
						<div
							className={index === currentImg ? 'slide active' : 'slide'}
							key={index}
						>
							{index === currentImg && (
								<img
									key={index}
									src={image}
									alt=""
									className="product-page--image"
								/>
							)}
						</div>
					);
				})}
			</div>
			<div className="product-page-info">
				<h2>{product.title}</h2>
				<div className="product-page-pricebox">
					<p className="product-page-original-price">{product.price} €</p>
					<p className="product-page--discounted">
						{(
							product.price -
							(product.price * product.discountPercentage) / 100
						).toFixed(2)}
						€
					</p>
				</div>
				<p>{product.description}</p>
				<button className="product-page--btn" onClick={() => add(product)}>
					<CgShoppingCart className="product-page--cart-icon" />
					Add To Cart
				</button>
				<button
					onClick={() => {
						navigate(-1);
					}}
					className="product-page--btn"
				>
					Go Back
				</button>
			</div>
		</div>
	);
}

export default Product;
