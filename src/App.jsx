import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ScrollTop from './components/Themes/ScrollTop'

const App = () => {

    useEffect( () => {
        scroll.scrollToTop();
    }, [])

    const [showScrollTop, setShowScrollTop] = useState(false);

    return (
        <div className="container">

            <Header setShowScrollTop={setShowScrollTop} />

            <main className="main">
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </main>

            <ScrollTop show={showScrollTop} />

        </div>
    );
}

export default App;