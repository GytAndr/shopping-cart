import React from 'react';
import '../src/Styles/index.css';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
