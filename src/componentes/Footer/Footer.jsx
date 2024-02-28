import React from 'react';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import instagran from '../../assets/images/instagram.svg';

import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer className='footer'>
            <div className='sb__footer-copyright'>
                @{new Date().getFullYear()} Nicolas Aybar.Trabajo practico-Todos los derechos reservados.
            </div>
            <div className='socialmedia'>
                <p><img src={facebook} alt=""/></p>
                <p><img src={twitter} alt=""/></p>
                <p><img src={instagran} alt=""/></p>
            </div>
        </footer>
        </>
    )
}

export { Footer }