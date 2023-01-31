import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../contacto';


const ContactoList = () => {

    const defaultContacto = new Contacto('Default Nombre', 'Default Apellido', 'Default Email', false);

    return (
        <div>
            <div>
                <h1>Tus Contactos</h1>
            </div>
            <ContactoComponent contacto={defaultContacto}></ContactoComponent>
        </div>
    );
};





export default ContactoList;
