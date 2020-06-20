import React from 'react';

import Navbar from './components/Navbar.component';
import BookList from './components/BookList.component';

import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<BookList />
		</div>
	);
}

export default App;
