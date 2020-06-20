import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
	state = {
		isLightTheme: true,
		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
	};
	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};
	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;

// class ThemeContextProvider extends React.Component {
// 	state = {
// 		isLightTheme: true,
// 		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
// 		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
// 	};
// const toggleTheme = () => {
// 	this.setState({ isLightTheme: !isLightTheme });
// };
// 	render() {
// 		return <ThemeContext.Provider value={{ ...this.state }}>{this.props.children}</ThemeContext.Provider>;
// 	}
// }

// export default ThemeContextProvider;
