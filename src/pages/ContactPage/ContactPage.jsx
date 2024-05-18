import React from 'react';
import './ContactPage.scss'; // Asegúrate de crear un archivo SCSS para estilos

function ContactPage() {
    return (
        <div className="contact-container">
            <h1>Contacta con Vintage Outfits</h1>
            <form className="contact-form">
                <input type="text" placeholder="Tu nombre" required />
                <input type="email" placeholder="Tu email" required />
                <textarea placeholder="Tu mensaje" rows="4" required></textarea>
                <button type="submit">Enviar Mensaje</button>
            </form>
            <div className="contact-info">
                <p><strong>Teléfono:</strong> +57 3142422382</p>
                <p><strong>Email:</strong> vintageoutfits@gmail</p>
                <p><strong>Dirección:</strong> Calle 45 #45-31, Bogota DC, Colombia</p>
            </div>
        </div>
    );
}

export default ContactPage;