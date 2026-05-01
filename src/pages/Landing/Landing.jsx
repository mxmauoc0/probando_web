import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Landing.css";

export default function Landing() {

  return (
    <main className="landing">
      <div className="landing-overlay"> {/* Contiene todos los elementos */}
        {/* Foto BMO // Descripción de página */}

        <div className="landing-initial-container">
          <div className="title-container">
            <h1 className="title-label">Adventurer Shop</h1>
          </div>
          <div className="landing-description-container">
            <p className="description-box">En Adventurer Store, ofrecemos productos extraído directamente
              del mundo de Ooo. Para ustedes, coleccionistas y fanáticos de Hora de Aventura!</p>
          </div>
        </div>

        <div className="products-carrusel">
          <div className="products-tarjetas">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>

        <div className="explore-button-section">
          {/* <h1>BOTON DE EXPLORAR QUE LLEVA A MARKET</h1> */}
          <button className="explore-button">Explorar</button>
        </div>
      </div>
    </main>

  );
}
