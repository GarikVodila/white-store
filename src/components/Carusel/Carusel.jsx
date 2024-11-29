import React from "react";
import imgBaner from '../../../public/img/sale-baner.png'

import './Carusel.scss'

function Carusel() {
    return(
        <>  
            <div className="carusel__container">
                <div className="carusel__row">
                    <div className="carusel__item add-1"> <img className="carusel__item-img" src={imgBaner} alt="" /> </div>
                    <div className="carusel__item add-2">White Store</div>
                    <div className="carusel__item add-3">White Store</div>
                </div>
            </div>
        </>
    )
}

export default Carusel;