import React from 'react';
import './Quote.scss';

function Quote(props) {
  const content = props.content;
  const cssClass = 'Quote';

  function Valores(){
   return <ul className='valores'>
      <li>Respeto</li>
      <li>Compromiso</li>
      <li>Honestidad</li>
      <li>Disciplina</li>
      <li>Lealtad</li>
      <li>Responsabilidad</li>
      <li>Trabajo en equipo</li>
    </ul>
      }
  

  const Products = (() => {
    return content.culture.map((item,index) => {
      return (
        <li key ={index} className={`${cssClass}-product ${cssClass}-product-img-${index+1}`}>
         <div key={index} className={`${cssClass}-product-inside`}>
            <h4 className={`${cssClass}-title h4--dark`}>
              {item.titulo}
            </h4>
            <p className={`${cssClass}-description`}>
              {item.titulo !== "Valores" ? 
              item.subtitulo : 
              <Valores/>}
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