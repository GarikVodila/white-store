import React, { useState } from "react";

import '../Catalog.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Пример данных
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
      art: 3401, 
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
      art: 3402, 
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
      name: "Prada Swim Shorts",
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
      art: 3801, 
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
      art: 3901, 
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
      color: "Black|White|Cream|Grey|Dark Grey|Brown|Red",
      brand: "nike"
    },

    { id: 26, 
      name: "Carhartt x WIP Drawstring Cotton-Blend Shorts",
      image:[
        'https://i.ibb.co/HLkd9dW7/2025-05-09-132556202-Photoroom.png',
        'https://i.ibb.co/JjRJyxkD/2025-05-09-132646483-Photoroom.png',
        'https://i.ibb.co/5X4q6Bss/2025-05-09-132729302-Photoroom.png',
        'https://i.ibb.co/B0QhC12/2025-05-09-132848468-Photoroom.png',
      ], 
      art: 3701, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "White|Light Brown|Dark Brown|Black",
      brand: "carhart"
    },

    { id: 28, 
      name: "Palm Angels Shark Classic T-shirt",
      image:[
        'https://i.ibb.co/LzjkjfhC/2025-05-09-140707622-Photoroom.png',
        'https://i.ibb.co/fVDfTShX/2025-05-09-140902952-Photoroom.png'
      ], 
      art: 2231, 
      category: "Tshirt",
      price: 140,
      size : "S-XL", 
      color: "Black",
      brand: "pa"
    },

    { id: 36, 
      name: "Palm Angels Statement Pencil",
      image:[
        'https://i.ibb.co/gZtF91p0/2025-05-15-234655571-Photoroom.png',
      ], 
      art: 2232, 
      category: "Tshirt",
      price: 140,
      size : "S-XL", 
      color: "Black",
      brand: "pa"
    },

    { id: 37, 
      name: "Palm Angels Dragon Lunar New Year Tee",
      image:[
        'https://i.ibb.co/1GxFDY33/2025-05-15-235439318-Photoroom.png',
      ], 
      art: 2233, 
      category: "Tshirt",
      price: 140,
      size : "S-XL", 
      color: "White",
      brand: "pa"
    },

    { id: 29, 
      name: "Sp5der Purple - Etsy",
      image:[
        'https://i.ibb.co/S9yf7wy/2025-05-12-134008588-Photoroom.png',
      ], 
      art: 2901, 
      category: "Tshirt",
      price: 130,
      size : "S-XL", 
      color: "Black",
      brand: "spider"
    },

    { id: 30, 
      name: "Sp5der Pink!",
      image:[
        'https://i.ibb.co/LXYvZ7Jy/2025-05-12-134331180-Photoroom.png',
      ], 
      art: 2901, 
      category: "Tshirt",
      price: 130,
      size : "S-XL", 
      color: "Black",
      brand: "spider"
    },

    { id: 31, 
      name: "BAPE Hologram Busy Works Tee",
      image:[
        'https://i.ibb.co/nqtbjMqC/2025-05-12-182612866-Photoroom.png',
        'https://i.ibb.co/NgxtsN1Y/2025-05-12-182834318-Photoroom.png'
      ], 
      art: 3601, 
      category: "Tshirt",
      price: 160,
      size : "S-XL", 
      color: "Black|White",
      brand: "bape"
    },

    { id: 38, 
      name: "Burberry Letchford Logo T-Shirt",
      image:[
        'https://i.ibb.co/1Gcc4McJ/2025-05-15-235859787.png',
      ], 
      art: 8701, 
      category: "Tshirt",
      price: 200,
      size : "XS-L", 
      color: "Black",
      brand: "burberry"
    },

    { id: 32, 
      name: "Burberry Daisy-logo Cotton T-shirt",
      image:[
        'https://i.ibb.co/TDZjQ6B5/2025-05-12-183130289-Photoroom.png',
        'https://i.ibb.co/8LHy4F9C/2025-05-12-183202463-Photoroom.png'
      ], 
      art: 8702, 
      category: "Tshirt",
      price: 220,
      size : "S-XXL", 
      color: "Black|White",
      brand: "burberry"
    },

    { id: 39, 
      name: "EKD Burberry T-shirt",
      image:[
        'https://i.ibb.co/604wGKC1/2025-05-16-001146156-Photoroom.png',
        'https://i.ibb.co/bgDWqfZx/2025-05-16-001105300-Photoroom.png',
        'https://i.ibb.co/jkrHytM7/2025-05-16-001418921-Photoroom.png'
      ], 
      art: 8703, 
      category: "Tshirt",
      price: 220,
      size : "S-XL", 
      color: "Black|White|Persian",
      brand: "burberry"
    },

    { id: 33, 
      name: "The North Face Spring and Summer New Neutral Short-Sleeve T-Shirt",
      image:[
        'https://i.ibb.co/vx1sGHCw/2025-05-12-184054272-Photoroom.png',
        'https://i.ibb.co/dw9MsC3B/2025-05-12-183424606-Photoroom.png',
        'https://i.ibb.co/JRTHFhj6/2025-05-12-184214138-Photoroom.png',
        'https://i.ibb.co/MDByRmFj/2025-05-12-184139432-Photoroom.png',
        'https://i.ibb.co/KcCy1rhg/2025-05-12-184334222-Photoroom.png',
        'https://i.ibb.co/KxjXt3VW/2025-05-12-184258734-Photoroom.png'
      ], 
      art: 7701, 
      category: "Tshirt",
      price: 160,
      size : "L-4XL", 
      color: "Black|White|Grey",
      brand: "tnf"
    },

    { id: 34, 
      name: "The North Face Never Stop Explorer T-Shirt",
      image:[
        'https://i.ibb.co/qSftD7f/2025-05-12-184822688-Photoroom.png',
        'https://i.ibb.co/Nnn1gQnc/2025-05-12-184739072-Photoroom.png',
        'https://i.ibb.co/bMjtrzJ0/2025-05-12-185114560-Photoroom.png',
        'https://i.ibb.co/Psg0p4L4/2025-05-12-185159949-Photoroom.png',
        'https://i.ibb.co/zWXhbmrZ/2025-05-12-185233188-Photoroom.png',
        'https://i.ibb.co/mC7p5Xvz/2025-05-12-185308560-Photoroom.png'
      ], 
      art: 7702, 
      category: "Tshirt",
      price: 160,
      size : "L-4XL", 
      color: "Black|White|Grey",
      brand: "tnf"
    },

    { id: 35, 
      name: "The North Face Never Stop Explorer II T-Shirt",
      image:[
        'https://i.ibb.co/mrJXn2yJ/2025-05-15-234226317-Photoroom.png',
        'https://i.ibb.co/N2ppPyqD/2025-05-15-234307181-Photoroom.png',
        'https://i.ibb.co/39L5mzFS/2025-05-15-234341894-Photoroom.png',
      ], 
      art: 7703, 
      category: "Tshirt",
      price: 150,
      size : "L-4XL", 
      color: "Black|White|Grey",
      brand: "tnf"
    },

    { id: 40, 
      name: "Adidas Adicolor Classics 3-Stripes Tee",
      image:[
        'https://i.ibb.co/VWTvtQt7/2025-05-16-001945963-Photoroom.png',
        'https://i.ibb.co/G3C0dj5k/2025-05-16-002046011-Photoroom.png',
        'https://i.ibb.co/0R0PTzbL/2025-05-16-002131347-Photoroom.png',
        'https://i.ibb.co/ZpQrvYL3/2025-05-16-002203974-Photoroom.png'
      ], 
      art: 7471, 
      category: "Tshirt",
      price: 110,
      size : "M-4XL", 
      color: "Black|White|Light Brown|Dark Brown",
      brand: "adidas"
    },

    { id: 41, 
      name: "HUGO BOSS Logo T-shirt",
      image:[
        'https://i.ibb.co/BH6hyB3F/2025-05-16-004000516-Photoroom.png',
        'https://i.ibb.co/pr1ZygwL/2025-05-16-004109207-Photoroom.png',
        'https://i.ibb.co/d4mLtrRy/2025-05-16-004145855-Photoroom.png',
        'https://i.ibb.co/tw5Fpd4m/2025-05-16-004407044-Photoroom.png'
      ], 
      art: 9001, 
      category: "Tshirt",
      price: 130,
      size : "M-2XL", 
      color: "Black|White|Blue|Red",
      brand: "hugo"
    },

    { id: 42, 
      name: "Lacoste Classic Fit",
      image:[
        'https://i.ibb.co/PZm4XkBb/2025-05-16-005444600-Photoroom.png',
        'https://i.ibb.co/t9hc5fK/2025-05-16-005522993-Photoroom.png',
        'https://i.ibb.co/G4fqZJNx/2025-05-16-005626127-Photoroom.png',
        'https://i.ibb.co/gBQ79kf/2025-05-16-005711897-Photoroom.png',
        'https://i.ibb.co/yFRg4Q6q/2025-05-16-005753015-Photoroom.png',
        'https://i.ibb.co/0pG7cxpX/2025-05-16-005859036-Photoroom.png'
      ], 
      art: 5001, 
      category: "Tshirt",
      price: 140,
      size : "M-2XL", 
      color: "Black|Dark Blue|Khaki|Sky Blue|Cream|White",
      brand: "lacoste"
    },

    { id: 43, 
      name: "Soft Cotton Polo Shirt",
      image:[
        'https://i.ibb.co/fZKfYLN/2025-05-16-010349046-Photoroom.png',
        'https://i.ibb.co/KchkRRxN/2025-05-16-010433207-Photoroom.png',
        'https://i.ibb.co/Cp9f6YgR/2025-05-16-010518993-Photoroom.png',
        'https://i.ibb.co/7x8pD6H8/2025-05-16-010611920-Photoroom.png',
      ], 
      art: 3802, 
      category: "Tshirt",
      price: 140,
      size : "M-2XL", 
      color: "Black|Dark Blue|Cream|White",
      brand: "ralph-lauren"
    },

    { id: 44, 
      name: "Polo Ralph Lauren Custom Slim Fit Polo Bear Jersey T-shirt",
      image:[
        'https://i.ibb.co/Nz1f62r/2025-05-16-011009063-Photoroom.png',
        'https://i.ibb.co/hJgWx0f3/2025-05-16-011121136-Photoroom.png',
      ], 
      art: 3803, 
      category: "Tshirt",
      price: 160,
      size : "S-XL", 
      color: "Black|White",
      brand: "ralph-lauren"
    },

    { id: 45, 
      name: "Comme Des Garçons Play",
      image:[
        'https://i.ibb.co/KppDfYPf/2025-05-16-011458238.png',
      ], 
      art: 3912, 
      category: "Tshirt",
      price: 160,
      size : "S-XXL", 
      color: "White",
      brand: "ami"
    },

    { id: 46, 
      name: "Comme Des Garçons Play Heart Logo Cotton T-shirt",
      image:[
        'https://i.ibb.co/4Rx2HXwR/2025-05-16-012054300.png',
      ], 
      art: 3913, 
      category: "Tshirt",
      price: 160,
      size : "S-XXL", 
      color: "White",
      brand: "ami"
    },

    { id: 47, 
      name: "Anti Social Social Club x CPFM Tee",
      image:[
        'https://i.ibb.co/JWRL8st7/2025-05-16-012448498-Photoroom.png',
        'https://i.ibb.co/wNrJ5ywd/2025-05-16-012522318-Photoroom.png'
      ], 
      art: 3001, 
      category: "Tshirt",
      price: 180,
      size : "S-XXL", 
      color: "Black|White",
      brand: "assc"
    },

    { id: 48, 
      name: "STUSSY 30TH BIRTHDAY LIMITED EDITION MOLTOV COCKTAIL",
      image:[
        'https://i.ibb.co/TqKY7N9y/2025-05-16-013021714-Photoroom.png',
        'https://i.ibb.co/ycFMrkMP/2025-05-16-013111908-Photoroom.png',
        'https://i.ibb.co/4Z4k8FHs/2025-05-16-013147689-Photoroom.png',
        'https://i.ibb.co/VcT7WJjT/2025-05-16-013220829-Photoroom.png'
      ], 
      art: 2701, 
      category: "Tshirt",
      price: 170,
      size : "S-XXL", 
      color: "Black|White",
      brand: "stussy"
    },

    { id: 49, 
      name: "Stussy Angel Tee",
      image:[
        'https://i.ibb.co/Kc32ZQGm/2025-05-16-013610014-Photoroom.png',
        'https://i.ibb.co/5XWWZTdZ/2025-05-16-013958781-Photoroom.png',
        'https://i.ibb.co/Y4VpnKkf/2025-05-16-014436601-Photoroom.png',
        'https://i.ibb.co/ymyv2Dh9/2025-05-16-014549422-Photoroom.png'
      ], 
      art: 2702, 
      category: "Tshirt",
      price: 150,
      size : "S-XXL", 
      color: "White|Green",
      brand: "stussy"
    },

    { id: 50, 
      name: "Vtg Stussy Skateboards Withered Flower Tee",
      image:[
        'https://i.ibb.co/hFdsXHVM/2025-05-16-014902822-Photoroom.png',
        'https://i.ibb.co/VWJprqFk/2025-05-16-014954094-Photoroom.png',
        'https://i.ibb.co/FvbM3Ft/2025-05-16-015041805-Photoroom.png',
        'https://i.ibb.co/Xk39BSdn/2025-05-16-015133953-Photoroom.png',
        'https://i.ibb.co/fGxbp3XQ/2025-05-16-015222023-Photoroom.png',
        'https://i.ibb.co/fz7ctJ5y/2025-05-16-015543421-Photoroom.png'
      ], 
      art: 2703, 
      category: "Tshirt",
      price: 150,
      size : "S-XXL", 
      color: "Black|Green",
      brand: "stussy"
    },

    { id: 51, 
      name: "C.P. Company Nextlandscape Cotton T-shirt",
      image:[
        'https://i.ibb.co/ynR8f6XV/2025-05-16-020308190-Photoroom.png',
        'https://i.ibb.co/mVFb3sM9/2025-05-16-020358110-Photoroom.png',
      ], 
      art: 1711, 
      category: "Tshirt",
      price: 210,
      size : "S-XXL", 
      color: "White|Grey",
      brand: "cp"
    },

    { id: 52, 
      name: "Balenciaga Slime Tee Medium Fit",
      image:[
        'https://i.ibb.co/9K8Mt05/2025-05-16-020952895-Photoroom.png',
        'https://i.ibb.co/7NzBs4vG/2025-05-16-021041135-Photoroom.png',
      ], 
      art: 7601, 
      category: "Tshirt",
      price: 220,
      size : "XS-L", 
      color: "Black|White",
      brand: "balenciaga"
    },

    { id: 53, 
      name: "Stussy Basic Stussy Zip Hoodie",
      image:[
        'https://i.ibb.co/BSmMdQ2/2025-05-18-000836119-Photoroom.png',
        'https://i.ibb.co/wNB0FkpH/2025-05-18-000741272-Photoroom.png',
        'https://i.ibb.co/4wZZTYpv/2025-05-18-000945456-Photoroom.png',
        'https://i.ibb.co/v4tGhRvc/2025-05-18-000915218-Photoroom.png'
      ], 
      art: 2721, 
      category: "hoodie",
      price: 170,
      size : "S-XL", 
      color: "Black|White",
      brand: "stussy"
    },

    { id: 54, 
      name: "Stussy Smashing The Ball",
      image:[
        'https://i.ibb.co/yLLvVzg/2025-05-18-001255977-Photoroom.png',
        'https://i.ibb.co/67Sm58fK/2025-05-18-001331377-Photoroom.png',
        'https://i.ibb.co/sdxR3p0F/2025-05-18-001407107-Photoroom.png',
        'https://i.ibb.co/yFYRkkpV/2025-05-18-001436563-Photoroom.png'
      ], 
      art: 2722, 
      category: "hoodie",
      price: 170,
      size : "S-XL", 
      color: "Black|White",
      brand: "stussy"
    },

    { id: 55, 
      name: "Stussy Fuzzy Dice Hoodie",
      image:[
        'https://i.ibb.co/zVr7shTk/2025-05-18-001703707.png',
        'https://i.ibb.co/1tzXkMh1/2025-05-18-001744104.png',
        'https://i.ibb.co/nqMNVTND/2025-05-18-001859273.png',
        'https://i.ibb.co/kV4XJBPw/2025-05-18-001953993.png',
        'https://i.ibb.co/PvWVD8CN/2025-05-18-002044088.png',
        'https://i.ibb.co/xSp14BpH/2025-05-18-002120728.png'
      ], 
      art: 2723, 
      category: "hoodie",
      price: 180,
      size : "S-XL", 
      color: "Black|White|Grey",
      brand: "stussy"
    },

    { id: 56, 
      name: "Thrasher Sweatshirt Skate Mag Crew",
      image:[
        'https://i.ibb.co/1fnjxpYj/2025-05-18-003051823-Photoroom.png',
        'https://i.ibb.co/rGM1Z1zC/2025-05-18-003132827-Photoroom.png',
      ], 
      art: 8301, 
      category: "hoodie",
      price: 180,
      size : "S-XXL", 
      color: "Black|White",
      brand: "thrasher"
    },

    { id: 57, 
      name: "Streetwear açaí Sp5der hoodie",
      image:[
        'https://i.ibb.co/MydwMTLV/2025-05-18-003434292-Photoroom.png',
        'https://i.ibb.co/1JjrxzJf/2025-05-18-003515890-Photoroom.png',
      ], 
      art: 8301, 
      category: "hoodie",
      price: 190,
      size : "S-XXL", 
      color: "Purple|Blue",
      brand: "spider"
    },

    { id: 58, 
      name: "Polo Ralph Lauren The Rl Fleece Logo Hoodie",
      image:[
        'https://i.ibb.co/4nWfTsSM/2025-05-18-003854715-Photoroom.png',
        'https://i.ibb.co/QRr3CJk/2025-05-18-003926582-Photoroom.png',
        'https://i.ibb.co/7NRDJBnT/2025-05-18-004001848-Photoroom.png'
      ], 
      art: 3811, 
      category: "hoodie",
      price: 170,
      size : "S-XL", 
      color: "Black|Green|White",
      brand: "ralph-lauren"
    },

    { id: 60, 
      name: "Stone Island Navy Basic Cotton Hoodie",
      image:[
        'https://i.ibb.co/fgc7nVV/2025-05-18-004249989-Photoroom.png',
        'https://i.ibb.co/mFbVSbCJ/2025-05-18-004350817-Photoroom.png',
        'https://i.ibb.co/LD6ppwZX/2025-05-18-004430574-Photoroom.png',
        'https://i.ibb.co/mrt2nrS0/2025-05-18-004527446-Photoroom.png'
      ], 
      art: 3811, 
      category: "hoodie",
      price: 250,
      size : "M-3XL", 
      color: "Black|Green|Sky Blue|Cream",
      brand: "stone-island"
    },

    { id: 61, 
      name: "Corteiz 4Starz Alcatraz Hoodie",
      image:[
        'https://i.ibb.co/0y7CbCLg/2025-05-18-005240136-Photoroom.png',
        'https://i.ibb.co/svyYXbNS/2025-05-18-005313461-Photoroom.png',
      ], 
      art: 4101, 
      category: "hoodie",
      price: 200,
      size : "S-XL", 
      color: "Black|White",
      brand: "corteiz"
    },

    { id: 62, 
      name: "Vlone Staple Hoodie",
      image:[
        'https://i.ibb.co/tM02Q2RT/2025-05-18-005540408-Photoroom.png',
        'https://i.ibb.co/Lz25MTL5/2025-05-18-005616842-Photoroom.png',
        'https://i.ibb.co/fzHRfzMs/2025-05-18-005646478-Photoroom.png',
        'https://i.ibb.co/ks0F6QWN/2025-05-18-005723379-Photoroom.png'
      ], 
      art: 4201, 
      category: "hoodie",
      price: 210,
      size : "S-XL", 
      color: "Black|White",
      brand: "vlone"
    },

    { id: 63, 
      name: "Carhartt WIP Hoodie",
      image:[
        'https://i.ibb.co/4w0jKG2j/2025-05-18-021146537-Photoroom.png',
        'https://i.ibb.co/4RDCP329/2025-05-18-021251026-Photoroom.png',
        'https://i.ibb.co/qMYZTpfG/2025-05-18-021504216-Photoroom.png',
        'https://i.ibb.co/N2NMwtCx/2025-05-18-021638828-Photoroom.png',
        'https://i.ibb.co/VY7SKFFW/2025-05-18-021740202-Photoroom.png'
      ], 
      art: 3701, 
      category: "hoodie",
      price: 180,
      size : "S-XL", 
      color: "Black|Green|Yellow|Blue|Purple",
      brand: "carhart"
    },

    { id: 64, 
      name: "Hello My Name Is Vetements Hoodie",
      image:[
        'https://i.ibb.co/fdmZ8NSr/2025-05-18-230345858-Photoroom.png',
        'https://i.ibb.co/Qv10Gchm/2025-05-18-230443263-Photoroom.png',
        'https://i.ibb.co/JW4yXq6X/2025-05-18-225831751.png',
        'https://i.ibb.co/XrvCPq5B/2025-05-18-230034520-Photoroom.png',
        'https://i.ibb.co/bMjj3kVf/2025-05-18-230154261-Photoroom.png',
        'https://i.ibb.co/4nDKBZWZ/2025-05-18-230545179-Photoroom.png',
        'https://i.ibb.co/Rp7RGj2V/2025-05-18-230701250-Photoroom.png'
      ], 
      art: 1201, 
      category: "hoodie",
      price: 250,
      size : "S-XL", 
      color: "Black|White|Orange|Light Yellow",
      brand: "vetements"
    },

    { id: 65, 
      name: "Supreme Blurred Logo Sweatshirt",
      image:[
        'https://i.ibb.co/bRPB6hdH/2025-05-18-231119019-Photoroom.png',
        'https://i.ibb.co/QF4w3Cpm/2025-05-18-231245767-Photoroom.png',
        'https://i.ibb.co/2YLmDXGZ/2025-05-18-231322093-Photoroom.png',
      ], 
      art: 1901, 
      category: "hoodie",
      price: 220,
      size : "S-L", 
      color: "Grey|Blue|Red",
      brand: "supreme"
    },

    { id: 66, 
      name: "Lacoste Loose Fit Printed Fleece Sweatshirt",
      image:[
        'https://i.ibb.co/v6nghpMt/1-Photoroom.png',
        'https://i.ibb.co/Qj32jCHp/2025-05-18-232328931-Photoroom.png',
      ], 
      art: 5011, 
      category: "hoodie",
      price: 170,
      size : "M-2XL", 
      color: "Dark Blue|White",
      brand: "lacoste"
    },

    { id: 67, 
      name: "Nike Air Jordan x PSG Fleece Pullover Hoodie",
      image:[
        'https://i.ibb.co/B2Lc26DK/4c5bc72f-Photoroom.png',
        'https://i.ibb.co/6RLctpPK/2025-05-18-233216952-Photoroom.png',
      ], 
      art: 2561, 
      category: "hoodie",
      price: 160,
      size : "M-2XL", 
      color: "Black|White",
      brand: "nike"
    },

    { id: 68, 
      name: "Polo Ralph Lauren Bear Slub Fleece Hoodie",
      image:[
        'https://i.ibb.co/fzjW7V7Z/2025-05-18-234152648-Photoroom.png',
        'https://i.ibb.co/Zz3P51yk/2025-05-18-234250374-Photoroom.png',
        'https://i.ibb.co/Qjmt7rrY/2025-05-18-234400181-Photoroom.png'
      ], 
      art: 3812, 
      category: "hoodie",
      price: 180,
      size : "M-2XL", 
      color: "Black|White|Dark Blue",
      brand: "ralph-lauren"
    },
    
    { id: 69, 
      name: "AMI Paris Ami De Coeur long-sleeve hoodie",
      image:[
        'https://i.ibb.co/209Tr9d0/2025-05-18-234938008-Photoroom.png',
        'https://i.ibb.co/TMz7s8r6/2025-05-18-235017330-Photoroom.png',
        'https://i.ibb.co/W4sFpncY/2025-05-18-235124016-Photoroom.png',
        'https://i.ibb.co/7dMS4k6F/2025-05-18-235231845-Photoroom.png',
        'https://i.ibb.co/b506TMLB/2025-05-18-235322704-Photoroom.png',
        'https://i.ibb.co/7tnb43Br/2025-05-18-235405768-Photoroom.png'
      ], 
      art: 3922, 
      category: "hoodie",
      price: 200,
      size : "S-XL", 
      color: "Black|Blue|Green|Cream|Grey|White",
      brand: "ami"
    },

    { id: 70, 
      name: "Supreme Immortal Hooded Sweatshirt",
      image:[
        'https://i.ibb.co/qvxjFtq/24742b2a-Photoroom.png',
        'https://i.ibb.co/sJK1NZ6j/2025-05-18-235920267-Photoroom.png',
      ], 
      art: 1902, 
      category: "hoodie",
      price: 220,
      size : "S-XL", 
      color: "Black|Grey",
      brand: "supreme"
    },

    { id: 71, 
      name: "ARCTERYX BIG LOGO Y2K SWEATSHIRT",
      image:[
        'https://i.ibb.co/XfcZBB8G/446d34a0-Photoroom.png',
        'https://i.ibb.co/BhFT1JG/2025-05-19-000304796-Photoroom.png',
      ], 
      art: 6102, 
      category: "hoodie",
      price: 210,
      size : "XS-L", 
      color: "Black|Grey",
      brand: "supreme"
    },
];

const sales = [
  { id: 5, 
      name: "Nike SB Dunk Low Club 58 Gulf Racing Blue Chill",
      image:[
        'https://i.ibb.co/j9bG8Dqp/2025-05-07-174633384-Photoroom.png'
      ], 
      art: 2564, 
      category: "shoose",
      price: 229,
      size : "36-45", 
      color: "Racing Blue",
      brand: "nike"
    },

{ id: 20, 
      name: "Ami Paris Shorts",
      image:[
        'https://i.ibb.co/SwPx0894/2025-05-09-005001559-Photoroom.png',
      ], 
      art: 3901, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "White",
      brand: "ami"
    },

    { id: 49, 
      name: "Stussy Angel Tee",
      image:[
        'https://i.ibb.co/5XWWZTdZ/2025-05-16-013958781-Photoroom.png',
      ], 
      art: 2702, 
      category: "Tshirt",
      price: 150,
      size : "S-XXL", 
      color: "White|Green",
      brand: "stussy"
    },

    { id: 8, 
      name: "New Balance Sneakers Classics M1906AD",
      image:[
        'https://i.ibb.co/XxD30cW3/2025-05-07-221118076.png'
      ], 
      art: 3401, 
      category: "shoose",
      price: 179,
      size : "36-45", 
      color: "Silver Metallic",
      brand: "nb"
    },

    { id: 19, 
      name: "CP Company Metropolis Jogger Shorts",
      image:[
        'https://i.ibb.co/fPD9MhG/2025-05-09-004046509-Photoroom.png',
      ], 
      art: 1702, 
      category: "short",
      price: 240,
      size : "M-XXL", 
      color: "Metal Silver",
      brand: "cp"
    },

    { id: 51, 
      name: "C.P. Company Nextlandscape Cotton T-shirt",
      image:[
        'https://i.ibb.co/mVFb3sM9/2025-05-16-020358110-Photoroom.png',
      ], 
      art: 1711, 
      category: "Tshirt",
      price: 210,
      size : "S-XXL", 
      color: "Grey",
      brand: "cp"
    },

     { id: 7, 
      name: "Air Jordan 4 Retro",
      image:[
        'https://static.nike.com/a/images/w_1280,q_auto,f_auto/7f29caac-0e3f-4d6e-a603-35b5d66b468b/air-jordan-4-red-cement-dh6927-161-release-date.jpg',
      ], 
      art: 2567, 
      category: "shoose",
      price: 279,
      size : "36-47", 
      color: "Vivid Sulfur|Red Cement|Smoke Grey",
      brand: "nike"
    },

    { id: 27, 
      name: "Palm Angels Classic Shorts",
      image:[
        'https://i.ibb.co/HTb7xHw2/2025-05-09-140034779-Photoroom.png',
      ], 
      art: 2202, 
      category: "short",
      price: 150,
      size : "S-XL", 
      color: "Green|Red|Puple",
      brand: "pa"
    },

    { id: 37, 
      name: "Palm Angels Dragon Lunar New Year Tee",
      image:[
        'https://i.ibb.co/1GxFDY33/2025-05-15-235439318-Photoroom.png',
      ], 
      art: 2233, 
      category: "Tshirt",
      price: 140,
      size : "S-XL", 
      color: "White",
      brand: "pa"
    },
]
const CatalogUk = () => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(350);
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

      <p className="top-buy">TOP sales</p>
      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 10000 }}
          loop={true}
          navigation
          breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          }}
        >
          {sales.map((sale) => (
                      <SwiperSlide key={sale.id}>
                        <div className="p-4 border rounded-xl shadow-sm bg-white text-center">
                          <p className="catalog__item-art">art:{sale.art}</p>
                          <img className="catalog__item-addimg" src={sale.image} alt="#" />
                          <h3 className="catalog__item-title">{sale.name}</h3>
                          <div className="catalog__item-row">
                              <p className="catalog__item-size">{sale.size}</p>
                              <p className="catalog__item-color">{sale.color}</p>
                          </div>
                          <p className="catalog__item-prise" >{sale.price} BGN</p>
                        </div>
                      </SwiperSlide>
                    ))}
        </Swiper>

        <p className="brend__title">Filters</p>
        <div className="firlter-row">
          <div className="brend__type-row">
              <label className="brend__type-name" htmlFor="category">Type of clothing:</label>
              <select className="brend__type-system"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              >
                  <option className="brend__type-item" value="all">All</option>
                  <option className="brend__type-item" value="shoose">Shoose</option>
                  <option className="brend__type-item" value="hoodie">Hoodie</option>
                  <option className="brend__type-item" value="sweater">Sweater</option>
                  <option className="brend__type-item" value="Tshirt">T-shirt</option>
              </select>
          </div>

          <div className="brend__price">
              <p className="brend__price-title" htmlFor="price">Price: {priceRange} BGN</p>
              <input
              className="brend__price-input"
              id="price"
              type="range"
              min="110"
              max="600"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              />
          </div>

          <div className="brend__box">
            <p className="brend__box-title">Brends</p>
              <select className="brend__box-system"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  >
                  <option className="brend__box-item" value="all">Все</option>
                  <option className="brend__box-item" value="adidas">Adidas</option>
                  <option className="brend__box-item" value="ami">Ami Paris</option>
                  <option className="brend__box-item" value="assc">Anti Social Social Club</option>
                  <option className="brend__box-item" value="bape">Bape</option>
                  <option className="brend__box-item" value="balenciaga">Balenciaga</option>
                  <option className="brend__box-item" value="burberry">Burberry</option>
                  <option className="brend__box-item" value="carhart">Carhartt</option>
                  <option className="brend__box-item" value="cp">CP Company</option>
                  <option className="brend__box-item" value="corteiz">Corteiz</option>
                  <option className="brend__box-item" value="denim">Denim Tears</option>
                  <option className="brend__box-item" value="hugo">HUGO BOSS</option>
                  <option className="brend__box-item" value="lacoste">Lacoste</option>
                  <option className="brend__box-item" value="lv">LOUIS VUITTON</option>
                  <option className="brend__box-item" value="pa">Palm Angels</option>
                  <option className="brend__box-item" value="tnf">The North Face</option>
                  <option className="brend__box-item" value="thrasher">Thrasher</option>
                  <option className="brend__box-item" value="nike">Nike</option>
                  <option className="brend__box-item" value="nb">New Balance</option>
                  <option className="brend__box-item" value="stone-island">Stone Island</option>
                  <option className="brend__box-item" value="stussy">Stussy</option>
                  <option className="brend__box-item" value="spider">Sp5der</option>
                  <option className="brend__box-item" value="supreme">Supreme</option>
                  <option className="brend__box-item" value="ralph-lauren">Ralph Lauren</option>
                  <option className="brend__box-item" value="vetements">Vetements</option>
                  <option className="brend__box-item" value="vlone">Vlone</option>
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
                    <p className="catalog__item-size">{product.size}</p>
                    <p className="catalog__item-color">{product.color}</p>
                </div>
                <p className="catalog__item-prise" >{product.price} BGN</p>
            </div>
          ))
        ) : (
          <p className="catalog__no">No products found</p>
        )}
      </div>
    </div>
  );
};

export default CatalogUk;