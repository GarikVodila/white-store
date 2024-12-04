import React from "react";

import HeaderUk from "../../Header/Uk/HeaderUk";
import CatalogUk from "../../Catalog/Uk/CatalogUk";
import FooterUk from "../../Footer/FooterUk/FooterUk";

import './Uk.scss';

function Uk() {
    return(
        <>
            <HeaderUk></HeaderUk>
            <CatalogUk></CatalogUk>
            <FooterUk></FooterUk>
        </>
    )
}

export default Uk;