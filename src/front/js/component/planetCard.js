import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

export const PlanetCard = props => {
	const [details, setDetails] = useState();

	useEffect(() => {
		debugger;
		fetch(props.data.url)
			.then(resp => resp.json())
			.then(data => setDetails(data.result.properties));
	}, []);

	return (
		<div className="card box-shadow">
			<img className="card-img-top" src={rigoImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{details ? details.name : ""}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	data: PropTypes.object
};
