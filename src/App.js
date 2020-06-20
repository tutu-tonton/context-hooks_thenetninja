import React from 'react';

import Navbar from './components/Navbar.component';
import BookList from './components/BookList.component';

import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<Navbar />
				<BookList />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
