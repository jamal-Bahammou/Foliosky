import React from 'react'
import { Link, Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFile } from '@fortawesome/free-solid-svg-icons';

import Button from './Themes/Button'
import CVBahammouFR from '../static/CV-Bahammou-FR.pdf'


const About = () => {
    return (
        <Element className="section" name="about">
            <div className="section__header">
                <h1 className="section__primary">About me</h1>
                <h2 className="section__secondary">If you're <span className='span__secondary'>wondering</span> who <span className='span__secondary'>I am...</span></h2>
            </div>
            <div className="section__content">
                <p className="paragraph">I'm <span className='span__primary'>Jamal Bahammou</span>, a 22 years old self-taught <span className='span__primary'>Front-end</span> developer, from <span className="primary">Morocco</span>.</p>
                <p className="paragraph">After my first year in university <span className="span__secondary">¨Mathematical and computer science¨</span>, I started to love <span className="span__secondary">solving algorithm problems</span>, but I only developed websites with HTML & CSS… So I <span className="span__secondary">wasn’t learning and improving</span> quickly as I want, I <span className="span__secondary">felt stuck</span>.</p>
                <p className="paragraph">In January 2019 I decided it was <span className='span__secondary'>time for a change</span>, so I started to wake up at 6am to <span className="span__secondary">study javascript before going into university</span>. I quickly started to <span className="span__primary">love Javascript</span>.</p>
                <p className="paragraph">During this time, I took online courses like {' '}
                <a className="cours__link" href='https://www.udemy.com/course/advanced-css-and-sass/' target='_blank' rel="noopener noreferrer">Advanced Css and Sass: Flexbox, Grid, Animations and More!</a>,{' '}
                <a className="cours__link" href='https://www.udemy.com/course/modern-javascript-from-the-beginning/' target='_blank' rel="noopener noreferrer">Modern Javascript From The Beginning</a>,{' '}
                <a className="cours__link" href='https://javascript30.com/' target='_blank' rel="noopener noreferrer">Javascript30</a>,{' '}
                <a className="cours__link" href='https://www.udemy.com/course/javascript-es6-tutorial/' target='_blank' rel="noopener noreferrer">ES6 Javascript: The Complete Developer's Guide</a>,{' '}
                <a className="cours__link" href='https://www.udemy.com/course/react-redux/' target='_blank' rel="noopener noreferrer">Modern React with Redux</a>,{' '}
                <a className="cours__link" href='https://www.udemy.com/course/build-an-app-with-react-redux-and-firestore-from-scratch/' target='_blank' rel="noopener noreferrer">Build an app with React, Redux and Firestore from scratch</a>,{' '}
                and also watched countless youtube videos about Javascript.</p>{' '}
                <p className="paragraph">Because we know the best way to learn is to <span className="span__secondary">practice</span>, I also did a bunch of <span className="span__secondary">personal projects</span> with the knowledge I gathered from the courses, you can check them on my <Link className="cours__link cours__link-portfolio" to="portfolio" offset={-110} spy={true} smooth={true} >portfolio</Link>.</p>
                <p className="paragraph">I always want to <span className="span__secondary">learn more</span>, <span className="span__secondary">do more</span>, and <span className="span__secondary">be more</span>. I’m also a firm believer that we should <span className="span__primary">never settle</span>.</p>
                <p className="paragraph">I’m <span className="span__secondary">hard working</span>, <span className="span__secondary">super curious</span>, <span className="span__secondary">passionate</span>, <span className="span__secondary">committed</span>, and also a <span className="span__secondary">fast learner</span>!</p>
                <h2 className="section__tertiary">My current <span className="span__primary">stack</span> of <span className="span__primary">language/technologies</span> is:</h2>
                <div className="language">
                    <p className="language__detail">HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - REDUX - STYLED COMPONENTS - CSS MODULES - FIREBASE - BABEL</p>
                    <p className="language__detail">PYTHON - ANACONDA - TENSORFLOW - KERAS - MACHINGE LEARNING - DEEP LEARNING - OPENCV - COMPUTER VISION</p>
                </div>
                <div className="button__wrapper">
                    <Button solid href='#' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPaperPlane} className="button__icon" />
                        Resume
                    </Button>
                    <Button href={CVBahammouFR} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFile} className="button__icon" />
                        Curriculum
                    </Button>
                </div>
            </div>
        </Element>
    );
}

export default About;