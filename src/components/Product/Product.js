import React from 'react';
import Icon from '../../components/Icon/Icon';
import './Product.scss';

function Product(props) {
  const content = props.content;
  const cssClass = 'Product'
  const uiConfig = {
    'icon': 'terciary'
  }

  const Tabs = (() => {
    return content.items.map((item, index) => {
      return(
        <li key={index} className={`${cssClass}-icon -icon`}>
          <Icon type={uiConfig.icon} icon={item.icon} iconType={uiConfig.icon}/>
        </li>
      )
    })
  })();

  return (
    <div className={cssClass}>
      <h4 className={`${cssClass}-title h4--dark`}>
        {content.title}
      </h4>
      <p className={`${cssClass}-description`}>
        {content.subtitle}
      </p>
      <div className={`${cssClass}-icon`}>
        {Tabs}
      </div>      
    </div>
  );
}

export default Product;