import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Fitness Tracker</h1>
            <nav>
                <a href="#dashboard">Dashboard</a>
                <a href="#activities">Activities</a>
                <a href="#goals">Goals</a>
            </nav>
        </header>
    );
}

export default Header;
