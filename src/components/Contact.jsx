import React from 'react'

import SocialButton from './Themes/SocialButton'
import { faGithub, faFacebookF, faLinkedinIn, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className="section">
            <div className="section__header">
                <h1 className="section__primary">Contact Me</h1>
                <h2 className="section__secondary">If you want to <span className='span__secondary'>talk</span>, you can <span className='span__secondary'>find me</span> at:</h2>
            </div>
            <div className="contact__content">
                <a href="/" className="contact__email">jamal.bahammou@ump.ac.ma</a>
                <div className="contact__wrapper">
                    <SocialButton
                        label="Github"
                        href="https://github.com/jamal-Bahammou"
                        icon={faGithub}
                    />
                    <SocialButton
                        label="Linkedin"
                        href="https://www.linkedin.com"
                        icon={faLinkedinIn}
                    />
                    <SocialButton
                        label="Instagram"
                        href="https://www.instagram.com/jamal_bahammou"
                        icon={faInstagram}
                    />
                    <SocialButton
                        label="Twatter"
                        href="https://www.twitter.com/"
                        icon={faTwitter}
                    />
                    <SocialButton
                        label="Facebook"
                        href="https://www.facebook.com/"
                        icon={faFacebookF}
                    />
                </div>
                <footer className="contact__footer">
                    <img src="./logo/foliosky_dark.png" alt="portfolio logo" class="contact__logo" />
                    <div style={{ textAlign: 'center' }} className="contact__text">
                        <p className="contact__text-primary">Bahammou</p>
                        <p className="contact__text-secondary">Web developer</p>
                    </div>
                    <p className="contact__copyright">Copyright &copy; 2020, Bahammou</p>
                </footer>
            </div>
        </section>
    );
}

export default Contact;