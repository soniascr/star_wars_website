import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FavoritesList } from "./FavoritesList";
import starwars from "../../img/starwars.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand">
					<img src={starwars} width="50" height="30" alt="" />
				</span>
			</Link>
			<FavoritesList />
		</nav>
	);
};
