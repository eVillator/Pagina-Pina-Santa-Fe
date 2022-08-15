import React from 'react';
import Cta from '../../components/Cta/Cta';
import Product from '../../components/Product/Product';
import './Menu.scss';

function Menu(props) {
  const content = props.content;
  const cssClass = 'Menu';
  const uiConfig = {
    'ctaTab': 'terciary',
    'ctaIcon': 'primary',
    'cta': 'secondary',

  }

  const pineappleColors =["colorA","colorB","colorC"];

  /* componente experimental Product (el original sin cambios esta abajo)
  const Products = (() => {
    return content.products.map((product, index) => {
      return(
        <li key={index} className={`${cssClass}-product`}    id={pineappleColors[index]}     >
          <Product content={product} />
        </li>
      )
    })
  })();
*/
  const Tabs = (() => {
    return content.items.map((item, index) => {
      return(
        <li key={index} className={`${cssClass}-item`}>
          <Cta type={uiConfig.ctaTab} icon={item.icon} iconType={uiConfig.ctaIcon}/>
        </li>
      )
    })
  })();


  const Products = (() => {
    return content.products.map((product, index) => {
      return(
        <li key={index} className={`${cssClass}-product`}>
          <Product content={product} />
        </li>
      )
    })
  })();

  const Cotizacion =(() => {
    return content.coti.map((item, index) => {
      return (
        <div key={index} className={`${cssClass}-cta --cta`}>
          <a href={item.url}>
            <Cta content={item} label={item.label} type={uiConfig.cta}/>
          </a>
        </div>
      )
    })
  })();

  return (
    <div className={cssClass} id= "Menu">
      <h3>{content.title}</h3>
      <ul className={`${cssClass}-tabs`}>
        {Tabs}
      </ul>
      <ul className={`${cssClass}-products grid`}>
        {Products}
      </ul>
      <div className={`${cssClass}-cta`}>
          {Cotizacion} 
        </div> 
    </div>
  );
}

export default Menu;