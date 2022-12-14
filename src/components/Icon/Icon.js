import React from 'react';
import facebook from '../../images/facebook.svg';
import fries from '../../images/Icon2.png';
import hamburger from '../../images/Icon1.png';
import instagram from '../../images/instagram.svg';
import lightHamburger from '../../images/logopsf_192x192.png';
import nav from '../../images/nav.svg';
import soda from '../../images/Icon3.png';
import tiktok from '../../images/tiktok.svg';
import imagen1 from '../../images/imagen1.png';
import imagen2 from '../../images/imagen2.png';
import imagen3 from '../../images/imagen3.png';
import imagen4 from '../../images/imagen4.png';
import imagen5 from '../../images/imagen5.png';
import imagen6 from '../../images/imagen6.png';
import dir from '../../images/geo.svg';
import email from '../../images/email.svg';
import tel from '../../images/telephone.svg';
import './Icon.scss';

function Icon(props) {
  const cssClass = 'Icon';
  const icons = {
    'instagram': instagram,
    'facebook': facebook,
    'tiktok': tiktok,
    'hamburger': hamburger,
    'lightHamburger': lightHamburger,
    'soda': soda,
    'fries': fries,
    'nav': nav,
    'dir': dir,
    'email': email,
    'tel': tel,
    'imagen1': imagen1,
    'imagen2': imagen2,
    'imagen3': imagen3,
    'imagen4': imagen4,
    'imagen5': imagen5,
    'imagen6': imagen6,
  }

  return (
    <img className={`${cssClass} ${cssClass}--${props.type}`} src={icons[props.icon]} alt={props.icon} />
  );
}

export default Icon;