import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import { Link, Element } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import WordsFading from './Themes/WordsFading'
import ScrollTop from './Themes/ScrollTop'

const StyledBackground = styled.img`
    position: absolute;
    width: 40%;
    top: 1%;
    right: -4%;
    opacity: .6;
    transform: rotate(-22deg);
    background-color: transparent;
    overflow: hidden;
    user-select: none;
    object-fit: cover;
    object-position: center center;
    z-index: -100;

    @media only screen and (max-width: 62.5em ) { // $bp-large
        width: 45%;
        top: 2%;
        right: -7%;
    }

    @media only screen and (max-width: 50em ) { // $bp-medium
        width: 55%;
        right: -10%;
    }

    @media only screen and (max-width: 37.5em ) { // $bp-small
        width: 70%;
        top: 2%;
    }

`;

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

    @media only screen and (max-width: 62.5em ) { // $bp-large
        font-size: 6rem;
    }

    @media only screen and (max-width: 50em ) { // $bp-medium
        font-size: 5rem;
    }

    @media only screen and (max-width: 37.5em ) { // $bp-small
        font-size: 4.5rem;
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

    @media only screen and (max-width: 37.5em ) {
        margin-bottom: 0;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    height: 1.9rem;
    color: var(--color-primary-light);
    cursor: pointer;
`;

const Home = () => {

    // Background animation
    const BackgroundSpring = useSpring({
        delay: 200,
        opacity: 1,
        from: { opacity: 0 }
    })

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
        <Element className="section" name="home">
            <div className="section__wrapper">
                <animated.div style={BackgroundSpring}>
                    <StyledBackground src="./logo/foliosky_background.png" alt="background logo" />
                </animated.div>
                
                <div className="title">
                    <div className="title__wrapper">
                        <Title style={TitleSpring} >Hello <span role="img" aria-label="Cool hand emoji">✌🏽</span>,<br />I'm <span>Bahammou</span></Title>
                        <SubTitle style={SubTitleSpring}>A <WordsFading /> Front-end developer</SubTitle>
                    </div>
                    <Link to="about" offset={-110} spy={true} smooth={true} >
                        <Button style={ButtonSpring} >About me</Button>
                    </Link>
                </div>
            </div>
            <IconWrapper style={IconSpring}>
                <Link to="about" offset={-110} spy={true} smooth={true} >
                    <Icon icon={faChevronDown} />
                </Link>
            </IconWrapper>

            <ScrollTop />
        </Element>
    );
}

export default Home;