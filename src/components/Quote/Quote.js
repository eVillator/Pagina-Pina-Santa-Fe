import React from 'react';
import './Quote.scss';

function Quote(props) {
  const content = props.content;
  const cssClass = 'Quote';

  const Products = (() => {
    return content.culture.map((item,index) => {
      return (
        <li key ={index} className={`${cssClass}-product`}>
          <div key={index} className={`${cssClass}-product-inside`}>
            <h4 className={`${cssClass}-title h4--dark`}>
              {item.titulo}
            </h4>
            <p className={`${cssClass}-description`}>
              {item.subtitulo}
            </p>    
          </div>    
        </li>
      );
    })
  })();
  return (
    <div className={cssClass} id= "Nosotros">
      <h4>{content.title}</h4>
      <ul className={`${cssClass}-products grid`}>
        {Products}
      </ul> 
    </div>
  );

}

export default Quote;