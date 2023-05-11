import React from "react";
import "./error.css";
import Logo404 from '../../assets/logos/maxipan.webp'

const Error = () => {
  return (
    <>
      <section className="error_container">
        <img className="error_img" src={Logo404} alt="404 logo" />
        <p className="title_404">404 Pagina no encontrada</p>
        <p className="text_404">Vuelve al inicio porfavor</p>
      </section>
    </>
  );
};

export default Error;
