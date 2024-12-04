import React from "react";

import HeaderBg from "../../Header/Bg/HeaderBg";
import CatalogBg from "../../Catalog/Bg/CatalogBg";
import FooterBg from "../../Footer/FooterBg/FooterBg";

import './Bg.scss'

const Bg = () => {

    return(
        <>
            <HeaderBg></HeaderBg>
            <CatalogBg></CatalogBg>
            <FooterBg></FooterBg>
        </>
    )
}

export default Bg;