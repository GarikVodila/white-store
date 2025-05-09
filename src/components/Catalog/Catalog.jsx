import React, { useState } from "react";
import './Catalog.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Пример данных
// const products = [
//   { id: 1, 
//     name: "Nike Air Force 1 Low '07 LV8", 
//     img:'https://i.ibb.co/fz9J0LRT/acetone-202557-14312-993-1.png',
//     art: 2560, 
//     category: "shoose", 
//     price: 179, 
//     size : "39-45",
//     color: "Desert Khaki Black",
//     brand: "nike"
//   },

//   { id: 2, 
//     name: "Nike AIR FORCE 1 MID",
//     img:'https://i.ibb.co/HTNKYQP0/acetone-202557-145548-640-1.png', 
//     art: 2561, 
//     category: "shoose",
//     price: 179,
//     size : "36-45", 
//     color: "white",
//     brand: "nike"
//   },

//   { id: 3, 
//     name: "Bape Camo Shark",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FXrkeE99BEPyXnnftVZZr%2Fasset.png?alt=media&token=11b753be-f91d-46b9-b96c-14e33f91a706",
//     art: 8731,
//     color: "pink", 
//     size: "m-xl", 
//     category: "hoodie", 
//     price: 400 ,
//     brand: "bape"
//   },

//   { id: 4, 
//     name: "Bape Camo Shark",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FhT17cITeCq8PJtQi3AuB%2Fasset.png?alt=media&token=7e44d2a2-73ca-4001-bc77-14eeef808e3f",
//     "art": 8732,
//     "color": "red", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 400 ,
//     brand: "bape"
//   },

//   { id: 5, 
//     name: "Bape Camo Shark",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FWTImiNcYiwG4k61QYstD%2Fasset.png?alt=media&token=0ed239b9-f4e1-459d-ba1c-81f199fb150f",
//     "art": 8733,
//     "color": "grey", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 400  ,
//     brand: "bape"
//   },

//   { id: 6, 
//     name: "Bape Camo Shark",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F3QhM5re61V2BE3rG3Ryt%2Fasset.png?alt=media&token=01463984-3e72-471f-bf5f-bb5df9ba0fdf",
//     "art": 8734,
//     "color": "blue", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 400  ,
//     brand: "bape"
//   },

//   { id: 7, 
//     name: "Bape Camo Shark",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F8JkeB8vuZ6NUl5sjWOyH%2Fasset.png?alt=media&token=c9f41a8c-7f83-46c6-bfe8-855b8ca03c1b",
//     "art": 8736,
//     "color": "purple", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 400  ,
//     brand: "bape"
//   },

//   { id: 8, 
//     name: "Nike Tech Fleece",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FOza0JzRvRExI3zmRc1zT%2Fasset.png?alt=media&token=c81d943f-d0c6-44e1-8c19-624cd94c1499",
//     "art": 1322,
//     "color": "grey", 
//     "size" : "m-xl", 
//     category: "sport-suit", 
//     price: 299  ,
//     brand: "nike"
//   },

//   { id: 9, 
//     name: "Nike Tech Fleece",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FLDyjTPqPjpt8N4mg1QBs%2Fasset.png?alt=media&token=adbeadae-8876-4f39-b02b-6c192e8b1e48",
//     "art": 1323,
//     "color": "white", 
//     "size" : "m-xl", 
//     category: "sport-suit", 
//     price: 299 ,
//     brand: "nike"
//   },

//   { id: 10, 
//     name: "Nike Tech Fleece",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FycIjMOQGJJqKhdNm8PMD%2Fasset.png?alt=media&token=9cb4fc3a-888b-4459-bf8a-94facf98d13b",
//     "art": 1324,
//     "color": "black", 
//     "size" : "m-xl", 
//     category: "sport-suit", 
//     price: 299 ,
//     brand: "nike"
//   },

//   { id: 11, 
//     name: "Nike Tech Fleece",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FwRjgdfz5DLLt4u3ndpoj%2Fasset.png?alt=media&token=72c668ae-61e1-4222-9665-30071c6ee2f4",
//     "art": 1325,
//     "color": "red", 
//     "size" : "m-xl", 
//     category: "sport-suit", 
//     price: 299 ,
//     brand: "nike"
//   },

//   { id: 12, 
//     name: "Sweater Lv Maison Ringo",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FZjCdoo0Iref04UAJu9fP%2Fasset.png?alt=media&token=7a7c9c34-f446-4cbe-a035-77c18f27d502",
//     "art": 1874,
//     "color": "black", 
//     "size" : "m-xl", 
//     category: "sweater", 
//     price: 420 ,
//     brand: "lv"
//   },

//   { id: 13, 
//     name: "T-shirt Balenciaga Sport Type",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F1WnCCLwVmz3UWyteQRLz%2Fasset.png?alt=media&token=0fff71a6-0c2e-4160-8a4f-8ab8659eaf01",
//     "art": 1952,
//     "color": "black", 
//     "size" : "xs-l", 
//     category: "Tshirt", 
//     price: 270 ,
//     brand: "balenciaga"
//   },

//   { id: 14, 
//     name: "Stussy Skull T-shirt",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2Fn8zgFfL5WKH89CTz7bX6%2Fasset.png?alt=media&token=ee4497aa-2114-45ed-9853-0e41299bbdd8",
//     "art": 4502,
//     "color": "white", 
//     "size" : "s-xl", 
//     category: "Tshirt", 
//     price: 160 ,
//     brand: "stussy"
//   },

//   { id: 15, 
//     name: "Stussy & Born X Raised 8 Ball Tee T-shirt",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2F84klr5HnVAsu2Cl5OPA3%2Fasset.png?alt=media&token=ff5f65d4-4f9e-4c84-9ee8-bfa4bf7c7c47",
//     "art": 4503,
//     "color": "white", 
//     "size" : "s-xl", 
//     category: "Tshirt", 
//     price: 160 ,
//     brand: "stussy"
//   },

//   { id: 16, 
//     name: "Stussy USA Pig T-shirt",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FvN935CA2UyyiZsfnoPiH%2Fasset.png?alt=media&token=beaeb72f-9087-4e4a-9d94-a140802b81ef",
//     "art": 4504,
//     "color": "white", 
//     "size" : "s-xl", 
//     category: "Tshirt", 
//     price: 120 ,
//     brand: "stussy"
//   },

//   { id: 17, 
//     name: "Stussy Pufer Jacket",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FWrkvaqav22KpnVs4yxXb%2Fasset.png?alt=media&token=de76c12e-2522-4bc9-91de-cddff88694c5",
//     "art": 4525,
//     "color": "black", 
//     "size" : "xs-l", 
//     category: "jacket", 
//     price: 260,
//     brand: "stussy"
//   },

//   { id: 18, 
//     name: "Stone Island Longslev",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FfXZ6Kq0ruJ5q46M6Egfd%2Fasset.png?alt=media&token=38c79750-2e92-4a38-90f0-eb5fde17f154",
//     "art": 8403,
//     "color": "black", 
//     "size" : "s-xl", 
//     category: "sweater", 
//     price: 430,
//     brand: "stone-island"
//   },

//   { id: 19, 
//     name: "Stone Island Longslev",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FKn8IQt0Lz4yYDhLU175w%2Fasset.png?alt=media&token=7cc36543-9c5a-4246-9d9a-02957620158c",
//     "art": 8404,
//     "color": "white", 
//     "size" : "s-xl", 
//     category: "sweater", 
//     price: 430,
//     brand: "stone-island"
//   },

//   { id: 20, 
//     name: "LV Premium T-shirt",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2Fv9pP53ZKWjIurlwIMLkE%2Fasset.png?alt=media&token=07dab079-a48f-41b6-be7e-82fe6afff80a",
//     "art": 1915,
//     "color": "black", 
//     "size" : "s-xl", 
//     category: "Tshirt", 
//     price: 299,
//     brand: "lv"
//   },

//   { id: 21, 
//     name: "Stone Island Vest",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FG4aI2t2HeNEKzHzArdH4%2Fasset.png?alt=media&token=36e82382-464e-48fe-a306-16310c9ef052",
//     "art": 8401,
//     "color": "black|white", 
//     "size" : "m-xl", 
//     category: "jacket", 
//     price: 399,
//     brand: "stone-island"
//   },

//   { id: 22, 
//     name: "Stone Island Jacket",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FX3krxcNjeHOuT4Mt4q0p%2Fasset.png?alt=media&token=1ab9a823-7366-4c4f-aecc-0073e9b82e1b",
//     "art": 8402,
//     "color": "black", 
//     "size" : "m-xl", 
//     category: "jacket", 
//     price: 420,
//     brand: "stone-island"
//   },

//   { id: 23, 
//     name: "Stone Island Jacket Classic Luxury ",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FBaO0qAeQCQTNF6V5k0dJ%2Fasset.png?alt=media&token=acf944be-c0ba-41b3-9582-ffbea6be4977",
//     "art": 8405,
//     "color": "grey|blue", 
//     "size" : "m-xl", 
//     category: "jacket", 
//     price: 499,
//     brand: "stone-island"
//   },
//   { id: 24, 
//     name: "Stussy Zip Hoodie",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FPbEdEgjFr84NTjW0WWiY%2Fasset.png?alt=media&token=3a81db0e-4093-4329-aa7b-03307b04140c",
//     "art": 4512,
//     "color": "black", 
//     "size" : "s-xl", 
//     category: "hoodie", 
//     price: 250,
//     brand: "stussy",
//   },
//   { id: 25, 
//     name: "Nike X Nocta",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FgGF4NT9NbU5rmZBqjkL3%2Fasset.png?alt=media&token=e10ac2ee-fefe-4d4b-a2e0-43b1aa0aec25",
//     "art": 1355,
//     "color": "black", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 270,
//     brand: "nike"
//   },
//   { id: 26, 
//     name: "Nike X Nocta",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FK8RrPK1k5Bbzs44fmfR7%2Fasset.png?alt=media&token=d8425a54-35b2-47ee-a363-cc2cf8ebd8b0",
//     "art": 1356,
//     "color": "green", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 270,
//     brand: "nike"
//   },
//   { id: 27, 
//     name: "Nike X Nocta",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FXONxtREmKUSDUvtaZYUv%2Fasset.png?alt=media&token=ae417d5c-edd0-449f-88df-5de896b3ef9c",
//     "art": 1357,
//     "color": "skyblue", 
//     "size" : "m-xl", 
//     category: "hoodie", 
//     price: 270,
//     brand: "nike"
//   },
//   { id: 28, 
//     name: "Louis Vuitton Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FidsOmwcobV4uT7JLDOJp%2Fasset.png?alt=media&token=e4105110-4d88-4d69-b2b1-5d35e45f83df",
//     "art": 1867,
//     "color": "black", 
//     "size" : "s-l", 
//     category: "sweater", 
//     price: 450,
//     brand: "lv"
//   },
//   { id: 29, 
//     name: "Louis Vuitton Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FF33nTTbncw8Mka5iXJvr%2Fasset.png?alt=media&token=0bc43e57-9e01-4ae4-93c5-40598a699ad2",
//     "art": 1868,
//     "color": "red", 
//     "size" : "s-l", 
//     category: "sweater", 
//     price: 450,
//     brand: "lv"
//   },
//   { id: 30, 
//     name: "Louis Vuitton Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FCAWsgPOtkkCG4DDGhiZe%2Fasset.png?alt=media&token=c5541055-1d18-4806-b7fe-10f0685955b9",
//     "art": 1869,
//     "color": "blue", 
//     "size" : "s-l", 
//     category: "sweater", 
//     price: 450,
//     brand: "lv"
//   },
//   { id: 31, 
//     name: "Evisu Boomder",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FW6oBiaPAqchDnlryJi5r%2Fasset.png?alt=media&token=db545b67-fa32-4678-a179-a53f2b1d387f",
//     "art": 3175,
//     "color": "blue", 
//     "size" : "s-xl", 
//     category: "jacket", 
//     price: 450,
//     brand: "evisu"
//   },
//   { id: 32, 
//     name: "Ralph Lauren Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FjeYPDXpORHgJqXhZW7zy%2Fasset.png?alt=media&token=25bbc31a-050d-4f61-8aa0-a579c988716c",
//     "art": 1415,
//     "color": "cream", 
//     "size" : "s-xl", 
//     category: "sweater", 
//     price: 149,
//     brand: "ralph-lauren"
//   },
//   { id: 33, 
//     name: "Ralph Lauren Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FLOgHJUBlfhBayOAJBhSd%2Fasset.png?alt=media&token=c004c460-4457-45fa-ae62-93460abd2564",
//     "art": 1415,
//     "color": "black", 
//     "size" : "s-xl", 
//     category: "sweater", 
//     price: 149,
//     brand: "ralph-lauren"
//   },
//   { id: 34, 
//     name: "Ralph Lauren Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FSTXXRAnSfjz8tG7zIniT%2Fasset.png?alt=media&token=c89106f2-0c2f-4f9f-8426-7c594e344673",
//     "art": 1425,
//     "color": "cream", 
//     "size" : "s-xl", 
//     category: "jacket", 
//     price: 280,
//     brand: "ralph-lauren"
//   },
//   { id: 35, 
//     name: "Ralph Lauren Sweater",
//     img: "https://firebasestorage.googleapis.com/v0/b/flair-ai.appspot.com/o/assetsV2%2FQPx3i9UIvbzLsy8WIjzW%2Fasset.png?alt=media&token=5b0ab81d-91cd-4ec2-ab84-15ecf897c574",
//     "art": 1426,
//     "color": "coffee", 
//     "size" : "s-xl", 
//     category: "jacket", 
//     price: 280,
//     brand: "ralph-lauren"
//   },
// ];

const products = [
    { id: 1, 
      name: "Nike Air Force 1 Low '07 LV8", 
      image:[
        'https://i.ibb.co/fz9J0LRT/acetone-202557-14312-993-1.png',
      ],
      art: 2560, 
      category: "shoose", 
      price: 179, 
      size : "39-45",
      color: "Desert Khaki Black",
      brand: "nike"
    },

    { id: 2, 
      name: "Nike AIR FORCE 1 MID",
      image:[
        'https://i.ibb.co/KxV1Hvkz/2025-05-07-173314938-1.png',
        'https://i.ibb.co/x9zJVdY/2025-05-07-173528761.png'
      ], 
      art: 2561, 
      category: "shoose",
      price: 179,
      size : "36-45", 
      color: "White",
      brand: "nike"
    },

    { id: 3, 
      name: "Nike Dunk Low University",
      image:[
        'https://i.ibb.co/TBgxrVrR/2025-05-07-170704092.png',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/59f2c068-a00a-49b3-8f16-e59ab625c39b/dunk-low-white-and-university-red-cu1727-100-release-date.jpg',
        'https://i.ibb.co/38v6JvF/acetone-202557-15428-242.png',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/b7989758-77dd-43e0-b5ad-5377f9574aa5/dunk-low-university-blue-release-date.jpg'
      ], 
      art: 2562, 
      category: "shoose",
      price: 189,
      size : "36-45", 
      color: "red|blue",
      brand: "nike"
    },

    { id: 4, 
      name: "Grateful Dead SB Dunk Mid",
      image:[
        'https://i.ibb.co/fd0TMtWQ/2025-05-07-170927465.png',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/14aeea6a-cd6a-44e1-b417-0fbf77266456/sb-dunk-low-pro-x-grateful-dead-opti-yellow-release-date.jpg',
        'https://i.ibb.co/bjJmXgP1/acetone-202557-171636-29-1.png',
        'https://i.ibb.co/14Prbct/2025-05-07-171909207-Photoroom.png',
        'https://i.ibb.co/4gCVT6s5/2025-05-07-172117544-Photoroom.png',
        'https://i.ibb.co/sdf0vZQY/2025-05-07-172223993-Photoroom.png'
      ], 
      art: 2563, 
      category: "shoose",
      price: 249,
      size : "36-45", 
      color: "Opti Yellow|Green Bear| Orange Bear",
      brand: "nike"
    },

    { id: 5, 
      name: "Nike SB Dunk Low Club 58 Gulf Racing Blue Chill",
      image:[
        'https://i.ibb.co/gLrJsZP1/2025-05-07-174358368-Photoroom.png',
        'https://i.ibb.co/j9bG8Dqp/2025-05-07-174633384-Photoroom.png'
      ], 
      art: 2564, 
      category: "shoose",
      price: 229,
      size : "36-45", 
      color: "Racing Blue",
      brand: "nike"
    },

    { id: 6, 
      name: "Air Jordan 1 Mid",
      image:[
        'https://i.ibb.co/3ykQ9j8Q/2025-05-07-174902439.png',
        'https://i.ibb.co/qF99KrqM/2025-05-07-175107936.png',
        'https://i.ibb.co/Fq7P217W/2025-05-07-175827294.png',
        'https://i.ibb.co/YFLxf4nY/2025-05-07-180054473-Photoroom.png'
      ], 
      art: 2565, 
      category: "shoose",
      price: 199,
      size : "36-45", 
      color: "Game Royal Black White|Berry",
      brand: "nike"
    },

    { id: 7, 
      name: "Air Jordan 4 Retro",
      image:[
        'https://i.ibb.co/rK8vF64Q/2025-05-07-180818682.png',
        'https://i.ibb.co/RG8986DR/2025-05-07-180956444.png',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/21570299-6494-47c1-b583-93903ec82552/air-jordan-4-red-cement-dh6927-161-release-date.jpg',
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/7f29caac-0e3f-4d6e-a603-35b5d66b468b/air-jordan-4-red-cement-dh6927-161-release-date.jpg',
        'https://i.ibb.co/60zR7T2t/2025-05-07-181319269-1.png',
        'https://i.ibb.co/VWQyD1p1/2025-05-07-181602766.png'
      ], 
      art: 2567, 
      category: "shoose",
      price: 279,
      size : "36-47", 
      color: "Vivid Sulfur|Red Cement|Smoke Grey",
      brand: "nike"
    },

    { id: 8, 
      name: "New Balance Sneakers Classics M1906AD",
      image:[
        'https://i.ibb.co/ynbdWNn7/2025-05-07-220848387.png',
        'https://i.ibb.co/XxD30cW3/2025-05-07-221118076.png'
      ], 
      art: 3801, 
      category: "shoose",
      price: 179,
      size : "36-45", 
      color: "Silver Metallic",
      brand: "nb"
    },

    { id: 9, 
      name: "New Balance M1000",
      image:[
        'https://i.ibb.co/7Jf95Sft/2025-05-07-221835398.png',
        'https://i.ibb.co/0pJW9K21/2025-05-07-222228119.png',
        'https://i.ibb.co/C3zMjQ4s/2025-05-07-222336745.png',
        'https://i.ibb.co/3myNqv9C/2025-05-07-222510277.png'
      ], 
      art: 3802, 
      category: "shoose",
      price: 249,
      size : "36-45", 
      color: "Purple|Blue",
      brand: "nb"
    },

    { id: 10, 
      name: "Adidas Gazelle Bold W",
      image:[
        'https://i.ibb.co/hJ1KGDNZ/2025-05-07-223413786-Photoroom.png',
        'https://i.ibb.co/WW2fMr24/2025-05-07-223517604-Photoroom.png',
      ], 
      art: 7401, 
      category: "shoose",
      price: 149,
      size : "36-45", 
      color: "Clear Sky",
      brand: "adidas"
    },

    { id: 11, 
      name: "Adidas Yeezy Boost 350",
      image:[
        'https://i.ibb.co/G4cmM2DH/2025-05-07-223807822-Photoroom.png',
        'https://i.ibb.co/spR2MHS4/2025-05-07-224027957-Photoroom.png',
        'https://i.ibb.co/Hp7cbMCc/2025-05-07-224121947-Photoroom.png',
        'https://i.ibb.co/5WcW9142/2025-05-07-224209113-Photoroom.png',
        'https://i.ibb.co/R4GBf9wc/2025-05-07-224457832-Photoroom.png',
        'https://i.ibb.co/Z1zTwvNq/2025-05-07-224559865-Photoroom.png'
      ], 
      art: 7402, 
      category: "shoose",
      price: 159,
      size : "36-45", 
      color: "Static|Core Black Red|Zebra",
      brand: "adidas"
    },

    { id: 12, 
      name: "Adidas Yeezy Foam RNR",
      image:[
        'https://i.ibb.co/jPKPFD5T/2025-05-07-224933942-Photoroom.png',
        'https://i.ibb.co/GvG5J7c5/2025-05-07-225139981-Photoroom.png',
        'https://i.ibb.co/r29W3fSr/2025-05-07-225257573-Photoroom.png',
        'https://i.ibb.co/rGLzS4b4/2025-05-07-225333981-Photoroom.png',
        'https://i.ibb.co/ZpnB5tgf/2025-05-07-225442091-Photoroom.png',
        'https://i.ibb.co/dsDqnTzp/2025-05-07-225559152-Photoroom.png'
      ], 
      art: 7410, 
      category: "shoose",
      price: 130,
      size : "36-45", 
      color: "Sand|Carbon|Sulfur",
      brand: "adidas"
    },

    { id: 13, 
      name: "Adidas Yeezy Foam RNR MX",
      image:[
        'https://i.ibb.co/V0q7c59s/2025-05-07-230200206-Photoroom.png',
        'https://i.ibb.co/0VDsd5BT/2025-05-07-230252933-Photoroom.png',
        'https://i.ibb.co/3DMDbYY/2025-05-08-135326161-Photoroom.png',
        'https://i.ibb.co/k24fR3Yg/2025-05-08-135513809-Photoroom.png',
        'https://i.ibb.co/qQj54sk/2025-05-08-135822870-Photoroom.png',
        'https://i.ibb.co/vvzpMnrH/2025-05-08-135901571-Photoroom.png',
      ], 
      art: 7411, 
      category: "shoose",
      price: 140,
      size : "36-51", 
      color: "Carbon|Cream Clay|Moon Gray",
      brand: "adidas"
    },

    { id: 14, 
      name: "Adidas Yeezy Slide",
      image:[
        'https://i.ibb.co/jP2k55S3/2025-05-08-140150742-Photoroom.png',
        'https://i.ibb.co/7mR7YSS/2025-05-08-234134145-Photoroom.png',
        'https://i.ibb.co/h1CPf9q7/2025-05-08-234540558-Photoroom.png',
        'https://i.ibb.co/fVsM9XCV/2025-05-08-234632319-Photoroom.png',
        'https://i.ibb.co/Xk3S2y71/2025-05-08-234804396.png',
        'https://i.ibb.co/v67BbCbV/2025-05-08-234852057.png'
      ], 
      art: 7412, 
      category: "shoose",
      price: 120,
      size : "36-51", 
      color: "Dark Onyx|Bone|Ochre",
      brand: "adidas"
    },

    { id: 15, 
      name: "Prado Swim Shorts",
      image:[
        'https://i.ibb.co/8L8rrqW2/2025-05-08-235445672-Photoroom.png',
        'https://i.ibb.co/tMGBkmCb/2025-05-09-000403391-Photoroom.png',
        'https://i.ibb.co/93VvB87T/2025-05-09-000445760-Photoroom.png',
        'https://i.ibb.co/bjRzSGSy/2025-05-09-000520842-Photoroom.png'
      ], 
      art: 6401, 
      category: "short",
      price: 189,
      size : "M-3XL", 
      color: "White|Black|Red|Dark Blue",
      brand: "pra"
    },

    { id: 16, 
      name: "Polo Ralph Lauren Traveler Swim Trunk",
      image:[
        'https://i.ibb.co/YBTFzGzw/2025-05-09-001149148-Photoroom.png',
        'https://i.ibb.co/TDCRF1Nq/2025-05-09-001228511-Photoroom.png',
        'https://i.ibb.co/vCvQks8s/2025-05-09-001321300-Photoroom.png',
        'https://i.ibb.co/wr7myWXQ/2025-05-09-001412420-Photoroom.png',
        'https://i.ibb.co/v4DLSXz8/2025-05-09-001509927-Photoroom.png',
        'https://i.ibb.co/hJC91JB0/2025-05-09-001602275-Photoroom.png',
        'https://i.ibb.co/9kZmty1Q/2025-05-09-001642469-Photoroom.png',
        'https://i.ibb.co/Fk6TMwNL/2025-05-09-001726772-Photoroom.png',
        'https://i.ibb.co/39gLN2fv/2025-05-09-001810033-Photoroom.png',
        'https://i.ibb.co/LhrJMZcn/2025-05-09-001856715-Photoroom.png',
        'https://i.ibb.co/vCj4Kw1r/2025-05-09-001946556-Photoroom.png',
        'https://i.ibb.co/8D3qnFcZ/2025-05-09-002031608-Photoroom.png',
      ], 
      art: 1101, 
      category: "short",
      price: 139,
      size : "S-XL", 
      color: "Black|Purple|Pink|Dark Blue|Khaki|Sky Blue",
      brand: "ralph-lauren"
    },
    { id: 17, 
      name: "Louis Vuitton Shorts Midas Touch Luxury",
      image:[
        'https://i.ibb.co/fYFyJ18V/2025-05-09-002536288-Photoroom.png',
        'https://i.ibb.co/4ZTpTJVp/2025-05-09-002636169-Photoroom.png',
      ], 
      art: 1701, 
      category: "short",
      price: 230,
      size : "M-3XL", 
      color: "Black",
      brand: "lv"
    },

    { id: 18, 
      name: "CP Company Metropolis Jogger Shorts",
      image:[
        'https://i.ibb.co/bjG3Vb22/2025-05-09-003346792-Photoroom.png',
        'https://i.ibb.co/LdfZjJDj/2025-05-09-003519812-Photoroom.png',
        'https://i.ibb.co/RkJPSpfJ/2025-05-09-003617761-Photoroom.png'
      ], 
      art: 1701, 
      category: "short",
      price: 220,
      size : "M-XXL", 
      color: "Grey|Black|Brown",
      brand: "cp"
    },

    { id: 19, 
      name: "CP Company Metropolis Jogger Shorts",
      image:[
        'https://i.ibb.co/fPD9MhG/2025-05-09-004046509-Photoroom.png',
        'https://i.ibb.co/M5PSCKMb/2025-05-09-004153099-Photoroom.png',
        'https://i.ibb.co/YFHjF7MY/2025-05-09-004241001-Photoroom.png',
        'https://i.ibb.co/VWjswNQG/2025-05-09-004350853-Photoroom.png'
      ], 
      art: 1702, 
      category: "short",
      price: 240,
      size : "M-XXL", 
      color: "Metal Silver|Black|Brown|Orange",
      brand: "cp"
    },

    { id: 20, 
      name: "Ami Paris Shorts",
      image:[
        'https://i.ibb.co/SwPx0894/2025-05-09-005001559-Photoroom.png',
        'https://i.ibb.co/whfxt4ZJ/2025-05-09-095532570-Photoroom.png',
        'https://i.ibb.co/x8C2DnhN/2025-05-09-095639296-Photoroom.png',
        'https://i.ibb.co/zVCSXLgW/2025-05-09-005053085-Photoroom.png',
        'https://i.ibb.co/CK3Pc4Ys/2025-05-09-005144339-Photoroom.png',
        'https://i.ibb.co/JRhLt76t/2025-05-09-095757041-Photoroom.png'
      ], 
      art: 1702, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "White|Black|Grey|Cream|Light Green|Purple",
      brand: "ami"
    },

    { id: 21, 
      name: "Palm Angels Swim Shorts",
      image:[
        'https://i.ibb.co/JWmM4cq0/2025-05-09-100801488-Photoroom.png',
        'https://i.ibb.co/237Tq2ZB/2025-05-09-100902649-Photoroom.png',
        'https://i.ibb.co/xtvPXygb/2025-05-09-101008824-Photoroom.png',
        'https://i.ibb.co/Vc5V3bgj/2025-05-09-101104959-Photoroom.png',
        'https://i.ibb.co/1JnrLSVV/2025-05-09-101156112-Photoroom.png',
        'https://i.ibb.co/kgyRwtjS/2025-05-09-101300793-Photoroom.png',
        'https://i.ibb.co/7JXSN3Qs/2025-05-09-101432144-Photoroom.png'
      ], 
      art: 2201, 
      category: "short",
      price: 160,
      size : "S-XL", 
      color: "Black|Red|Yellow|Light Green|Green|Purple|Blue",
      brand: "pa"
    },

    { id: 27, 
      name: "Palm Angels Classic Shorts",
      image:[
        'https://i.ibb.co/F4Dx6mjW/2025-05-09-135921599-Photoroom.png',
        'https://i.ibb.co/HTb7xHw2/2025-05-09-140034779-Photoroom.png',
        'https://i.ibb.co/jPF0q68r/2025-05-09-140114576-Photoroom.png',
        'https://i.ibb.co/3y8WGbXR/2025-05-09-140157101-Photoroom.png',
        'https://i.ibb.co/DP0PrSL5/2025-05-09-140242681-Photoroom.png',
        'https://i.ibb.co/WN8bn4tr/2025-05-09-140317027-Photoroom.png'
      ], 
      art: 2202, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "Green|Red|Puple",
      brand: "pa"
    },

    { id: 22, 
      name: "Denim Tears Shoert",
      image:[
        'https://i.ibb.co/Rn4r3V0/2025-05-09-102239404-Photoroom.png',
        'https://i.ibb.co/JR7j0yRH/2025-05-09-102334879-Photoroom.png',
        'https://i.ibb.co/Nvm3G5q/2025-05-09-102425781-Photoroom.png',
        'https://i.ibb.co/W4HNm8mG/2025-05-09-102523827-Photoroom.png',
        'https://i.ibb.co/tT5GfBWF/2025-05-09-102637582-Photoroom.png',
        'https://i.ibb.co/v6VB5dbX/2025-05-09-102736987-Photoroom.png',
      ], 
      art: 2101, 
      category: "short",
      price: 139,
      size : "S-XL", 
      color: "Grey|Red|Green|Dark Grey|Dark Blue|Black",
      brand: "denim"
    },

    { id: 23, 
      name: "Denim Tears Jeans Shorts Star Jorts Vintage Baggy",
      image:[
        'https://i.ibb.co/dJ6tnk6m/2025-05-09-103649228-Photoroom.png',
        'https://i.ibb.co/0y2ytZ4z/2025-05-09-103743086-Photoroom.png',
        'https://i.ibb.co/qVnnjSN/2025-05-09-103844321-Photoroom.png',
        'https://i.ibb.co/xqgmKyVW/2025-05-09-103926974-Photoroom.png',
        'https://i.ibb.co/1tqnnfhZ/2025-05-09-104113605-Photoroom.png',
        'https://i.ibb.co/xKCS9685/2025-05-09-104220841-Photoroom.png',
      ], 
      art: 1401, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "Blue|Black|Cream",
      brand: "denim"
    },

    { id: 24, 
      name: "Stone Island Bermuda Short",
      image:[
        'https://i.ibb.co/rRG4v1r4/2025-05-09-104904459-Photoroom.png',
        'https://i.ibb.co/GQmYtf4X/2025-05-09-105057014-Photoroom.png',
        'https://i.ibb.co/FbT0CzCg/2025-05-09-105139525-Photoroom.png',
        'https://i.ibb.co/zTjTmtKx/2025-05-09-105238647-Photoroom.png',
      ], 
      art: 1401, 
      category: "short",
      price: 240,
      size : "S-XL", 
      color: "Silver|Khaki|Black|Yellow",
      brand: "stone-island"
    },

    { id: 25, 
      name: "Nike Tech Fleece Short",
      image:[
        'https://i.ibb.co/hxftGswL/2025-05-09-131440862-Photoroom.png',
        'https://i.ibb.co/1fwhGQMF/2025-05-09-131621334-Photoroom.png',
        'https://i.ibb.co/0RMPPJGR/2025-05-09-131719830-Photoroom.png',
        'https://i.ibb.co/39xdkYtN/2025-05-09-131806316-Photoroom.png',
        'https://i.ibb.co/d4CVrvPz/2025-05-09-131847204-Photoroom.png',
        'https://i.ibb.co/Qv3bqTXw/2025-05-09-132005859-Photoroom.png',
        'https://i.ibb.co/0VZnK7mv/2025-05-09-132059246-Photoroom.png',
        'https://i.ibb.co/Nd9pQXYV/2025-05-09-132201442-Photoroom.png'
      ], 
      art: 2582, 
      category: "short",
      price: 170,
      size : "M-XXL", 
      color: "Black|White|Cream|Grey|Dark Grey|Brown",
      brand: "Nike"
    },

    { id: 26, 
      name: "Carhartt WIP Drawstring Cotton-Blend Shorts",
      image:[
        'https://i.ibb.co/HLkd9dW7/2025-05-09-132556202-Photoroom.png',
        'https://i.ibb.co/JjRJyxkD/2025-05-09-132646483-Photoroom.png',
        'https://i.ibb.co/5X4q6Bss/2025-05-09-132729302-Photoroom.png',
        'https://i.ibb.co/B0QhC12/2025-05-09-132848468-Photoroom.png',
      ], 
      art: 3801, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "White|Light Brown|Dark Brown|Black",
      brand: "Nike"
    },

    // { id: 28, 
    //   name: "Palm Angels",
    //   image:[
    //     'https://i.ibb.co/LzjkjfhC/2025-05-09-140707622-Photoroom.png',
    //     'https://i.ibb.co/fVDfTShX/2025-05-09-140902952-Photoroom.png'
    //   ], 
    //   art: 3801, 
    //   category: "Tshirt",
    //   price: 150,
    //   size : "S-XL", 
    //   color: "Black",
    //   brand: "Nike"
    // },
  ]


const Catalog = () => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [brand, setBrand] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category ;
    const matchesPrice = product.price <= priceRange;
    const matchesBrend = brand === "all" || product.brand === brand;
    return matchesCategory && matchesPrice && matchesBrend;
  });
  return (
    <div className="catalog-row">
      <div className="filter__container">
      <p className="top-buy">Топ продаж</p>
      <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-4 border rounded-xl shadow-sm bg-white text-center">
                <img className="catalog__item-addimg" src={product.image} alt="#" />
                <h3 className="catalog__item-title">{product.name}</h3>
                <div className="catalog__item-row">
                    <p className="catalog__item-size">{product.size}</p>
                    <p className="catalog__item-color">{product.color}</p>
                </div>
                <p className="catalog__item-prise" >{product.price}Lv</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="brend__title">Фильтр</p>
        <div className="firlter-row">
          <div className="brend__type-row">
              <label className="brend__type-name" htmlFor="category">Вид одежды:</label>
              <select className="brend__type-system"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              >
                  <option className="brend__type-item" value="all">Все</option>
                  <option className="brend__type-item" value="hoodie">Худи</option>
                  <option className="brend__type-item" value="Tshirt">Футболка</option>
                  <option className="brend__type-item" value="sport-suit">Спортивный костюм</option>
                  <option className="brend__type-item" value="short">Шорты</option>
                  <option className="brend__type-item" value="shoose">Кросовки</option>
              </select>
          </div>

          <div className="brend__price">
              <p className="brend__price-title" htmlFor="price">Цена:{priceRange}Lv</p>
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
            <p className="brend__box-title">Бренды</p>
              <select className="brend__box-system"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  >
                  <option className="brend__box-item" value="all">Все</option>
                  <option className="brend__box-item" value="adidas">Adidas</option>
                  <option className="brend__box-item" value="ami">Ami Paris</option>
                  <option className="brend__box-item" value="bape">Bape</option>
                  <option className="brend__box-item" value="cp">CP Company</option>
                  <option className="brend__box-item" value="denim">Denim Tears</option>
                  <option className="brend__box-item" value="stone-island">Stone Island</option>
                  <option className="brend__box-item" value="lv">LOUIS VUITTON</option>
                  <option className="brend__box-item" value="pa">Palm Angels</option>
                  <option className="brend__box-item" value="nike">Nike</option>
                  <option className="brend__box-item" value="stussy">Stussy</option>
                  <option className="brend__box-item" value="ralph-lauren">Ralph Lauren</option>
                  <option className="brend__box-item" value="nb">New Balance</option>
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
                {/* <img className="catalog__item-img" src={product.img} alt="#" /> */}

                  {/* <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    }}
                  >
                  {products.image.map((img, i) => (
                    <SwiperSlide key={product.id}>
                      <img
                    className="catalog__item-img"
                    key={i}
                    src={img}
                    alt={`Фото ${i + 1}`}
                    />
                    </SwiperSlide>
                  ))}
                </Swiper> */}
                  <div className="row-img-window">
                    {product.image.map((img, i) => (
                        <img
                        className="catalog__item-img"
                        key={i}
                        src={img}
                        alt={`${i + 1}`}
                        />
                        ))}
                </div>
                <h3 className="catalog__item-title">{product.name}</h3>
                <div className="catalog__item-row">
                    <p className="catalog__item-size">Размер : {product.size}</p>
                    <p className="catalog__item-color">{product.color}</p>
                </div>
                <p className="catalog__item-prise" >{product.price}Lv</p>
                {/* <a href="https://t.me/Whitestore2024" target="_blank" className="catalog__item-btn">Купить</a> */}
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