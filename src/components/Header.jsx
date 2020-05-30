import React from 'react'

const Header = () => {
    return (
        <header class="header">
            <div class="header__wrapper">
                <img src="./img/foliosky.svg" alt="portfolio logo" class="header__logo" />
                <div className="header__text">
                    <p className="header__text-primary">Bahammou</p>
                    <p className="header__text-secondary">Web developer</p>
                </div>
                <nav class="navigator">
                    <a href="/" class="navigator__link">About me</a>
                    <a href="/" class="navigator__link">Portfolio</a>
                    <a href="/" class="navigator__link">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;