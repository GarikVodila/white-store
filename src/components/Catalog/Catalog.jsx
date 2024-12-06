import React, { useState } from "react";

import img from './img/moncler-jacket.png'

import './Catalog.scss'

// Пример данных
const products = [
  { id: 1, 
    name: "Moncler Enfant New Maya Down Jacket", 
    img:'https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FsnaQ2HmDAnW76nRUQ16s%2Fasset.png?alt=media&token=15437eef-e60a-44e3-a78c-83eb0089180e', 
    art: 1457, 
    category: "jacket", 
    price: 799, 
    "size" : "s-xxl",
    "color": "black" 
  },

  { id: 2, 
    name: "Moncler Enfant New Maya Down Jacket",
    img:'https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FgDPfLZ3E8peArBhmQsUs%2Fasset.png?alt=media&token=f11a2b41-868a-4408-bb86-fa820acd1891', 
    art: 1458, 
    category: "jacket",
    price: 799,
    "size" : "s-xxl", 
    "color": "white"
  },

  { id: 3, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FXrkeE99BEPyXnnftVZZr%2Fasset.png?alt=media&token=11b753be-f91d-46b9-b96c-14e33f91a706",
    art: 8731,
    color: "pink", 
    size: "m-xl", 
    category: "hoodie", 
    price: 450 
  },

  { id: 4, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FhT17cITeCq8PJtQi3AuB%2Fasset.png?alt=media&token=7e44d2a2-73ca-4001-bc77-14eeef808e3f",
    "art": 8732,
    "color": "red", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 450 
  },

  { id: 5, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FWTImiNcYiwG4k61QYstD%2Fasset.png?alt=media&token=0ed239b9-f4e1-459d-ba1c-81f199fb150f",
    "art": 8733,
    "color": "grey", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 450 
  },

  { id: 6, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F3QhM5re61V2BE3rG3Ryt%2Fasset.png?alt=media&token=01463984-3e72-471f-bf5f-bb5df9ba0fdf",
    "art": 8734,
    "color": "blue", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 450 
  },

  { id: 7, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F8JkeB8vuZ6NUl5sjWOyH%2Fasset.png?alt=media&token=c9f41a8c-7f83-46c6-bfe8-855b8ca03c1b",
    "art": 8736,
    "color": "purple", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 450 
  },

  { id: 8, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FOza0JzRvRExI3zmRc1zT%2Fasset.png?alt=media&token=c81d943f-d0c6-44e1-8c19-624cd94c1499",
    "art": 1322,
    "color": "grey", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 300 
  },

  { id: 9, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FLDyjTPqPjpt8N4mg1QBs%2Fasset.png?alt=media&token=adbeadae-8876-4f39-b02b-6c192e8b1e48",
    "art": 1323,
    "color": "white", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 300 
  },

  { id: 10, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FycIjMOQGJJqKhdNm8PMD%2Fasset.png?alt=media&token=9cb4fc3a-888b-4459-bf8a-94facf98d13b",
    "art": 1324,
    "color": "black", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 300 
  },

  { id: 11, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FwRjgdfz5DLLt4u3ndpoj%2Fasset.png?alt=media&token=72c668ae-61e1-4222-9665-30071c6ee2f4",
    "art": 1325,
    "color": "red", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 300 
  },

  { id: 12, 
    name: "Sweater Lv Maison Ringo",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FZjCdoo0Iref04UAJu9fP%2Fasset.png?alt=media&token=7a7c9c34-f446-4cbe-a035-77c18f27d502",
    "art": 1874,
    "color": "black", 
    "size" : "m-xl", 
    category: "sweater", 
    price: 600 
  },

  { id: 13, 
    name: "T-shirt Balenciaga Sport Type",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F1WnCCLwVmz3UWyteQRLz%2Fasset.png?alt=media&token=0fff71a6-0c2e-4160-8a4f-8ab8659eaf01",
    "art": 1952,
    "color": "black", 
    "size" : "s-xl", 
    category: "Tshirt", 
    price: 200 
  },

  // { id: 14, 
  //   name: "Stussy Skull T-shirt",
  //   img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F1WnCCLwVmz3UWyteQRLz%2Fasset.png?alt=media&token=0fff71a6-0c2e-4160-8a4f-8ab8659eaf01",
  //   "art": 4502,
  //   "color": "black", 
  //   "size" : "xs-l", 
  //   category: "Tshirt", 
  //   price: 180 
  // },
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
                <option className="brend__type-item" value="sport-suit">Спортивный костюм</option>
                <option className="brend__type-item" value="Tshirt">Футболка</option>
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