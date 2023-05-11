import React from "react";
import "../Footer/foot.css";
import Logo from "../../assets/logos/maxipan.webp";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <>
      <section className="foot_container">
        <div className="foot_logo_container">
          <img src={Logo} alt="" className="foot_logo" />
        </div>

        <div className="foot_links xd">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/crea-tu-pastel">Crea tu pastel</Link>
          <Link to="/contactanos">Contactanos</Link>
        </div>

        <article>
          <div className="foot_contact_container foot_links xdd">
            <p className="contact_title">Contactos</p>
            <p className="contact_text">Cra. 4 #12-87 <br /> La Dorada Caldas</p>
            <p className="contact_text">321-656-2000</p>
          </div>

          <div className="copy_container">
            <p className="eslogan">Amasando calidad, horneando felicidad</p>
            <p className="copyright">@2023 todos los derechos reservados</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Foot;
