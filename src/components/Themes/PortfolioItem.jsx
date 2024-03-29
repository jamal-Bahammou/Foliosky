import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from './Button'

const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row' };
    justify-content: space-between;

    @media only screen and (max-width: 62.5em ) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

const PortfolioItem = ({ reverse, title, text, stack, image, link, github }) => {
    return (
        <div className="portfolio__item">
            <h1 className="portfolio__header"><span className="span__primary">{ title }</span></h1>
            <PortfolioWrapper reverse={reverse}>
                <div className="portfolio__description">
                    <p className="portfolio__text">{ text }</p>
                    <p className="portfolio__stack">{ stack }</p>
                    <div className="portfolio__button">
                        <Button solid href={link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLink} className="button__icon" />
                            Visit
                        </Button>
                        <Button href={github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="button__icon" />
                            Source
                        </Button>
                    </div>
                </div>
                <img src={image} alt="Foliosky site" className="portfolio__image"/>
            </PortfolioWrapper>
        </div>
    );
}

export default PortfolioItem;