import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/starwars.jpg";

export const PersonDetails = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img src={starwars} />
				</div>
				<div className="col-md-6">
					<p>lorem ipsum blah blah blah...</p>
				</div>
			</div>
			<div className="row">
				<hr className="my-4" />
				<div className="col-md-2">
					<p>Name {details ? details.name : ""}</p>
				</div>
				<div className="col-md-2">
					<p>Birth year {details ? details.birth_year : ""}</p>
				</div>
				<div className="col-md-2">
					<p>Gender {details ? details.gender : ""}</p>
				</div>
				<div className="col-md-2">
					<p>Height {details ? details.height : ""}</p>
				</div>
				<div className="col-md-2">
					<p>Skin colour {details ? details.skin_color : ""}</p>
				</div>
				<div className="col-md-2">
					<p>Eye colour {details ? details.eye_color : ""}</p>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

PersonDetails.propTypes = {
	match: PropTypes.object
};
