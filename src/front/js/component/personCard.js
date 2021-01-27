import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import starwars from "../../img/starwars.jpg";
import { Link } from "react-router-dom";

export const PersonCard = props => {
	const [details, setDetails] = useState();

	useEffect(() => {
		fetch(props.data.url)
			.then(resp => resp.json())
			.then(data => setDetails(data.result.properties));
	}, []);

	return (
		<div className="card mb-3">
			<img className="card-img-top" src={starwars} />
			<div className="card-body">
				<h5 className="card-title">{details ? details.name : ""}</h5>
				<p className="card-text">
					<div>Gender: {details ? details.gender : ""}</div>
					<div>
						Hair-color:
						{details ? details.hair_color : ""}
					</div>
					<div>Eye-color: {details ? details.eye_color : ""}</div>
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/person/${props.data.uid}`}>
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

PersonCard.propTypes = {
	data: PropTypes.object
};
