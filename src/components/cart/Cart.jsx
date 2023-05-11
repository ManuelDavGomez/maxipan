import React, { useContext, useEffect } from "react";
import "../cart/cart.css";
import { PRODUCTS } from "../../data/products.js";
import { ShopContext } from "../../context/Shop_context";
import Cart_item from "./Cart_item.jsx";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContinueShopping = () => {
    const productsList = PRODUCTS.filter(
      (product) => cartItems[product.id] !== 0
    )
      .map(
        (product) =>
          `${product.productName} x ${cartItems[product.id]} = $${
            product.price * cartItems[product.id]
          }`
      )
      .join("%0A"); // %0A es el código de escape para una nueva línea en la API de WhatsApp

    const message = `¡Buen día! Le saludo cordialmente. ¿Podría confirmarme si los productos que tengo en el carrito están disponibles? En caso afirmativo, este es mi pedido: %0A${productsList} %0AEl total es de = $${totalAmount} pesos. %0AQuedo a la espera de su respuesta para proporcionarle mi dirección y completar la compra. Desde ya, agradezco su atención y disposición. `;

    window.open(
      `https://api.whatsapp.com/send?phone=573142179656&text=${message}`
    );
  };

  return (
    <>
      <section className="cart_section_general">
        <h1 className="cart_title">Carrito de compras</h1>

        <section className="cart_sections">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <Cart_item key={product.id} data={product} />;
            }
          })}
        </section>

        {totalAmount > 0 ? (
          <section className="cart_btn">
            <p className="total">Total = ${totalAmount}</p>
            <button className="btn_cart" onClick={handleContinueShopping}>
              continue shooping
            </button>
          </section>
        ) : (
          <h1 className="cart_subtitle">El carrito esta vacio</h1>
        )}
      </section>
    </>
  );
};

export default Cart;
