import React from 'react';
import './ContactBox.scss';
import Cta from '../../components/Cta/Cta';

function ContactBox(props) {
  const content = props.content;
  const cssClass = 'ContactBox';
  const uiConfig = {
    'cta': 'cuaternary',
    'icon': 'cuaternary'
  }

  const List = (() => {
    return content.map((item, index) => {
      return (
        <li key={index} className={`${cssClass}-block`}>
          <p className={`${cssClass}-description`}>
          <span className={`${cssClass}-icon`}>
            <Cta type={uiConfig.cta} icon={item.title} iconType={uiConfig.icon} /> 
          </span>
          <span className={`${cssClass}-subtitle`}>
            {item.subtitle}
          </span>
          </p>
        </li>
      )
    })
  })();

  return (
    <ul className={cssClass} id="Contactos">
      {List}
    </ul>
  );
}

export default ContactBox;