import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";

export const FavoritesList = () => {
	const { store, actions } = useContext(Context);

	const allFav = store.favorites.map((item, index) => {
		let url = "";
		if (item.properties.diameter) {
			url = `/planet/${item.uid}`;
		} else if (item.properties.height) {
			url = `/person/${item.uid}`;
		}
		return (
			<Dropdown.Item key={index}>
				<Link to={url}>{item.properties.name}</Link>
				<button className="close" onClick={() => actions.removeFavorite(index)}>
					<i className="fas fa-trash" />
				</button>
			</Dropdown.Item>
		);
	});

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				Favorites <span className="badge badge-secondary">{allFav.length}</span>
			</Dropdown.Toggle>

			<Dropdown.Menu>{allFav}</Dropdown.Menu>
		</Dropdown>
	);
};
