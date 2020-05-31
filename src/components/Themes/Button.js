import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
    font-size: .95rem;
    font-weight: 700;
    font-family: inherit;
    color: ${({ solid }) => solid ? 'var(--color-white)' : 'var(--text-highlight)' };
    background: ${({ solid }) => solid ? 'var(--color-primary)' : 'transparent' };
    border: ${({ solid }) => solid ? '1px transparent' : '1px solid' };
    border-radius: 10rem;
    padding: .9rem 2.4rem;

    display: flex;
    align-items: center;

    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1.5px;
    cursor: pointer;
    box-shadow: ${({ solid }) => solid ? '0px 8px 15px var(--shadow-color)' : 'none' };
    transition: all .2s ease-out;

    &:hover {
        transform: translateY(-3px);
        box-shadow: ${({ solid }) => solid ? '0px 15px 20px var(--shadow-btn)' : 'none'};
    }

    &:active {
        transform: translateY(1px);
        box-shadow: ${({ solid }) => solid ? '0 3px 10px var(--shadow-btn)' : 'none'};
    }
`;

export const Button = ({ children, solid, ...rest }) => {
    return (
        <StyledButton solid={solid} {...rest}>
            { children }
        </StyledButton>
    );
}

export default Button;