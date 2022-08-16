import React from 'react';
import Cta from '../Cta/Cta';
import './Nav.scss';

function Nav(props) {
  const content = props.content;
  const cssClass = 'Nav';
  const uiConfig = {
    cta: 'cuaternary',
    icon: 'secondary'
  }

  const List = (() => {
    return content.items.map((item, index) => {
      return (
        <li key={index} className={`${cssClass}-item`}>
          <a href={item.url}>
            {item.label}
          </a>
        </li>
      )
    })
  })();

const showAndHideNav = ()=>{
  const navList = document.querySelector(".Nav-list");
  if(navList.style.display === "block"){
      navList.style.display = "none";
  }
  else{
      navList.style.display = "block"
  } 
} 

  return (
    <div className={`${cssClass} ${cssClass}--${props.type}`}>
      <div className="grid">
        <div className={`${cssClass}-button`}>
          <Cta type={uiConfig.cta} icon={content.icon} iconType={uiConfig.icon} buttonAction={showAndHideNav} />
        </div>
        <ul className={`${cssClass}-list`}>
          {List}
        </ul>
      </div>
    </div>
  );
}

export default Nav;