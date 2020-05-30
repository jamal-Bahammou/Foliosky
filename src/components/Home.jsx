import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Title = styled(animated.h1)`
    font-size: 6.5rem;
    font-weight: 200;
    line-height: 1.3;
    color: var(--text-highlight);
    margin-bottom: 2rem;

    span {
        font-weight: 600;
        color: var(--color-primary-light);
    }
`;

const SubTitle = styled(animated.h2)`
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--text);

    span {
        font-weight: 600;
        color: var(--text-highlight);
        text-align: center;
        font-style: italic;
    }
`;

const Button = styled(animated.button)`
    font-size: 1.1rem;
    font-weight: 700;
    font-family: inherit;
    letter-spacing: 1.5px;
    padding: 1.5rem 4rem;
    color: var(--color-white);
    background-color: var(--color-primary);
    border: 1px transparent;
    border-radius: 10rem;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    box-shadow: 0px 8px 15px var(--shadow-color);
    transition: all .2s ease-out;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 15px 20px var(--shadow-btn);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 3px 10px var(--shadow-btn);
    }
`;

const IconWrapper = styled(animated.div)`
    font-size: 2rem;
    margin-bottom: 3rem;
`;

const Icon = styled(FontAwesomeIcon)`
    height: 1.9rem;
    color: var(--color-primary-light);
    cursor: pointer;
`;

const Home = () => {

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

    // Button animation
    const ButtonSpring = useSpring({
        config: config.stiff,
        delay: 600,
        opacity: 1,
        from: { opacity: 0 }
    });

    // Icon animation
    const IconSpring = useSpring({
        config: config.wobbly,
        delay: 500,
        opacity: 1,
        transform: 'translate(-50%, 0px)',
        from: { opacity: 0, transform: 'translate(-50%, 40px)' }
    });

    return (
        <div class="section">
            <section class="section__wrapper">
                <img src="./img//foliosky_background.png" alt="background logo" class="section__background" />
                
                <div className="title">
                    <div class="title__wrapper">
                        <Title style={TitleSpring} >Hello <span role="img" aria-label="Cool hand emoji">&#9996;</span>,<br />I'm <span>Bahammou</span></Title>
                        <SubTitle style={SubTitleSpring}>A <span>self-taught</span> Front-end developer</SubTitle>
                    </div>
                    <Button style={ButtonSpring} >About me</Button>
                </div>
            </section>
            <IconWrapper style={IconSpring}>
                <Icon icon={faChevronDown} />
            </IconWrapper>
        </div>
    );
}

export default Home;