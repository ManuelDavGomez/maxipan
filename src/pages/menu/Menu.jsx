import React, { useEffect } from "react";
import "./menu.css";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function enviarMensaje1() {
    let telefono = 573216562000;
    let mensaje =
      "¡Hola! Buen día. ¿Podría proporcionarme información sobre las opciones de desayuno disponibles, por favor? Agradezco de antemano su atención. ¡Gracias!";

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url);
  }

  function enviarMensaje2() {
    let telefono = 573216562000;
    let mensaje =
      "Por favor, me gustaría conocer las opciones de almuerzo disponibles, ya sea en la categoría de almuerzo corriente o ejecutivo. Agradezco de antemano la información que puedas brindarme. ¡Gracias!";

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url);
  }

  return (
    <>
      <article className="menu_container_general">
        <p className="menu_title title_primary">
          Consulta el menú del día simplemente haciendo la pregunta
        </p>
        <p className="menu_text text_primary">
          Utiliza los botones para consultar el menú de desayuno y almuerzo del
          día de hoy. ¡Pregunta por las opciones disponibles!
        </p>
        <article className="menu_container">
          <section className="comidas_container">
            <p className="menu_title">Desayuno</p>
            <p className="menu_text">
              ¡No dudes en preguntar por nuestro delicioso desayuno! Estamos
              aquí para ofrecerte todas las opciones y ayudarte a elegir tu
              favorita
            </p>
            <button className="menu_btn" onClick={enviarMensaje1}>
              Desayuno
            </button>
          </section>
          <section className="comidas_container">
            <p className="menu_title">Almuerzo</p>
            <p className="menu_text">
              También puedes preguntar por nuestros almuerzos corrientes y
              ejecutivos. Estamos encantados de brindarte información detallada.
            </p>
            <button className="menu_btn" onClick={enviarMensaje2}>
              Almuerzos
            </button>
          </section>
        </article>
      </article>
    </>
  );
};

export default Menu;
