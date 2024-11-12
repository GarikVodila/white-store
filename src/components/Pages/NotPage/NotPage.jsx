import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

import Header from "../../Header/Header";
import Footer from '../../Footer/Footer'

import'./NotPage.scss'

const NotPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Not page:', location);
    
    const goBack = () => navigate(-1)

    return(
        <>
            <Header></Header>

            <div className="notPage__container">
                <div className="notPage__infoBox">
                    <h2 className="notPage__info">Press again|Нажмите еще раз|Натиснете отново</h2>
                    <a onClick={goBack} className="notPage__btn">Вернуться на главную</a>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default NotPage;