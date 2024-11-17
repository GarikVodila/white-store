import React from "react";

import './Footer.scss'

function Footer () {
    return(
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__infoBox">
                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Срок доставки</h2>
                            <p className="footer__infoBox-text">Доставка осуществляется с Америки, и происходит в кратчайшие сроки от 7 до 14 дней. Возможны доставки по всей Болгарии, по Варне возможен самовывоз.</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Заказы</h2>
                            <p className="footer__infoBox-text">Заказы осуществляются через наших менеджеров в Telegram, заказы принимаются в течении часа. Для вашего удобства оставляю <a href="https://t.me/Whitestore2024" className="footer__infoBox-text__link" target="_blank">здесь</a> их контакты.</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">О нас</h2>
                            <p className="footer__infoBox-text">Твой интернет магазин, где ты можешь взять оригинальные вещи, по цене с Америки, с бесплатной доставкой и в кратчайшие сроки товар оказывается у вас. Сервис сделан для клиентов с максимальным удобством и качеством.</p>
                        </div>
                    </div>

                    <p className="footer__inc">© 2024 WhiteStore, Inc. All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default Footer;