import React from "react";

import './Filter.scss'

function Filter() {
    return(
        <>
            <aside className="filter__container">
                <div className="brend__container">
                    <div className="brend__title">Бренды</div>
                    <div className="brend__column">
                        <a href="/sti" className="brend__column-item">Stone Island®</a>
                        <a href="/nk" className="brend__column-item">Nike®</a>
                        <a href="" className="brend__column-item">Moncler®</a>
                        <a href="" className="brend__column-item">Louis Vuitton®</a>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Filter;