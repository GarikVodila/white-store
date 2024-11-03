import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

import Header from "../../Header/Header.jsx";
import Filter from "../../Filter/Filter.jsx";
import Catalog from "../../Catalog/Catalog.jsx";
import Footer from "../../Footer/Footer.jsx";

import './HomePage.scss';

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Home page is location:', location);
    
    return(
        <>
            <div className="hp">
            <Header></Header>
            <div className="catalog__row">
                <Filter></Filter>
                <Catalog>
                    catalog={Catalog}
                </Catalog>
            </div>
            <Footer></Footer>
            </div>
        </>
    )
}

export default HomePage;