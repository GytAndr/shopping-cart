import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import ErrorPage from './pages/ErrorPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [cartProducts, setCartProducts] = useState([]);
	function addToCart(item) {
		setCartProducts((prevProducts) => {
			return [...prevProducts, item];
		});
	}
	function deleteCartItem(itemIndex) {
		let itemToDelete = cartProducts.splice(itemIndex, 1);
		let arrayWithoutItem = cartProducts.filter(
			(product) => product !== itemToDelete
		);
		setCartProducts(arrayWithoutItem);
	}
	return (
		<BrowserRouter>
			<Navbar cart={cartProducts.length} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop add={addToCart} />} />
				<Route path="/shop/:id" element={<ProductPage add={addToCart} />} />
				<Route
					path="/cart"
					element={
						<Cart cartProducts={cartProducts} deleteCartItem={deleteCartItem} />
					}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
