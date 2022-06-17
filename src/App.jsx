import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
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
	return (
		<BrowserRouter>
			<Navbar cart={cartProducts.length} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop add={addToCart} />} />
				<Route path="/shop/:id" element={<ProductPage add={addToCart} />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
