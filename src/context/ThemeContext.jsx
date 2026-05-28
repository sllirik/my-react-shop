import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState('light');
	
	const toggleTheme = () => {
		setTheme(prev => prev === 'light' ? 'dark' : 'light');
	}

	const contextValue = { theme, toggleTheme }

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	)
}

// Хул переключения темы
export const useTheme = () => {
	const context = useContext(ThemeContext);

	if(!context) {
		throw new Error("Context должен быть внутри Provider");
	}
	return context;
}
