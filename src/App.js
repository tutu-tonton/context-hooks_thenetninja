import React from 'react';

import Navbar from './components/Navbar.component';
import BookList from './components/BookList.component';

import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle.component';

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<Navbar />
				<BookList />
				<ThemeToggle />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
