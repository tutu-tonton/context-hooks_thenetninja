import React from 'react';

import Navbar from './components/Navbar.component';
import BookList from './components/BookList.component';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle.component';

import './App.css';
import BookContextProvider from './contexts/BookContext';

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
					<BookContextProvider>
						<BookList />
					</BookContextProvider>
					<ThemeToggle />
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
