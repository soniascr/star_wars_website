import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import planet from "../../img/planet.jpg";
import { Link } from "react-router-dom";

export const PlanetCard = props => {
	const [details, setDetails] = useState();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch(props.data.url)
			.then(resp => resp.json())
			.then(data => setDetails(data.result));
	}, []);

	let isFavorite = store.favorites.find(element => element.uid === props.data.uid) !== undefined;

	return (
		<div className="card mb-3">
			<img className="card-img-top" src={planet} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{details ? details.properties.name : ""}</h5>
				<div className="card-text">
					<div>Population: {details ? details.properties.population : ""}</div>
					<div>Terrain: {details ? details.properties.terrain : ""}</div>
				</div>
				<div className="d-flex justify-content-between">
					<Link to={`/planet/${props.data.uid}`}>
						<button className="btn btn-outline-primary mt-2">Learn more</button>
					</Link>
					<button className="btn btn-outline-warning mt-2" onClick={event => actions.addFavorites(details)}>
						<span>
							<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	data: PropTypes.object
};
