import React, { useState } from "react";

import '../Catalog.scss'

// Пример данных
const products = [
  { id: 1, 
    name: "Moncler Enfant New Maya Down Jacket", 
    img:'https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FsnaQ2HmDAnW76nRUQ16s%2Fasset.png?alt=media&token=15437eef-e60a-44e3-a78c-83eb0089180e', 
    art: 1457, 
    category: "jacket", 
    price: 699, 
    size : "s-xxl",
    color: "black",
    brand: "moncler"
  },

  { id: 2, 
    name: "Moncler Enfant New Maya Down Jacket",
    img:'https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F6jFIIQwCaDN2xix3770y%2Fasset.png?alt=media&token=9ceb2586-8379-4b48-9271-fb2161d113e6', 
    art: 1458, 
    category: "jacket",
    price: 699,
    size : "s-xxl", 
    color: "white",
    brand: "moncler"
  },

  { id: 3, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FXrkeE99BEPyXnnftVZZr%2Fasset.png?alt=media&token=11b753be-f91d-46b9-b96c-14e33f91a706",
    art: 8731,
    color: "pink", 
    size: "m-xl", 
    category: "hoodie", 
    price: 400 ,
    brand: "bape"
  },

  { id: 4, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FhT17cITeCq8PJtQi3AuB%2Fasset.png?alt=media&token=7e44d2a2-73ca-4001-bc77-14eeef808e3f",
    "art": 8732,
    "color": "red", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 400 ,
    brand: "bape"
  },

  { id: 5, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FWTImiNcYiwG4k61QYstD%2Fasset.png?alt=media&token=0ed239b9-f4e1-459d-ba1c-81f199fb150f",
    "art": 8733,
    "color": "grey", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 400  ,
    brand: "bape"
  },

  { id: 6, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F3QhM5re61V2BE3rG3Ryt%2Fasset.png?alt=media&token=01463984-3e72-471f-bf5f-bb5df9ba0fdf",
    "art": 8734,
    "color": "blue", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 400  ,
    brand: "bape"
  },

  { id: 7, 
    name: "Bape Camo Shark",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F8JkeB8vuZ6NUl5sjWOyH%2Fasset.png?alt=media&token=c9f41a8c-7f83-46c6-bfe8-855b8ca03c1b",
    "art": 8736,
    "color": "purple", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 400  ,
    brand: "bape"
  },

  { id: 8, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FOza0JzRvRExI3zmRc1zT%2Fasset.png?alt=media&token=c81d943f-d0c6-44e1-8c19-624cd94c1499",
    "art": 1322,
    "color": "grey", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 299  ,
    brand: "nike"
  },

  { id: 9, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FLDyjTPqPjpt8N4mg1QBs%2Fasset.png?alt=media&token=adbeadae-8876-4f39-b02b-6c192e8b1e48",
    "art": 1323,
    "color": "white", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 299 ,
    brand: "nike"
  },

  { id: 10, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FycIjMOQGJJqKhdNm8PMD%2Fasset.png?alt=media&token=9cb4fc3a-888b-4459-bf8a-94facf98d13b",
    "art": 1324,
    "color": "black", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 299 ,
    brand: "nike"
  },

  { id: 11, 
    name: "Nike Tech Fleece",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FwRjgdfz5DLLt4u3ndpoj%2Fasset.png?alt=media&token=72c668ae-61e1-4222-9665-30071c6ee2f4",
    "art": 1325,
    "color": "red", 
    "size" : "m-xl", 
    category: "sport-suit", 
    price: 299 ,
    brand: "nike"
  },

  { id: 12, 
    name: "Sweater Lv Maison Ringo",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FZjCdoo0Iref04UAJu9fP%2Fasset.png?alt=media&token=7a7c9c34-f446-4cbe-a035-77c18f27d502",
    "art": 1874,
    "color": "black", 
    "size" : "m-xl", 
    category: "sweater", 
    price: 420 ,
    brand: "lv"
  },

  { id: 13, 
    name: "T-shirt Balenciaga Sport Type",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F1WnCCLwVmz3UWyteQRLz%2Fasset.png?alt=media&token=0fff71a6-0c2e-4160-8a4f-8ab8659eaf01",
    "art": 1952,
    "color": "black", 
    "size" : "xs-l", 
    category: "Tshirt", 
    price: 270 ,
    brand: "balenciaga"
  },

  { id: 14, 
    name: "Stussy Skull T-shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2Fn8zgFfL5WKH89CTz7bX6%2Fasset.png?alt=media&token=ee4497aa-2114-45ed-9853-0e41299bbdd8",
    "art": 4502,
    "color": "white", 
    "size" : "s-xl", 
    category: "Tshirt", 
    price: 160 ,
    brand: "stussy"
  },

  { id: 15, 
    name: "Stussy & Born X Raised 8 Ball Tee T-shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F84klr5HnVAsu2Cl5OPA3%2Fasset.png?alt=media&token=ff5f65d4-4f9e-4c84-9ee8-bfa4bf7c7c47",
    "art": 4503,
    "color": "white", 
    "size" : "s-xl", 
    category: "Tshirt", 
    price: 160 ,
    brand: "stussy"
  },

  { id: 16, 
    name: "Stussy USA Pig T-shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FvN935CA2UyyiZsfnoPiH%2Fasset.png?alt=media&token=beaeb72f-9087-4e4a-9d94-a140802b81ef",
    "art": 4504,
    "color": "white", 
    "size" : "s-xl", 
    category: "Tshirt", 
    price: 120 ,
    brand: "stussy"
  },

  { id: 17, 
    name: "Stussy Pufer Jacket",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FWrkvaqav22KpnVs4yxXb%2Fasset.png?alt=media&token=de76c12e-2522-4bc9-91de-cddff88694c5",
    "art": 4525,
    "color": "black", 
    "size" : "xs-l", 
    category: "jacket", 
    price: 260,
    brand: "stussy"
  },

  { id: 18, 
    name: "Stone Island Longslev",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FfXZ6Kq0ruJ5q46M6Egfd%2Fasset.png?alt=media&token=38c79750-2e92-4a38-90f0-eb5fde17f154",
    "art": 8403,
    "color": "black", 
    "size" : "s-xl", 
    category: "sweater", 
    price: 430,
    brand: "stone-island"
  },

  { id: 19, 
    name: "Stone Island Longslev",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FKn8IQt0Lz4yYDhLU175w%2Fasset.png?alt=media&token=7cc36543-9c5a-4246-9d9a-02957620158c",
    "art": 8404,
    "color": "white", 
    "size" : "s-xl", 
    category: "sweater", 
    price: 430,
    brand: "stone-island"
  },

  { id: 20, 
    name: "LV Premium T-shirt",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2Fv9pP53ZKWjIurlwIMLkE%2Fasset.png?alt=media&token=07dab079-a48f-41b6-be7e-82fe6afff80a",
    "art": 1915,
    "color": "black", 
    "size" : "s-xl", 
    category: "Tshirt", 
    price: 299,
    brand: "lv"
  },

  { id: 21, 
    name: "Stone Island Vest",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FG4aI2t2HeNEKzHzArdH4%2Fasset.png?alt=media&token=36e82382-464e-48fe-a306-16310c9ef052",
    "art": 8401,
    "color": "black|white", 
    "size" : "m-xl", 
    category: "jacket", 
    price: 399,
    brand: "stone-island"
  },

  { id: 22, 
    name: "Stone Island Jacket",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FX3krxcNjeHOuT4Mt4q0p%2Fasset.png?alt=media&token=1ab9a823-7366-4c4f-aecc-0073e9b82e1b",
    "art": 8402,
    "color": "black", 
    "size" : "m-xl", 
    category: "jacket", 
    price: 420,
    brand: "stone-island"
  },

  { id: 23, 
    name: "Stone Island Jacket Classic Luxury ",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FBaO0qAeQCQTNF6V5k0dJ%2Fasset.png?alt=media&token=acf944be-c0ba-41b3-9582-ffbea6be4977",
    "art": 8405,
    "color": "grey|blue", 
    "size" : "m-xl", 
    category: "jacket", 
    price: 499,
    brand: "stone-island"
  },
  { id: 24, 
    name: "Stussy Zip Hoodie",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FPbEdEgjFr84NTjW0WWiY%2Fasset.png?alt=media&token=3a81db0e-4093-4329-aa7b-03307b04140c",
    "art": 4512,
    "color": "black", 
    "size" : "s-xl", 
    category: "hoodie", 
    price: 250,
    brand: "stussy",
  },
  { id: 25, 
    name: "Nike X Nocta",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FgGF4NT9NbU5rmZBqjkL3%2Fasset.png?alt=media&token=e10ac2ee-fefe-4d4b-a2e0-43b1aa0aec25",
    "art": 1355,
    "color": "black", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 270,
    brand: "nike"
  },
  { id: 26, 
    name: "Nike X Nocta",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FK8RrPK1k5Bbzs44fmfR7%2Fasset.png?alt=media&token=d8425a54-35b2-47ee-a363-cc2cf8ebd8b0",
    "art": 1356,
    "color": "green", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 270,
    brand: "nike"
  },
  { id: 27, 
    name: "Nike X Nocta",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FXONxtREmKUSDUvtaZYUv%2Fasset.png?alt=media&token=ae417d5c-edd0-449f-88df-5de896b3ef9c",
    "art": 1357,
    "color": "skyblue", 
    "size" : "m-xl", 
    category: "hoodie", 
    price: 270,
    brand: "nike"
  },
  { id: 28, 
    name: "Louis Vuitton Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FidsOmwcobV4uT7JLDOJp%2Fasset.png?alt=media&token=e4105110-4d88-4d69-b2b1-5d35e45f83df",
    "art": 1867,
    "color": "black", 
    "size" : "s-l", 
    category: "sweater", 
    price: 450,
    brand: "lv"
  },
  { id: 29, 
    name: "Louis Vuitton Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FF33nTTbncw8Mka5iXJvr%2Fasset.png?alt=media&token=0bc43e57-9e01-4ae4-93c5-40598a699ad2",
    "art": 1868,
    "color": "red", 
    "size" : "s-l", 
    category: "sweater", 
    price: 450,
    brand: "lv"
  },
  { id: 30, 
    name: "Louis Vuitton Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FCAWsgPOtkkCG4DDGhiZe%2Fasset.png?alt=media&token=c5541055-1d18-4806-b7fe-10f0685955b9",
    "art": 1869,
    "color": "blue", 
    "size" : "s-l", 
    category: "sweater", 
    price: 450,
    brand: "lv"
  },
  { id: 31, 
    name: "Evisu Boomder",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FW6oBiaPAqchDnlryJi5r%2Fasset.png?alt=media&token=db545b67-fa32-4678-a179-a53f2b1d387f",
    "art": 3175,
    "color": "blue", 
    "size" : "s-xl", 
    category: "jacket", 
    price: 450,
    brand: "evisu"
  },
  { id: 32, 
    name: "Ralph Lauren Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FjeYPDXpORHgJqXhZW7zy%2Fasset.png?alt=media&token=25bbc31a-050d-4f61-8aa0-a579c988716c",
    "art": 1415,
    "color": "cream", 
    "size" : "s-xl", 
    category: "sweater", 
    price: 149,
    brand: "ralph-lauren"
  },
  { id: 33, 
    name: "Ralph Lauren Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FLOgHJUBlfhBayOAJBhSd%2Fasset.png?alt=media&token=c004c460-4457-45fa-ae62-93460abd2564",
    "art": 1415,
    "color": "black", 
    "size" : "s-xl", 
    category: "sweater", 
    price: 149,
    brand: "ralph-lauren"
  },
  { id: 34, 
    name: "Ralph Lauren Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FSTXXRAnSfjz8tG7zIniT%2Fasset.png?alt=media&token=c89106f2-0c2f-4f9f-8426-7c594e344673",
    "art": 1425,
    "color": "cream", 
    "size" : "s-xl", 
    category: "jacket", 
    price: 280,
    brand: "ralph-lauren"
  },
  { id: 35, 
    name: "Ralph Lauren Sweater",
    img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FQPx3i9UIvbzLsy8WIjzW%2Fasset.png?alt=media&token=5b0ab81d-91cd-4ec2-ab84-15ecf897c574",
    "art": 1426,
    "color": "coffee", 
    "size" : "s-xl", 
    category: "jacket", 
    price: 280,
    brand: "ralph-lauren"
  },
];
const CatalogBg = () => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [brand, setBrand] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesPrice = product.price <= priceRange;
    const matchesBrend = brand === "all" || product.brand === brand;
    return matchesCategory && matchesPrice && matchesBrend;
  });

  return (
    <div className="catalog-row">

      <div className="filter__container">
        <p className="brend__title">Филтър</p>
        <div className="firlter-row">
          <div className="brend__type-row">
              <label className="brend__type-name" htmlFor="category">Вид одежды:</label>
              <select className="brend__type-system"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              >
                  <option className="brend__type-item" value="all">Всички</option>
                  <option className="brend__type-item" value="jacket">Яке</option>
                  <option className="brend__type-item" value="hoodie">Kачулка</option>
                  <option className="brend__type-item" value="sweater">Пуловер</option>
                  <option className="brend__type-item" value="sport-suit">Спортен костюм</option>
                  <option className="brend__type-item" value="Tshirt">Tениска</option>
              </select>
          </div>

          <div className="brend__price">
              <p className="brend__price-title" htmlFor="price">Цена: {priceRange}Lv</p>
              <input
              className="brend__price-input"
              id="price"
              type="range"
              min="120"
              max="1500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              />
          </div>

          <div className="brend__box">
            <p className="brend__box-title">Марки </p>
              <select className="brend__box-system"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  >
                  <option className="brend__box-item" value="all">Всички</option>
                  <option className="brend__box-item" value="bape">Bape</option>
                  <option className="brend__box-item" value="stone-island">Stone Island</option>
                  <option className="brend__box-item" value="lv">LOUIS VUITTON</option>
                  <option className="brend__box-item" value="moncler">Moncler</option>
                  <option className="brend__box-item" value="nike">Nike</option>
                  <option className="brend__box-item" value="stussy">Stussy</option>
                  <option className="brend__box-item" value="evisu">Evisu</option>
                  <option className="brend__box-item" value="ralph-lauren">Ralph Lauren</option>
              </select>
          </div>
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

export default CatalogBg;