import { SiYourtraveldottv } from 'react-icons/si';
import { useTheme } from '../theme-provider/ThemeProvider';

import './Header.scss';

const Header = (props) => {
	const { theme, onToggleTheme } = useTheme();
	// console.log(theme);
	return (
		<header>
			<div className='controlls'>
				<button className='btn primary' onClick={onToggleTheme}>
					Toggle Theme {theme}
				</button>

				<SiYourtraveldottv />
			</div>
			{props.lastUpdatedDate && (
				<p>Last updated:{props.lastUpdatedDate.format('HH:mm:ss MMMM,DD')}</p>
			)}
		</header>
	);
};

export default Header;