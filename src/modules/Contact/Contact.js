import React from 'react';
import ContactBox from '../../components/ContactBox/ContactBox'
import './Contact.scss';

function Contact(props) {
  const content = props.content;
  const cssClass = 'Contact';

  return (
    <div className={`${cssClass} grid`}>
      <h3 className={`${cssClass}-title`}>
        {content.title}
      </h3>
      <div className={`${cssClass}-box`}>
        <h3 className={`${cssClass}-title`}>Ventas</h3>
        <ContactBox content={content.itemsVen} />   
      </div>
      <div className={`${cssClass}-box`}>
        <h3 className={`${cssClass}-title`}>
          Consulta nuestras vacantes</h3>
        <ContactBox content={content.itemsVac} />   
      </div>
    </div>
  );
}

export default Contact;