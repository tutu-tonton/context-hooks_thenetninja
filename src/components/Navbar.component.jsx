import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
	const { themeState } = useContext(ThemeContext);
	// console.log(useContext(ThemeContext));
	// console.log(themeState);
	const { isLightTheme, light, dark } = themeState;
	// console.log(light);
	const theme = isLightTheme ? light : dark;
	return (
		<nav style={{ background: theme.ui, color: theme.syntax }}>
			<h1>Context App</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

//========================================
//  Consumer使うパターン
//  複数のcontext使える
//========================================
// const Navbar = () => {
// 	return (
// 		<ThemeContext.Consumer>
// 			{(context) => {
// 				const { isLightTheme, light, dark } = context;
// 				const theme = isLightTheme ? light : dark;
// 				return (
// 					<nav style={{ background: theme.ui, color: theme.syntax }}>
// 						<h1>Context App</h1>
// 						<ul>
// 							<li>Home</li>
// 							<li>About</li>
// 							<li>Contact</li>
// 						</ul>
// 					</nav>
// 				);
// 			}}
// 		</ThemeContext.Consumer>
// 	);
// };

export default Navbar;
