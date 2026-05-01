import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Landing.css";
import urlAxe from "../../assets/ProductsPhotos/Hacha.png";
import urlChaleco from "../../assets/ProductsPhotos/ChalecoRosado.png";
import urlPocion from "../../assets/ProductsPhotos/PocionMiau.png";
import urlSaco from "../../assets/ProductsPhotos/SacoDeDormir.png";

const PRODUCTS = [
  {
    productTitle: "Guitarra Hacha",
    productDescription: "#armas",
    productPrice: 49.00,
    productImage: urlAxe,
  },
  {
    productTitle: "Suéter Rosa",
    productDescription: "#ropa",
    productPrice: 49.00,
    productImage: urlChaleco,
  },
  {
    productTitle: "Antidoto Mi-miau",
    productDescription: "#pocion",
    productPrice: 67.00,
    productImage: urlPocion,
  },
  {
    productTitle: "Bolsa de Dormir",
    productDescription: "#otros",
    productPrice: 120.00,
    productImage: urlSaco,
  },
];


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
            {PRODUCTS.map((product, index) => (
              <ProductCard key={index} {...product}></ProductCard>
            ))}
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
