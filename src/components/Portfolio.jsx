import React from 'react'
import { Element } from 'react-scroll'

import PortfolioItem from './Themes/PortfolioItem'

const portfolio = () => {
    return (
        <Element className="section" name="portfolio">
            <div className="section__header">
                <h1 className="section__primary">Portfolio</h1>
                <h2 className="section__secondary">Check <span className='span__secondary'>what</span> I've been doing <span className='span__secondary'>lately</span></h2>
            </div>
            <div className="portfolio__content">
                <PortfolioItem
                    reverse
                    title="Foliosky | Bahammou Portfolio"
                    text="This very website you're now watching. I wanted something to look good and animated, so I create this website to wrip all of my project, and to be super easy for me to keep adding Portfolio items as I keep developing stuff."
                    stack="REACT - STYLED COMPONENTS"
                    image="/Images/foliosky.png"
                    link="https://bahammou.com"
                    github="https://github.com/jamal-Bahammou/Foliosky"
                />
                <PortfolioItem
                    title="Breasky | Breast Cancer Detection"
                    text="This is my final year project, I wanted to do something challenging myself, my knowledge and to be of a human purpose, So I found that nothing is better than implement Deep learning in the healthcare industry. So this is the application that I create, It detects breast cancer base on diagnostic image of Timor. It uses React in frontend and python backend, database firebase, and server-side flask. You can create a doctor account, add a new case, take an examination for the case, and you can see cases of other doctors in the same Hospital, and discuss with them about the cases. One of the projects I'm most pround of."
                    stack="REACT - REDUX - SEMANTIC UI - FIREBASE - AUTH - FLASK - TENSORFLOW - KERAS"
                    image="/Images/breasky.png"
                    link="https://breasky.netlify.app"
                    github="https://github.com/jamal-Bahammou/Breasky"
                />
                <PortfolioItem
                    reverse
                    title="Movsky | Movies Library App"
                    text="A Movie Library made with React. It fetches information from an API, and displays it in a nice way based on the type that the user chose, Popular Top rated, Upcoming and a lot of type. You also get recommended movies based on the one you're watching, it uses React Router, and fetches the movie based on the URL, so you can easily reload the page and the data will be still fetched. It also uses lazy loading on images, has error handling, and uses Redux to manage state and sass for the styling."
                    stack="REACT - REDUX - SASS"
                    image="/Images/movsky.png"
                    link="https://movsky.netlify.app"
                    github="https://github.com/jamal-Bahammou/Movsky"
                />
                <PortfolioItem
                    title="Weasky | Weather App"
                    text="A weather app, that gets user location, and fetches the current weather from an API. The user can then click on the location, and check the weather for the next 5 days. It's also possible to search for other locations, and add/remove them from favorites."
                    stack="REACT - SASS"
                    image="/Images/weasky.png"
                    link="https://weasky.netlify.app"
                    github="https://github.com/jamal-Bahammou/Weasky"
                />
                <PortfolioItem
                    reverse
                    title="Natsky | Exciting Tours Site"
                    text="A Natours web site that I create went I take Sass animation course, In this site I learn a lot of new techniques in CSS, Sass and animation. after finishing this site I felt I took a step forward in the design side."
                    stack="HTML5 - CSS3 - SASS - ANIMATION"
                    image="/Images/natsky.png"
                    link="https://natsky.netlify.app"
                    github="https://github.com/jamal-Bahammou/CSS_COURS/tree/master/Natours"
                />
            </div>
        </Element>
    );
}

export default portfolio;