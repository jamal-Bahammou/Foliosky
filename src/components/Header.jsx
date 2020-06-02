import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledLink = styled(Link)`
    font-size: 1.1rem;
    font-weight: 700;
    padding: 1rem 2rem;
    color: var(--color-text);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: var(--color-primary-light);
    }
`;

const Header = ({ setShowScrollTop }) => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to="home" spy={true} smooth={true}
                    onSetActive={() => setShowScrollTop(false)}
                    onSetInactive={() => setShowScrollTop(true)}
                className="header__logo">
                    <img src="./logo/foliosky.svg" alt="portfolio logo" className="header__image" />
                    <div className="header__text">
                        <p className="header__text-primary">Bahammou</p>
                        <p className="header__text-secondary">Web developer</p>
                    </div>
                </Link>
                <nav className="navigator">
                    <StyledLink to="about" offset={-110} spy={true} smooth={true} >About me</StyledLink>
                    <StyledLink to="portfolio" offset={-110} spy={true} smooth={true} >Portfolio</StyledLink>
                    <StyledLink to="contact" spy={true} smooth={true} >Contact</StyledLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;