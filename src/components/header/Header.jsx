import { SiYourtraveldottv } from 'react-icons/si';
import { useTheme } from '../theme-provider/ThemeProvider';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {
	const { theme, onToggleTheme } = useTheme();
	return (
		<header>
			<div className='controlls'>
				<button className='btn primary' onClick={onToggleTheme}>
					Toggle Theme {theme}
				</button>

				<nav className='app-navigation'>
					<NavLink to='/tours'>Tours</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/contact-us'>Contact-us</NavLink>
				</nav>
				<SiYourtraveldottv />
			</div>

			{props.lastUpdatedDate && (
				<p>Last updated:{props.lastUpdatedDate.format('HH:mm:ss MMMM,DD')}</p>
			)}
		</header>
	);
};

export default Header;