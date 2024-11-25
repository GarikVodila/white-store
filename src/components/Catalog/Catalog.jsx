import React from "react";

import './Catalog.scss'

import Data from '../../../public/data.json';
console.log(Data);


function Catalog() {
    return(
        <>
            <div className="catalog__system">
                {Object.values(Data).map(item => 
                    <div key={item.id} className="catalog__item">
                        <p className="catalog__item-art">art:{item.art}</p>
                        <img src="" alt="#" />
                        <h3 className="catalog__item-title">{item.title}</h3>
                        <div className="catalog__item-row">
                            <p className="catalog__item-size">{item.size}</p>
                            <p className="catalog__item-color">{item.color}</p>
                        </div>
                        <p className="catalog__item-prise">{item.price} Lv</p>
                    </div>
                 )}
            </div>  
        </>
    );
}

export default Catalog;