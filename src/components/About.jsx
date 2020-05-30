import React from 'react'

const About = () => {
    return (
        <section className="section">
            <div className="section__header">
                <h1 className="title__primary">About me</h1>
                <h2 className="title__secondary">If you're wendering who I am...</h2>
            </div>
            <div className="section__content">
                <p className="paragraph">I'm Jamal Bahammou, a 22 years old self-taught Front-end developer, from Morocco.</p>
                <p className="paragraph">In January 2019 I decided it was time for a change, so I started to wake up at 6am to study javascript before going into work. I quickly started to love Javascript.</p>
                <p className="paragraph">During this time, I took online courses like 
                Advanced Css and Sass: Flexbox, Grid, Animations and More! - 
                Modern Javascript From The Beginning - 
                Javascript30 - 
                ES6 Javascript: The Complete Developer's Guide - 
                Modern React with Redux -
                Build an app with React, Redux and Firestore from scratch,
                and also watched countless youtube videos about Javascript.</p>
                <p className="paragraph">Because we know the best way to learn is to practice, I also did a bunch of personal projects with the knowledge I gathered from the courses, you can check them on my portfolio.</p>
                <p className="paragraph">I always want to learn more, do more, and be more. I’m also a firm believer that we should never settle.</p>
                <p className="paragraph">I’m hard working, super curious, passionate, committed, and also a fast learner!</p>
                <h2 className="tittle__secondary">My current stack of language/technologies is:</h2>
                <div className="language">
                    <p className="language__detail">HTML5 - CSS3 - JAVASCRIPT - SASS - WEBPACK - REACTJS - REDUX - STYLED COMPONENTS - CSS MODULES - FIREBASE - BABEL</p>
                    <p className="language__tedail">PYTHON - ANACONDA - TENSORFLOW - KERAS - MACHINGE LEARNING - DEEP LEARNING - OPENCV - COMPUTER VISION</p>
                </div>
            </div>
        </section>
    );
}

export default About;