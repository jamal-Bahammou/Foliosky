import React from 'react'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

const App = () => {

    return (
        <div class="container">

            <Header />

            <main className="main">
                <Home />
                <About />
            </main>

        </div>
    );
}

export default App;