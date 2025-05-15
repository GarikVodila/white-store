import React, { useState } from "react";
import './Catalog.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
      art: 3801, 
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
      art: 3101, 
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
      art: 3801, 
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
      art: 3802, 
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
      name: "Anti Social Social Club x CPFM Tee",
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
  ]

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
      color: "White",
      brand: "ami"
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

    { id: 8, 
      name: "New Balance Sneakers Classics M1906AD",
      image:[
        'https://i.ibb.co/XxD30cW3/2025-05-07-221118076.png'
      ], 
      art: 3801, 
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
        'https://i.ibb.co/M5PSCKMb/2025-05-09-004153099-Photoroom.png',
        'https://i.ibb.co/YFHjF7MY/2025-05-09-004241001-Photoroom.png',
        'https://i.ibb.co/VWjswNQG/2025-05-09-004350853-Photoroom.png'
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
const Catalog = () => {
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(350);
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
          {sales.map((sale) => (
            <SwiperSlide key={sale.id}>
              <div className="p-4 border rounded-xl shadow-sm bg-white text-center">
                <img className="catalog__item-addimg" src={sale.image} alt="#" />
                <h3 className="catalog__item-title">{sale.name}</h3>
                <div className="catalog__item-row">
                    <p className="catalog__item-size">{sale.size}</p>
                    <p className="catalog__item-color">{sale.color}</p>
                </div>
                <p className="catalog__item-prise" >{sale.price}Lv</p>
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
              min="110"
              max="500"
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
                  <option className="brend__box-item" value="assc">Anti Social Social Club</option>
                  <option className="brend__box-item" value="bape">Bape</option>
                  <option className="brend__box-item" value="balenciaga">Balenciaga</option>
                  <option className="brend__box-item" value="burberry">Burberry</option>
                  <option className="brend__box-item" value="cp">CP Company</option>
                  <option className="brend__box-item" value="carhart">Carhartt</option>
                  <option className="brend__box-item" value="denim">Denim Tears</option>
                  <option className="brend__box-item" value="hugo">HUGO BOSS</option>
                  <option className="brend__box-item" value="lacoste">Lacoste</option>
                  <option className="brend__box-item" value="lv">LOUIS VUITTON</option>
                  <option className="brend__box-item" value="pa">Palm Angels</option>
                  <option className="brend__box-item" value="tnf">The North Face</option>
                  <option className="brend__box-item" value="nike">Nike</option>
                  <option className="brend__box-item" value="nb">New Balance</option>
                  <option className="brend__box-item" value="stone-island">Stone Island</option>
                  <option className="brend__box-item" value="stussy">Stussy</option>
                  <option className="brend__box-item" value="spider">Sp5der</option>
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