import React, { useEffect } from "react";
import "../pastel/pastel.css";
import { motion, transform } from "framer-motion";

const Pastel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendMessages() {
    let telefono = 573142179656;
    let mensaje =
      "Buen día. Me interesa encargar la elaboración de una torta. ¿Podría ayudarme con ese pedido?";

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url);
  }

  return (
    <>
      <section className="creapastel_container_general">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="titulo_principal"
        >
          Diseña tu torta con estos pasos!!!
        </motion.div>

        <section className="pasos_container">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="pasos_div"
          >
            <i className="bi bi-camera pasos_icons"></i>
            <p className="pasos_title">Toma tu foto de tu pastel pensado</p>
            <p className="pasos_text">
              Puedes utilizar una imagen de cualquier plataforma como Google,
              Facebook, entre otras, que muestre el tipo de pastel que deseas
              elaborar.
            </p>
          </motion.div>

          <hr className="pasos_line" />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="pasos_div"
          >
            <i className="bi bi-balloon pasos_icons"></i>
            <p className="pasos_title">Danos detalles</p>
            <p className="pasos_text">
              Por favor, indícanos cómo te gustaría que fuera tu pastel en
              cuanto a su diseño, tamaño, colores y decoraciones específicas que
              desees incluir.
            </p>
          </motion.div>

          <hr className="pasos_line" />

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="pasos_div last"
          >
            <i className="bi bi-basket pasos_icons"></i>
            <p className="pasos_title">Se enviara a domicilio</p>
            <p className="pasos_text">
              Por favor, proporciona tu dirección a través de nuestro número de
              whatsapp para que podamos entregarte tu pastel en la ubicación
              deseada.
            </p>
          </motion.div>

          <hr className="pasos_line" />
        </section>

        <div className="btn_contenedor">
          <button className="pastel_btn" onClick={sendMessages}>
            WhatsApp
          </button>
        </div>
      </section>
    </>
  );
};

export default Pastel;
