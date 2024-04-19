import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>
          {type === "featured"
            ? "Productos destacados"
            : `Productos en Tendencia`}
        </h1>
        <p>
          {type === "featured"
            ? `Déjate seducir por la elegancia intemporal de nuestra colección. Cada
            artículo ha sido cuidadosamente inspeccionado y seleccionado para
            asegurar que solo obtengas lo mejor de lo mejor. Desde clásicos retro
            hasta piezas únicas que no encontrarás en ningún otro lugar, nuestra
            sección de productos destacados es un tesoro para los aficionados a la
            moda vintage`
            : `Descubre nuestra exclusiva colección que fusiona la moda vintage con las últimas tendencias. Desde denim reciclado hasta estampados retro y prendas oversize, cada artículo captura la esencia del pasado con un toque moderno. Complementa tu look con accesorios vintage como gafas de sol estilo años 70 o chaquetas clásicas de cuero. Sumérgete en el estilo bohemio con vestidos fluidos y blusas étnicas. Cada pieza ha sido seleccionada con cuidado para ofrecerte calidad, estilo y un toque de nostalgia. Explora nuestra colección y encuentra tu próxima pieza favorita para expresar tu estilo único con un toque del pasado.`}
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Cargando"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
