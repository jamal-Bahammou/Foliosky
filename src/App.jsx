import React from 'react'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'

const App = () => {

    return (
        <div class="container">

            <Header />

            <main className="main">
                <Home />
                <About />
                <Portfolio />
            </main>

        </div>
    );
}

export default App;