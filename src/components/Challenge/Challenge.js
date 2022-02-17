import React from 'react';
import Cta from '../Cta/Cta';
import './Challenge.scss';

function Challenge(props) {
  const content = props.content;
  const cssClass = 'Challenge';
  const uiConfig = {
    'cta': 'cuaternary',
    'icon': 'cuaternary'
  }

  const List = (() => {
    return content.social.map((item, index) => {
      return(
        <li key={index} className={`${cssClass}-social-item`}>
          <a href={item.url}> 
          <Cta type={uiConfig.cta} icon={item.icon} iconType={uiConfig.icon}/>
          </a>
        </li>
      )
    })
  })();

  return (
    <div className={cssClass} id="Promo">
      <h4 className={`${cssClass}-title`}>
        {content.title}
      </h4>
      <p className={`${cssClass}-content p--light`}>
        {content.subtitle}
      </p>
      <ul className={`${cssClass}-icons`}>
        {List}
      </ul>
    </div>
  );
}

export default Challenge;