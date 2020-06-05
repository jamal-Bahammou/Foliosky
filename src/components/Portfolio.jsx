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
                    link="/"
                    github="https://github.com/jamal-Bahammou/Foliosky"
                />
                <PortfolioItem
                    title="Breasky | Breast Cancer Detection"
                    text="A Breast Cancer Detector made with React and Deep Learning, 
                    This is my final year project, It detect breast cancer from base on diagnostic image of 
                    timor. You can create a doctor acount, add new case, take examination for case and you can see 
                    cases of other dortors in the same Hospital and discuss with them about the cases. For the user interface 
                    I use React , database I use firebase because it offer a lot of feature easy like authentification. and I use Python to build
                    Deep Learning model. and for the connection between frontend and backend I use flask. One of the projects I'm most pround of."
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
                    title="Weasky | Weather app"
                    text="A weather app, that gets user location, and fetches the current weather from an API. The user can then click on the location, and check the weather for the next 5 days. It's also possible to search for other locations, and add/remove them from favorites."
                    stack="REACT - SASS"
                    image="/Images/weasky.png"
                    link="https://weasky.netlify.app"
                    github="https://github.com/jamal-Bahammou/Weasky"
                />
            </div>
        </Element>
    );
}

export default portfolio;