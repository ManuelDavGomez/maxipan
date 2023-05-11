import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/Shop_context";
import "../Productos/mercancia.css";
import { motion } from "framer-motion";

const Mercancia = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale:1.1
    },
    visible: {
      scale:1,
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <>
      <motion.section
        variants={containerVariants}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="mercancia_container"
      >
        <motion.img
          variants={itemVariants}
          viewport={{ once: true }}
          className="mercancia_img"
          src={productImg}
          alt=""
        />
        <motion.span
          variants={itemVariants}
          viewport={{ once: true }}
          className="mercancia_title"
        >
          {productName}
        </motion.span>
        <motion.span
          variants={itemVariants}
          viewport={{ once: true }}
          className="mercancia_precio"
        >
          ${price}
        </motion.span>
        <button className="mercancia_btn" onClick={() => addToCart(id)}>
          Al carrito ➡ {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </motion.section>
    </>
  );
};

export default Mercancia;
