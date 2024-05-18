import React from 'react';
import './About.scss';
function About() {
    return (
        <div className='container-about'>
            <h1>Acerca de Vintage Outfits</h1>
            <img className='image' src="https://i0.wp.com/www.paviitaly.com/wp-content/uploads/4p.outfits-aesthetic-vintage-min.jpg" alt="Vintage Outfits" />
            <p>
                En Vintage Outfits, buscamos revivir la esencia de la moda del pasado, 
                ofreciendo prendas únicas que destacan por su calidad y estilo inconfundible. 
                Nuestra misión es proporcionar a nuestros clientes la oportunidad de expresar 
                su individualidad a través de piezas clásicas que nunca pasan de moda.
            </p>
            <p>
                Nos dedicamos a la selección meticulosa de cada prenda, asegurando que cada 
                artículo no solo refleje la estética vintage, sino que también cumpla con 
                los estándares modernos de confort y sostenibilidad. Con Vintage Outfits, 
                te vestimos con historia, estilo y conciencia.
            </p>
        </div>
    );
}

export default About;