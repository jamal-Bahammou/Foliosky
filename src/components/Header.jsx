import React from 'react'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring';
import { Link } from 'react-scroll'

const StyledHeader = styled(animated.header)`
    display: flex;
    align-items: center;

    height: 6.7rem;
    width: 100%;
    max-width: 100vw;
    background: var(--navbar);
    box-shadow: 0 0.5rem 2rem var(--shadow-color);
    position: fixed;
    z-index: 100;
`;

const StyledLink = styled(Link)`
    font-size: 1.1rem;
    font-weight: 700;
    padding: 1rem 2rem;
    color: var(--color-text);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    @media only screen and (max-width: 31.25em ) {
        font-size: 1rem;
        padding: .5rem 1rem;
    }

    &:hover {
        color: var(--color-primary-light);
    }
`;

const Header = ({ setShowScrollTop }) => {

    // Animation
    const HeaderSpring = useSpring({
        config: config.wobbly,
        opacity: 1,
        height: '6.7rem',
        from: { opacity: 0, height: '0rem' }
    })

    // Background animation
    const WrapperSpring = useSpring({
        delay: 400,
        opacity: 1,
        from: { opacity: 0 }
    })

    return (
        <StyledHeader style={HeaderSpring}>
            <animated.div style={WrapperSpring} className="header__wrapper">
                <Link
                    to="home" spy={true} smooth={true}
                    onSetActive={() => setShowScrollTop(false)}
                    onSetInactive={() => setShowScrollTop(true)}
                    className="header__logo"
                >
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
            </animated.div>
        </StyledHeader>
    );
}

export default Header;