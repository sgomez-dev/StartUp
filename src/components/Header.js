import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <img src="../img/worker.png" alt="worker" className="profile-picture"/>
                    <h1>Santiago Gómez de la Torre Romero</h1>
                    <p>Web Developer</p>
            </div>
        </header>
    );
}

export default Header;
