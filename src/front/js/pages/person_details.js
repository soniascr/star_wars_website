import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/starwars.jpg";

export const PersonDetail = props => {
	const [details, setDetails] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.id}`)
			.then(resp => resp.json())
			.then(data => setDetails(data.result.properties));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="img-fluid text-center mb-3">
						<img src={starwars} />
					</div>
				</div>
				<div className="col-md-6">
					<h1>{details ? details.name : ""}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, ante at mollis faucibus,
						mauris ligula venenatis nulla, eget tincidunt odio felis eu magna. Donec vel justo ac nisi
						condimentum rhoncus. Nunc non sem efficitur, luctus elit vel, malesuada mi. Curabitur vel massa
						interdum, vestibulum mauris non, consequat leo. Aliquam ut augue ac enim tempor dictum. Fusce
						rutrum tortor at dui posuere, a viverra magna porta. Fusce erat orci, maximus non molestie
						vitae, hendrerit at mi. In hac habitasse platea dictumst. Duis ultrices pharetra leo, sed
						aliquet justo interdum ac.
					</p>
				</div>
			</div>
			<div className="bg-danger">
				<hr />
			</div>
			<div className="row text-danger text-center">
				<hr />
				<div className="col-md-2">
					<p>
						<strong>Name</strong>
					</p>
					<p>{details ? details.name : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Birth year</strong>
					</p>
					<p>{details ? details.birth_year : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Gender</strong>
					</p>
					<p> {details ? details.gender : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Height</strong>
					</p>
					<p>{details ? details.height : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Skin colour</strong>
					</p>
					<p> {details ? details.skin_color : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Eye colour</strong>
					</p>
					<p>{details ? details.eye_color : ""}</p>
				</div>
			</div>
		</div>
	);
};
