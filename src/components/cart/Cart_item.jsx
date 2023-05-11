import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/Shop_context";
import "../cart/cart_item.css";

const Cart_item = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id, productName, price, productImg } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <section className="cart_item_container">
      <img src={productImg} width={"100%"} alt="" />
      <p className="item_title">{productName}</p>
      <p className="item_price">${price}</p>
      <div className="input_container">
        <button onClick={() => removeFromCart(id)} className="button_menos">
          -
        </button>
        <input
          className="input_cart"
          type={"number"}
          max={100}
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button className="button_max" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </section>
  );
};

export default Cart_item;
