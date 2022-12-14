import React from 'react';
import Icon from '../../components/Icon/Icon';
import './Hero.scss';

function Hero(props) {
  const content = props.content;
  const cssClass = 'Hero';
  const uiConfig = {
    'icon': 'terciary'
  }

  return (
    <div className={cssClass}>
      <div className={`${cssClass}-icon`}>
        <Icon icon={content.icon} type={uiConfig.icon}/>
      </div>
      <h1 className={`${cssClass}-title`}>
        {content.title}
      </h1>
        <h2 className={`${cssClass}-subtitle`}>
          {content.subtitle}
          <h2 className={`${cssClass}-subtitle2`}>
        {content.subtitle2}
          </h2>
        </h2>      
    </div>
  );
}

export default Hero;