import React from "react";
import PropTypes from "prop-types";

import './Item.scss'

function Item() {

    return(
        <>

        </>
    )
}

Item.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.number,
    color: PropTypes.string,
};

export default Item;