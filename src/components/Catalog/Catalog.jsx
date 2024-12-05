import React, { useState } from "react";

import './Catalog.scss'

// Пример данных
const products = [
  { id: 1, name: "Moncler Enfant New Maya Down Jacket", img: "../img/moncler-jacket.png","art": 1457, category: "jacket", price: 600, "size" : "s-xxl","color": "black|white" },
  { id: 2, name: "Arcteryx Jacket", category: "jacket", price: 400, "size" : "m-xl", "color": "black|cream","art": 2605 },
  { id: 3, name: "Bape Camo Shark", "art": 8736,  "color": "red|blue|white|balck|+8", "size" : "m-xl", category: "hoodie", price: 250 },
  { id: 4, name: "Stone Islang Vest", "art": 8401, "color": "black|beige", "size" : "m-xl", category: "jacket", price: 32},
  { id: 5, name: "LOUIS VUITTON Sweater", "art": 1874, "color": "black|cream", "size" : "m-xl", category: "sweater", price: 500 },
];

const Catalog = () => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="catalog-row">

      <div className="filter__container">
        <p className="brend__title">Бренды</p>
        <div className="brend__type-row">
            <label className="brend__type-name" htmlFor="category">Вид одежды:</label>
            <select className="brend__type-system"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option className="brend__type-item" value="all">Все</option>
                <option className="brend__type-item" value="jacket">Куртки</option>
                <option className="brend__type-item" value="hoodie">Худи</option>
                <option className="brend__type-item" value="sweater">Свитер</option>
            </select>
        </div>

        <div className="brend__price">
            <p className="brend__price-title" htmlFor="price">Цена: {priceRange}Lv</p>
            <input
            className="brend__price-input"
            id="price"
            type="range"
            min="10"
            max="2000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            />
        </div>
      </div>

      
      {/* Список отфильтрованных товаров */}

      <div className="catalog__system ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="catalog__item" key={product.id}>
                <p className="catalog__item-art">art:{product.art}</p>
                <img className="catalog__item-img" src={product.img} alt="#" />
                <h3 className="catalog__item-title">{product.name}</h3>
                <div className="catalog__item-row">
                    <p className="catalog__item-size">{product.size}</p>
                    <p className="catalog__item-color">{product.color}</p>
                </div>
                <p className="catalog__item-prise" >{product.price}Lv</p>
            </div>
          ))
        ) : (
          <p className="catalog__no">No products found</p>
        )}
      </div>

    </div>
  );
};

export default Catalog;