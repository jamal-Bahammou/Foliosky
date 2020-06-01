import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled.a`
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 1.5rem;
    border: 2px solid var(--color-primary-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2.2rem;
    color: var(--text-highlight);

    ${StyledLink}:hover & {
        color: var(--color-white);
    }
`;

const SocialButton = ({ label, href, icon }) => {
    return (
        <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ label }
            href={ href }
        >
            <StyledIcon icon={ icon } />
        </StyledLink>
    );
}

export default SocialButton;