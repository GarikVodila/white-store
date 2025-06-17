import React from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../../Header/Header";

import './Us.scss'

function Us() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return(
        <>
            <Header></Header>

            <div className="us-wrapper">
                <button className="us__container-backBtn" onClick={goBack}>Назад</button>
                <div className="us__container">
                    <h1 className="us__container-title">О нас</h1>
                    <p className="us__container-text">Твой интернет магазин, где ты можешь взять оригинальные вещи, по цене с Америки, с бесплатной доставкой и в кратчайшие сроки товар оказывается у вас. Сервис сделан для клиентов с максимальным удобством и качеством.</p>
                </div>

                <div className="us__container">
                    <h1 className="us__container-title">Заказы</h1>
                    <p className="us__container-text">Заказы осуществляются через наших менеджеров в Telegram, заказы принимаются в течении часа. Для вашего удобства оставляю 
                    <a href="https://t.me/managerWhitestore" target="blank" className="us__container-text-link"> здесь </a>
                    их контакты.Ваши вещи будут доставлены в сроках 14-18 дней, возможен самовывоз по Варне или доставка прямо на ваш адрес.</p>
                </div>

                <div className="us__container">
                    <h1 className="us__container-title">Поддержка</h1>
                    <p className="us__container-text">Если возникнут вопросы по товарам,возникают ошибки с сервисом или хотите узнать местоположение вашей поссылки обращайтесь к нашему<a href="https://t.me/managerWhitestore" target="blank" className="us__container-text-link"> менеджеру</a>, </p>
                </div>
            </div>

        <div className="us-footer">© 2024 WhiteStore, Inc. All rights reserved</div>
        </>
    )
}
export default Us;