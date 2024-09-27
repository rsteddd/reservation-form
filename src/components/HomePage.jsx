import React from 'react';
import ReservationForm from './ReservationForm';
import "../styles/HomePage.css"

function HomePage() {
    return (
        <main className="home-page">
            <h2>Reserve Your Table</h2>
            <ReservationForm />
        </main>
    );
}

export default HomePage;
