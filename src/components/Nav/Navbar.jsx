import React, { useContext } from "react";
import "../Nav/Navbar.css";
import Maxipan from "../../assets/logos/maxipan.webp";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/Shop_context";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalItems = Object.values(cartItems).reduce(
    (total, currentValue) => total + currentValue,
    0
  );
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid information_container">
          <i className="bi bi-clock nav_icons">
            <span className="text_icon">5:00 am - 11:00 pm</span>
          </i>
          <i className="bi bi-bell nav_icons">
            <span className="text_icon">Desayuno hasta las 11:00 am</span>
          </i>
        </div>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Maxipan} alt="logo" className="logo_nav" />
          </Link>

          <Link to="/cart" className="cart_a">
            <i className="bi bi-cart icon_cart"></i>
           <span className="contador_nav">{totalItems}</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon icon_menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/crea-tu-pastel" className="nav-link">
                  Tu pastel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactanos" className="nav-link">
                  Contactanos
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contactanos" className="nav-link">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
