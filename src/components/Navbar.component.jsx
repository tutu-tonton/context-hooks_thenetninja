import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
	// static contextType = ThemeContext;
	render() {
		return (
			<ThemeContext.Consumer>
				{(context) => {
					const { isLightTheme, light, dark } = context;
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
				}}
			</ThemeContext.Consumer>
		);
	}
}

export default Navbar;

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

// export default Navbar;
