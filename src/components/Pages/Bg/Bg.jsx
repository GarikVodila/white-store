import React from "react";

import HeaderBg from "../../Header/Bg/HeaderBg";
import FilterBg from "../../Filter/FilterBg/FilterBg";
import Catalog from "../../Catalog/Catalog";
import FooterBg from "../../Footer/FooterBg/FooterBg";

import './Bg.scss'

const Bg = () => {

    return(
        <>
            <HeaderBg></HeaderBg>
            <div className="catalog__row">
                <FilterBg></FilterBg>
                <Catalog>
                    catalog={Catalog}
                </Catalog>
            </div>
            <FooterBg></FooterBg>
        </>
    )
}

export default Bg;