import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Title = styled(animated.h1)`
    font-size: 6.5rem;
    font-weight: 200;
    line-height: 1.3;
    color: #333;
    margin-bottom: 2rem;

    span {
        font-weight: 600;
        color: var(--color-primary-light);
    }
`;

const SubTitle = styled(animated.h2)`
    font-size: 1.7rem;
    font-weight: 400;
    color: #575757;

    span {
        font-weight: 600;
        color: #333;
        text-align: center;
        font-style: italic;
    }
`;

const App = () => {

    // Title animation
    const TitleSpring = useSpring({
        config: config.wobbly,
        delay: 200,
        opacity: 1,
        transform: 'translateX(0px)',
        from: { opacity: 0, transform: 'translateX(40px)' },
    });

    // Sub title animation
    const SubTitleSpring = useSpring({
        config: config.stiff,
        delay: 300,
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(40px' }
    })

    return (
        <div class="container">

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

            <main className="main">
                <div class="section">
                    <section class="section__wrapper">
                        <img src="./img//foliosky_background.png" alt="background logo" class="section__background" />
                        
                        <div className="title">
                            <div class="title__wrapper">
                                <Title style={TitleSpring} >Hello <span role="img" aria-label="Cool hand emoji">&#9996;</span>,<br />I'm <span>Bahammou</span></Title>
                                <SubTitle style={SubTitleSpring}>A <span>self-taught</span> Front-end developer</SubTitle>
                            </div>
                            <button class="button">About me</button>
                        </div>
                    </section>
                    <FontAwesomeIcon icon={faChevronDown} class="icon" />
                </div>
            </main>

        </div>
    );
}

export default App;