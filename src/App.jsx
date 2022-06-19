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
		const itemExist = cartProducts.find((x) => x.id === item.id);
		if (itemExist) {
			setCartProducts(
				cartProducts.map((x) =>
					x.id === item.id ? { ...itemExist, qty: itemExist.qty + 1 } : x
				)
			);
		} else {
			setCartProducts([...cartProducts, { ...item, qty: 1 }]);
		}
	}
	function deleteCartItem(item) {
		const itemExist = cartProducts.find((x) => x.id === item.id);
		if (itemExist.qty === 1) {
			setCartProducts(cartProducts.filter((x) => x.id !== item.id));
		} else {
			setCartProducts(
				cartProducts.map((x) =>
					x.id === item.id ? { ...itemExist, qty: itemExist.qty - 1 } : x
				)
			);
		}
	}

	return (
		<BrowserRouter>
			<Navbar cartProducts={cartProducts} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop add={addToCart} />} />
				<Route path="/shop/:id" element={<ProductPage add={addToCart} />} />
				<Route
					path="/cart"
					element={
						<Cart
							cartProducts={cartProducts}
							deleteCartItem={deleteCartItem}
							addToCart={addToCart}
						/>
					}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
