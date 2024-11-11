import React from "react";

import HeaderUk from "../../Header/Uk/HeaderUk";
import Catalog from "../../Catalog/Catalog";
import FilterUk from "../../Filter/FilterUk/FilterUk";
import FooterUk from "../../Footer/FooterUk/FooterUk";

import './Uk.scss';

function Uk() {
    return(
        <>
            <HeaderUk></HeaderUk>
            <div className="catalog__row">
                <FilterUk></FilterUk>
                <Catalog>
                    catalog={Catalog}
                </Catalog>
            </div>
            <FooterUk></FooterUk>
        </>
    )
}

export default Uk;