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
                            <p className="footer__infoBox-text">Delivery is carried out from America, and occurs in the shortest possible time from 7 to 14 days. Deliveries are possible throughout Bulgaria, and pickup is possible in Varna.</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Orders</h2>
                            <p className="footer__infoBox-text">Orders are made through our managers in Telegram, orders are accepted within an hour. For your convenience, I leave their contacts <a href="https://t.me/Whitestore2024" className="footer__infoBox-text__link" target="_blank">here</a>.</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">About Us</h2>
                            <p className="footer__infoBox-text">Your online store, where you can buy original items at American prices, with free shipping, and the goods arrive at your place in the shortest possible time. The service is made for customers with maximum convenience and quality.</p>
                        </div>
                    </div>

                    <p className="footer__inc">© 2024 WhiteStore, Inc. All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default FooterUk;