import React from "react";

import '../Footer.scss'

function FooterBg () {
    return(
        <>
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__infoBox">
                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Време за доставка</h2>
                            <p className="footer__infoBox-text">Доставката се извършва от Америка и се извършва в най-кратки срокове от 7 до 14 дни. Възможни са доставки в цяла България, като е възможно и получаване на място във Варна.</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">Поръчки</h2>
                            <p className="footer__infoBox-text">Поръчките се правят чрез нашите мениджъри в Telegram, поръчките се приемат в рамките на един час. За ваше улеснение оставям <a href="https://t.me/Whitestore2024" className="footer__infoBox-text__link" target="_blank" >тук</a> контактите им.</p>
                        </div>

                        <div className="footer__infoBox__item">
                            <h2 className="footer__infoBox-title">За нас</h2>
                            <p className="footer__infoBox-text">Вашият онлайн магазин, където можете да закупите оригинални артикули на американски цени, с безплатна доставка, а стоките пристигат при вас в най-кратки срокове. Услугата е направена за клиенти с максимално удобство и качество, нашите мениджъри ще се радват да отговорят на вашите въпроси.</p>
                        </div>
                    </div>

                    <p className="footer__inc">© 2024 WhiteStore, Inc. All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default FooterBg;