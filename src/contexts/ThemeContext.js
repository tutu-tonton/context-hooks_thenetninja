import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const initialState = {
	isLightTheme: true,
	light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
	dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

const ThemeContextProvider = (props) => {
	const [themeState, setThemeState] = useState(initialState);
	// console.log(themeState);

	return <ThemeContext.Provider value={{ themeState }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;

// class ThemeContextProvider extends React.Component {
// 	state = {
// 		isLightTheme: true,
// 		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
// 		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
// 	};
// 	render() {
// 		return <ThemeContext.Provider value={{ ...this.state }}>{this.props.children}</ThemeContext.Provider>;
// 	}
// }

// export default ThemeContextProvider;
