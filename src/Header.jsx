import React from "react";

function Header() {
    return (
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/en/1/11/National_Baseball_Hall_of_Fame_and_Museum_logo.svg" alt="National Baseball Hall of Fame logo" />
            <nav>
                <ul id="menuList">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header