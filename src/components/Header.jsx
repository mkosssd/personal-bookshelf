import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'
import Input from './input';
const Header = () => {
	const location = useLocation().pathname;
	return (
		<header className='header'>
			<div className="container-mid">
				<div className="flexBox">
					<NavLink to='/'><h1>Personal Bookshelf</h1></NavLink>
					<div className='flexBox'>

						{location !== '/shelf' && <NavLink className='navBtn' to='/shelf'>My BookShelf</NavLink>}
						{location !== '/' && <Input/>}
					</div>
				</div>

			</div>
		</header>
	);
};
export default Header;
