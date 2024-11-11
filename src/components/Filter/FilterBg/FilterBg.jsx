import React from "react";

import '../Filter.scss'

function FilterBg() {
    return(
        <>
            <aside className="filter__container">
                <div className="brend__container">
                    <div className="brend__title">Марки</div>
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

export default FilterBg;