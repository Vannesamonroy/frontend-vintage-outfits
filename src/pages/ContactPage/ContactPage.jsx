import React from 'react';
import './ContactPage.scss'; // Asegúrate de crear un archivo SCSS para estilos

function ContactPage() {
    return (
        <div className="contact-container">
            <h1>Contactate con nosotros</h1>
            <form className="contact-form">
                <input type="text" placeholder="Tu nombre" required />
                <input type="text" placeholder="Tu whatsapp" required />
                <input type="email" placeholder="Tu email" required />
                <textarea placeholder="Tu mensaje" rows="4" required></textarea>
                <button type="submit">Enviar Mensaje</button>
            </form>
            <div className="contact-info">
                <p><strong>Teléfono:</strong> +57 3142422382</p>
                <p><strong>Email:</strong> vintageoutfits@gmail</p>
                <p><strong>Dirección:</strong> Cra 4A #2-15, Garzon- Huila, Colombia</p>
            </div>
        </div>
    );
}

export default ContactPage;