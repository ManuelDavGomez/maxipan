import React from "react";
import Pollo from "../../assets/images/pollo.webp";
import Rapida from "../../assets/images/comida rapida.jpg";
import Panaderia from "../../assets/images/panaderia.jpg";
import Pasteleria from "../../assets/images/pasteleria.webp";
import Varios from "../../assets/images/productos varios.jpg";
import Wave from "../../assets/waves/wave.svg";
import { Link } from "react-router-dom";

import "../carrusel/carrusel.css";

const Carrusel = () => {
  return (
    <>
      <section
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="1000">
            <Link to={"/productos"}>
              <img
                loading="lazy"
                src={Pollo}
                className="d-block w-100 img_carusel"
                alt="..."
              />
              <span className="texto-hover">Ver Productos</span>
            </Link>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <Link to={"/productos"}>
              <img
                loading="lazy"
                src={Pasteleria}
                className="d-block w-100 img_carusel"
                alt="..."
              />
              <span className="texto-hover">Ver Productos</span>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/productos"}>
              <img
                loading="lazy"
                src={Panaderia}
                className="d-block w-100 img_carusel"
                alt="..."
              />
              <span className="texto-hover">Ver Productos</span>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/productos"}>
              <img
                loading="lazy"
                src={Varios}
                className="d-block w-100 img_carusel"
                alt="..."
              />
              <span className="texto-hover">Ver Productos</span>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={"/productos"}>
              <img
                loading="lazy"
                src={Rapida}
                className="d-block w-100 img_carusel"
                alt="..."
              />
              <span className="texto-hover">Ver Productos</span>
            </Link>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden" style={{ border: "1px solid red" }}>
            Next
          </span>
        </button>
        <img src={Wave} className="carrusel_wave wave_two" alt="" />
        <img src={Wave} className="carrusel_wave" alt="" />
      </section>
    </>
  );
};

export default Carrusel;
