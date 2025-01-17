import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<Link to={''}>Login</Link>
			<Link to={'register'}>Register</Link>
		</div>
	);
};

export default Navbar;
