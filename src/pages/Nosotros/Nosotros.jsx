import React, { useEffect } from "react";
import "../Nosotros/nosotros.css";
import Vid from "../../assets/videos/video.mp4";
import Wave4 from "../../assets/waves/wave4.svg";
import Wave5 from "../../assets/waves/wave5.svg";
import Wave6 from "../../assets/waves/wave6.svg";
import { motion } from "framer-motion";

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animate = {
    Alo: { x: -100, opacity: 0 },
    Boo: { transition: { duration: 1 }, x: 0, opacity: 1 },
    Caca: { transition: { duration: 1, delay: 0.1 }, x: 0, opacity: 1 },
  };

  return (
    <>
      <section className="nosotros_container_general">
        <section className="somos_container">
          <motion.video
            initial={{ borderRadius: "100%" }}
            whileInView={{
              borderRadius: "0%",
              transition: { duration: 1 },
            }}
            src={Vid}
            className="somos_vid"
            autoPlay
            loop
          />
          <motion.p
            viewport={{ once: true }}
            variants={animate}
            initial="Alo"
            whileInView="Caca"
            className="nosotros_title"
          >
            Quienes somos ?
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            variants={animate}
            initial="Alo"
            whileInView="Boo"
            className="nosotros_text"
          >
            En nuestra panadería, asumimos un compromiso absoluto con la calidad
            en cada producto que ofrecemos. Nos aseguramos de utilizar solo los
            mejores ingredientes. <br /> <br />
            En nuestra búsqueda constante de la excelencia, también hacemos
            énfasis en la atención al cliente. Entendemos que nuestros clientes
            son la razón de nuestra existencia, y trabajamos para asegurarnos de
            que se sientan valorados y apreciados en cada visita. Nuestro
            personal altamente capacitado y amable está siempre a su disposición
            para ofrecer un servicio excepcional, acogiendo sus necesidades y
            sugerencias.
          </motion.p>
          <img src={Wave4} className="nosotros_wave" alt="" />
        </section>

        <section className="mision_container">
          <img src={Wave5} className="nosotros_wave" alt="" />
          <motion.p
            viewport={{ once: true }}
            variants={animate}
            initial="Alo"
            whileInView="Caca"
            className="nosotros_title"
          >
            Mision
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            variants={animate}
            initial="Alo"
            whileInView="Boo"
            className="nosotros_text"
          >
            En nuestra panadería, nuestro principal compromiso es ofrecer
            productos horneados que sepan deliciosos. Asimismo, nuestro objetivo
            es brindar a nuestros clientes una atención al cliente excelente que
            los haga sentir valorados y apreciados en todo momento. <br />
            Nos esforzamos por superar constantemente las expectativas de
            nuestros clientes. Estamos comprometidos en mantener la calidad de
            todo lo que hacemos, desde la selección de los ingredientes hasta la
            elaboración de nuestros productos horneados.
          </motion.p>
          <img src={Wave4} className="nosotros_wave" alt="" />
        </section>

        <section className="vision_container">
          <img src={Wave5} className="nosotros_wave" alt="" />
          <motion.p
            viewport={{ once: true }}
            variants={animate}
            initial="Alo"
            whileInView="Caca"
            className="nosotros_title"
          >
            Vision
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            variants={animate}
            initial="Alo"
            whileInView="Boo"
            className="nosotros_text"
          >
            Nuestra visión es ser una de las mejores panadería en el sector,
            destacando por la calidad de nuestros productos horneados y la
            atención al cliente que brindamos.
            <br />
            Aspiramos a ser una de las mejores panaderias de colombia. Buscamos
            ser una fuente de inspiración para otros negocios, demostrando que
            se puede lograr un éxito sostenible a través de la pasión por la
            calidad y la atención al cliente.
          </motion.p>
        </section>
        <img src={Wave6} className="nosotros_wave" alt="" />
      </section>
    </>
  );
};

export default Nosotros;
