import React, { useEffect } from "react";
import "../contacto/contacto.css";
import Wave8 from "../../assets/waves/wave8.svg";
import { motion } from "framer-motion";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendMessage() {
    let telefono = 573216562000;
    let mensaje =
      "Buen día, quisiera aclarar algunas dudas y por ello me pongo en contacto con ustedes. Agradezco de antemano su atención.";

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url);
  }

  const informationVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <section className="contacto_container_general">
        <motion.p
          initial={{ scale: 1.5, opacity: 0, y: -50, rotateX: -90 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6 }}
          className="contacto_title"
        >
          Contacto
        </motion.p>
        <motion.p
          initial={{ scale: 1.5, opacity: 0, y: -50, rotateX: -90 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6 }}
          className="contacto_text"
        >
          Contáctanos si necesitas ayuda o información, tenemos diferentes
          formas de comunicación disponibles.
        </motion.p>

        <section className="secciones_contacto">
          <motion.article
            variants={informationVariant}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="contacto_information"
          >
            <p className="contacts_title">Direccion</p>
            <p className="contacts_texts">
              Cra. 4 #12-87 <br /> La Dorada, Caldas
            </p>
          </motion.article>

          <motion.article
            variants={informationVariant}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="contacto_information primero"
          >
            <p className="contacts_title">Numero de telefono</p>
            <p className="subtitle_contacts">Celular</p>
            <p className="contacts_texts">321-656-2000</p>
            <p className="subtitle_contacts">Fijo</p>
            <p className="contacts_texts">8370230</p>
          </motion.article>

          <motion.article
            variants={informationVariant}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="contacto_information"
          >
            <p className="contacts_title">Escribenos</p>
            <button className="contacts_btn" onClick={sendMessage}>
              WhatsApp
            </button>
          </motion.article>
        </section>
      </section>
      <img src={Wave8} className="contacto_wave" alt="" />
    </>
  );
};

export default Contacto;
