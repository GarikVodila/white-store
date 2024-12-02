import React from "react";

import './Carusel.scss'

function Carusel() {
    return(
        <>  
            <div className="carusel__container">
                <div className="carusel__row">
                    <div className="carusel__item add-1">
                        <h3 className="add-1__title">White Store</h3>
                        <div className="add-1__row">
                            <p className="add-1__sale">-25%</p>
                            <p className="add-1__text">Black Friday</p>
                            <p className="add-1__sale">-25%</p>
                        </div>
                        <h4 className="add-1__date">13.12 - 20.12</h4>
                    </div>
                    <div className="carusel__item add-2">White Store</div>
                    <div className="carusel__item add-3">White Store</div>
                </div>
            </div>
        </>
    )
}

export default Carusel;