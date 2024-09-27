import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
