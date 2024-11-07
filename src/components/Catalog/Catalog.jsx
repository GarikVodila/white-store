import React from "react";

import './Catalog.scss'

function Catalog() {
    return(
        <>
            <div className="catalog__system">
                <div className="catalog__item">
                    <h3 className="catalog__item-art">Art:5101</h3>
                    <img src="https://i.pinimg.com/564x/b2/62/2f/b2622fb5598559054805b9b53140d030.jpg" alt="#" className="catalog__item-img" />
                    <h2 className="catalog__item-title">Stone island zip-up bape</h2>
                    <div className="catalog__item-row">
                        <p className="catalog__item-size">s-xl</p>
                        <div className="catalog__item-color__row">
                            <div className="catalog__item-color-black"></div>
                            <div className="catalog__item-color-pink"></div>
                            <div className="catalog__item-color-white"></div>
                            <div className="catalog__item-color-blue"></div>
                            <div className="catalog__item-color-grey"></div>
                            <div className="catalog__item-color-haki"></div>
                        </div>
                    </div>
                    <p className="catalog__item-prise">210лв</p>
                </div>
                {/*  */}
                <div className="catalog__item">
                    <h3 className="catalog__item-art">Art:5102</h3>
                    <img src="https://i.pinimg.com/564x/10/eb/24/10eb244d978b1dfd9197ccb230b477fe.jpg" alt="#" className="catalog__item-img" />
                    <h2 className="catalog__item-title">Stone island zip up hoodie</h2>
                    <div className="catalog__item-row">
                        <p className="catalog__item-size">s-m-l</p>
                        <div className="catalog__item-color__row">
                            <div className="catalog__item-color-pink"></div>
                            <div className="catalog__item-color-red"></div>
                            <div className="catalog__item-color-purple"></div>
                        </div>
                    </div>
                    <p className="catalog__item-prise">220лв</p>
                </div>
                {/*  */}
                <div className="catalog__item">
                    <h3 className="catalog__item-art">Art:7805</h3>
                    <img src="https://i.pinimg.com/564x/d7/db/8f/d7db8fafa6efecf3d513baf9784f6f1c.jpg" alt="#" className="catalog__item-img" />
                    <h2 className="catalog__item-title">Moncler|Vests</h2>
                    <div className="catalog__item-row">
                        <p className="catalog__item-size">s-m-l</p>
                        <div className="catalog__item-color__row">
                            <div className="catalog__item-color-black"></div>
                        </div>
                    </div>
                    <p className="catalog__item-prise">450лв</p>
                </div>
                {/*  */}
                <div className="catalog__item">
                    <h3 className="catalog__item-art">Art:7806</h3>
                    <img src="https://i.pinimg.com/564x/71/06/75/710675b5911b8cc22031919b2f752177.jpg" alt="#" className="catalog__item-img" />
                    <h2 className="catalog__item-title">Moncler|Puffer Jacket</h2>
                    <div className="catalog__item-row">
                        <p className="catalog__item-size">s-m-l</p>
                        <div className="catalog__item-color__row">
                            <div className="catalog__item-color-black"></div>
                        </div>
                    </div>
                    <p className="catalog__item-prise">650лв</p>
                </div>
                {/*  */}
                <div className="catalog__item">
                    <h3 className="catalog__item-art">Art:1401</h3>
                    <img src="https://i.pinimg.com/564x/79/d7/ac/79d7ac4beda72285255505bf59fefeca.jpg" alt="#" className="catalog__item-img" />
                    <h2 className="catalog__item-title">Nike tech fleece </h2>
                    <div className="catalog__item-row">
                        <p className="catalog__item-size">s-m-l</p>
                        <div className="catalog__item-color__row">
                            <div className="catalog__item-color-black"></div>
                            <div className="catalog__item-color-white"></div>
                            <div className="catalog__item-color-grey"></div>
                            <div className="catalog__item-color-blue"></div>
                            <div className="catalog__item-color-red"></div>
                            <div className="catalog__item-color-cream"></div>
                            <div className="catalog__item-color-brown"></div>
                        </div>
                    </div>
                    <p className="catalog__item-prise">250лв</p>
                </div>
                {/*  */}
                <div className="catalog__item">
                    <h3 className="catalog__item-art">Art:1402</h3>
                    <img src="https://i.pinimg.com/564x/9e/52/2c/9e522ce2494c02628b6c9d3368a0feb9.jpg" alt="#" className="catalog__item-img" />
                    <h2 className="catalog__item-title">Nike tech fleece</h2>
                    <div className="catalog__item-row">
                        <p className="catalog__item-size">s-m-l</p>
                        <div className="catalog__item-color__row">
                            <div className="catalog__item-color-blue-white"></div>
                            <div className="catalog__item-color-black-grey"></div>
                            <div className="catalog__item-color-brown-white"></div>
                        </div>
                    </div>
                    <p className="catalog__item-prise">250лв</p>
                </div>
            </div>  
        </>
    );
}

export default Catalog;