import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useTransition, config } from 'react-spring'

const WordsWrapper = styled.div`
    width: 110px;
    font-weight: 600;
    font-style: italic;
    color: var(--text-highlight);
    text-align: center;
    display: inline-block;
    position: relative;
    transition: color 0.2s ease-out;

    & span {
        text-align: center;
        width: 100%;
    }

    @media only screen and (max-width: 77.5em ) { // $bp-largest
        width: 105px;
    }

    @media only screen and (max-width: 62.5em ) { // $bp-large
        width: 100px;
    }

    @media only screen and (max-width: 50em ) { // $bp-medium
        width: 95px;
    }

    @media only screen and (max-width: 37.5em ) { // $bp-small
        width: 90px;
    }

`;

const Words = [
    { id: 0, text: 'self-taught' },
    { id: 1, text: 'committed' },
    { id: 2, text: 'passionate' }
]

const WordsFading = () => {

    // Index State
    const [ index, setIndex ] = useState(0);

    // Transition function
    const wordsTransition = useTransition( Words[index], span => span.id, {
        config: config.stiff,
        delay: 450,
        duration: 100,
        from: {
            opacity: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'translateY(10px)'
        },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-10px)' }
    } )

    // componentDidMount 
    useEffect(
        () => void setInterval( () => setIndex( current => ( current + 1 ) % Words.length ), 2500 )
    , [])

    return (
        <WordsWrapper>
            <i style={{ visibility: 'hidden' }}>self-taught</i>
            { wordsTransition.map( ({ item, props, key }) => (
                <animated.span key={key} style={props}>
                    { item.text }
                </animated.span>
            ) ) }
        </WordsWrapper>
    );
}

export default WordsFading;