import React from "react";

import '../Footer.scss'

function FooterUk () {
    return(
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__infoBox">
                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Delivery time</h2>
                            <p className="footer__infoBox-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iure veritatis officia voluptatum laboriosam deleniti autem doloribus</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Orders</h2>
                            <p className="footer__infoBox-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iure veritatis officia voluptatum laboriosam deleniti autem doloribus</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">About Us</h2>
                            <p className="footer__infoBox-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iure veritatis officia voluptatum laboriosam deleniti autem doloribus</p>
                        </div>
                    </div>

                    <p className="footer__inc">© 2024 WhiteStore, Inc. All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default FooterUk;