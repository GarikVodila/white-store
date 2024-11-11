import React from "react";

import '../Filter.scss'

function FilterUk() {
    return(
        <>
            <aside className="filter__container">
                <div className="brend__container">
                    <div className="brend__title">Brands</div>
                    <div className="brend__column">
                        <a href="/sti" className="brend__column-item">Stone Island®</a>
                        <a href="/nk" className="brend__column-item">Nike®</a>
                        <a href="" className="brend__column-item">Adidas®</a>
                        <a href="" className="brend__column-item">Puma®</a>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default FilterUk;