import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import starwars from "../../img/starwars.jpg";
import { Link } from "react-router-dom";

export const PersonCard = props => {
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
			<img className="card-img-top" src={starwars} />
			<div className="card-body">
				<h5 className="card-title">{details ? details.properties.name : ""}</h5>
				<p className="card-text">
					<div>Gender: {details ? details.properties.gender : ""}</div>
					<div>
						Hair-color:
						{details ? details.properties.hair_color : ""}
					</div>
					<div>Eye-color: {details ? details.properties.eye_color : ""}</div>
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/person/${props.data.uid}`}>
						<button className="btn btn-outline-primary">Learn more</button>
					</Link>

					<button className="btn btn-outline-warning" onClick={event => actions.addFavorites(details)}>
						<span>
							<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

PersonCard.propTypes = {
	data: PropTypes.object
};
