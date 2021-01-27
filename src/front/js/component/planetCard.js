import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import planet from "../../img/planet.jpg";
import { Link } from "react-router-dom";

export const PlanetCard = props => {
	const [details, setDetails] = useState();

	useEffect(() => {
		debugger;
		fetch(props.data.url)
			.then(resp => resp.json())
			.then(data => setDetails(data.result.properties));
	}, []);

	return (
		<div className="card mb-3">
			<img className="card-img-top" src={planet} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{details ? details.name : ""}</h5>
				<p className="card-text">
					<div>Population: {details ? details.population : ""}</div>
					<div>Terrain: {details ? details.terrain : ""}</div>
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/planet/${props.data.uid}`}>
						<button className="btn btn-outline-primary">Learn more</button>
					</Link>
					<button className="btn btn-outline-warning">
						<span>
							<i className="far fa-heart" />
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
