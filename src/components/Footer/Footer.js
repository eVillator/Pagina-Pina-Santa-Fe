import React from 'react';

import './Footer.scss'

function Footer() {
    return (
        <footer>
                <p className='footer__dev'>Desarrollo de la página por <a href="https://github.com/eVillator">Edgar Villatoro</a></p>
                <h5 className='footer__licencia'>PIÑAS SANTA FE, S. DE P.R. DE R.L.</h5>
                <p className='footer__dev'>Edición de la página por <a href="https://github.com/JoJDev/">JoJDev</a></p>
        </footer>
    );
}

export default Footer