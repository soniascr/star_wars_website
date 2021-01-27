import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import starwars from "../../img/starwars.jpg";
import { Link } from "react-router-dom";

export const addFavorite = e => {
    const [items, setItems] = useState([]);
    setItems(
        items.concat({
            
        })
    );
}