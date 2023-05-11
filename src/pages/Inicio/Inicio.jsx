import React, { useEffect } from "react";
import Carrusel from "../../components/carrusel/Carrusel";
import Wave2 from "../../assets/waves/wave2.svg";
import Wave3 from "../../assets/waves/wave3.svg";
import Wave7 from "../../assets/waves/wave7.svg";
import "../Inicio/inicio.css";
import Map from "../../components/map/Map";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Img1 from "../../assets/images/imagen1.jpg";
import Img2 from "../../assets/images/imagen2.jpg";
import Img3 from "../../assets/images/imagen3.jpg";
import Img4 from "../../assets/images/imagen4.jpg";
import Img5 from "../../assets/images/imagen5.jpg";
import Img6 from "../../assets/images/imagen6.jpg";

const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero_container"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeOut" }}
          className="hero_information"
        >
          <p className="hero_title">Maxipan</p>
          <p className="hero_text">
            Bienvenidos a panaderia maxipan <br /> amasando calidad horneando
            felicidad !!!
          </p>
          <Link to={"/productos"}>
            <button className="hero_btn">Ver Productos</button>
          </Link>
        </motion.div>
      </motion.section>

      <section className="carusel_container">
        <Carrusel />
      </section>

      <section className="pastel_container">
        <img src={Wave2} className="pastel_wave" alt="" />
        <img src={Wave2} className="pastel_wave wave_two" alt="" />
        <p className="pastel_title ">Crea tu pastel</p>

        <article className="pasteles_general">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pastel_div"
          >
            <i className="bi bi-camera div_icons"></i>
            <p className="div_texts">
              Has tu pedido con una foto de tu pástel ideal
            </p>
            <hr className="pastel_line" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pastel_div"
          >
            <i className="bi bi-balloon div_icons"></i>
            <p className="div_texts">
              Confirmamos en mensaje la fecha de entrega y diseño
            </p>
            <hr className="pastel_line" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pastel_div"
          >
            <i className="bi bi-basket div_icons"></i>
            <p className="div_texts">Se enviara al domicilio que mencionaste</p>
            <hr className="pastel_line" />
          </motion.div>
        </article>

        <img src={Wave3} className="pastel_wave three" alt="" />
      </section>

      <section className="map_container">
        <Map />
      </section>

      <motion.section
        variants={containerVariants}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="galery_container"
      >
        <motion.article
          variants={itemVariants}
          className="imgs_container first"
        >
          <img src={Img1} alt="Imagenes de galeria" />
        </motion.article>

        <motion.article variants={itemVariants} className="imgs_container">
          <img src={Img2} alt="Imagenes de galeria" />
        </motion.article>

        <motion.article variants={itemVariants} className="imgs_container">
          <img src={Img3} alt="Imagenes de galeria" />
        </motion.article>

        <motion.article variants={itemVariants} className="imgs_container">
          <img src={Img4} alt="Imagenes de galeria" />
        </motion.article>

        <motion.article variants={itemVariants} className="imgs_container">
          <img src={Img5} alt="Imagenes de galeria" />
        </motion.article>

        <motion.article variants={itemVariants} className="imgs_container last">
          <img src={Img6} alt="Imagenes de galeria" />
        </motion.article>
      </motion.section>
      <img src={Wave7} className="galery_wave" alt="" />
    </>
  );
};

export default Inicio;
