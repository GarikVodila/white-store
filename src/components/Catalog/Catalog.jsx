import React from "react";
import PropTypes from 'prop-types';

import  Item  from './Item/Item.jsx'

import './Catalog.scss'

function Catalog() {
    return(
        <>
            <div className="catalog__system">
                
            </div>
        </>
    );
}

Item.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.number,
    color: PropTypes.string,
};

export default Catalog;