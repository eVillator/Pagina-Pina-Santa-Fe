import React from 'react';
import Icon from '../Icon/Icon';
import './Cta.scss';

function Cta(props) {
  const cssClass = 'Cta';
  const content = props.icon ? <Icon icon={props.icon} type={props.iconType} /> : props.label;

// onclick="{<funtion>}"

  return (
    <button className={`${cssClass} ${cssClass}--${props.type}` } onClick={props.buttonAction}>
      {content}
    </button>
  );
}

export default Cta;