import { Link } from 'react-router-dom';
import background from '../images/pexels-karolina-grabowska-5632397.jpg';
export default function Home() {
	return (
		<div
			className="row"
			style={{
				backgroundImage: `url(${background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100vw',
				height: '100vh',
			}}
		>
			<div className=" col-8 col-md-6 d-flex flex-column mt-5">
				<p className="h1 text-center">SUPER SALE</p>
				<p className="h1 text-center">OVER 100 PRODUCTS ON SALE</p>
				<Link to="shop" className="text-center mt-5">
					<button className="btn btn-secondary w-25">Shop Now!</button>
				</Link>
			</div>
		</div>
	);
}
