import React, { useState, useEffect } from "react";
import "../Productos/producto.css";
import { PRODUCTS } from "../../data/products.js";
import Mercancia from "./Mercancia";

const Producto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "" || product.categoria === categoryFilter)
  );

  return (
    <>
      <section className="producto_container_general">
        <div className="filtro_container">
          <input
            type="text"
            className="filtro_input"
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleInputChange}
          />

          <div>
            <label htmlFor="category" className="title_category">
              Categoria:
            </label>
            <select
              id="category"
              onChange={handleCategoryChange}
              value={categoryFilter}
            >
              <option value="">Todos</option>
              <option value="comida rapida">Comida rápida</option>
              <option value="panaderia">Panaderia</option>
              <option value="reposteria">Reposteria</option>
              <option value="productos varios">Productos varios</option>
              <option value="restaurante">Restaurante</option>
              <option value="polleria">Polleria</option>
            </select>
          </div>
        </div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Mercancia key={product.id} data={product} />
          ))
        ) : (
          <p className="not_found">
            No se encontraron resultados para su búsqueda.
          </p>
        )}
      </section>
    </>
  );
};

export default Producto;
