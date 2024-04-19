import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categorias</h1>
          <span>Mujer</span>
          <span>Hombre</span>
          <span>Zapatos</span>
          <span>Accessorios</span>
          <span>Recien Llegados</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Nosotros</h1>
          <span>
            Somos amantes apasionados de la moda vintage, dedicados a compartir
            prendas y accesorios únicos con historias especiales. Nuestra
            selección está cuidadosamente curada para ofrecer calidad, estilo y
            un toque nostálgico que te permite expresar tu personalidad. Explora
            nuestro espacio encantador y descubre piezas auténticas que conectan
            el pasado con el presente en tu estilo único. ¡Únete a nosotros en
            este viaje de moda vintage y encuentra inspiración en cada prenda!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            ¿Tienes alguna pregunta o necesitas ayuda para encontrar la prenda
            perfecta? Estamos aquí para ayudarte. No dudes en contactarnos por
            cualquier consulta o sugerencia que puedas tener. Puedes enviarnos
            un correo electrónico. Nuestro equipo estará encantado de atenderte
            y proporcionarte la asistencia personalizada que necesitas.
            ¡Esperamos escucharte pronto y ayudarte a descubrir tu próximo
            tesoro vintage!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Vintage Outfits</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
