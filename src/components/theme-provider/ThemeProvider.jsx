import { createContext, useContext, useState } from 'react';
import { DARK, LIGHT } from '../../utils/constantes';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(LIGHT);

	const toggleTheme = () => {
		if (theme === LIGHT) {
			setTheme(DARK);
		} else {
			setTheme(LIGHT);
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, onToggleTheme: toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;