import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll';
import { animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StyledWrapper = styled(animated.div)`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 3.5rem;
    height: 3.5rem;
    background-color: var(--color-primary);
    box-shadow: 0px 8px 15px var(--shadow-color);
    border-radius: 50%;
    margin: 0 1.5rem 3rem 0;
    opacity: ${({ show }) => show ? 1 : 0 };
    // display: ${({ show }) => show ? 'flex' : 'none' };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
    transition: transform .2s, opacity .6s ease-out;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(1px);
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 1.3rem;
    color: var(--color-white);
`;

const ScrollTop = ({ show }) => {
    return (
        <StyledWrapper show={show} onClick={ () => scroll.scrollToTop() } >
            <StyledIcon icon={faChevronUp} />
        </StyledWrapper>
    );
}

export default ScrollTop;