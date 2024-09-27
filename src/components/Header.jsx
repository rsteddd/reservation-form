import React from 'react';
import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <h1>Little Lemon</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
