import React from 'react';
import Icon from '../Icon/Icon';
import './Cta.scss';

function Cta(props) {
  const cssClass = 'Cta';
  const content = props.icon ? <Icon icon={props.icon} type={props.iconType} /> : props.label;


  // onclick="buttonFunctions(`colorA`)"  o    onclick="buttonFunctions(`colorB`)"
  // o   onclick="buttonFunctions(`colorC`)"
  return (
    <button className={`${cssClass} ${cssClass}--${props.type}`}>
      {content}
    </button>
  );
}

export default Cta;