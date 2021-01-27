import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import planet from "../../img/planet.jpg";
import { Link, useParams } from "react-router-dom";

export const PlanetDetail = props => {
	const [details, setDetails] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
			.then(resp => resp.json())
			.then(data => setDetails(data.result.properties));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="img-fluid text-center mb-3">
						<img src={planet} />
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
						<strong>Climate</strong>
					</p>
					<p>{details ? details.climate : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Population</strong>
					</p>
					<p> {details ? details.population : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Orbital Period</strong>
					</p>
					<p>{details ? details.orbital_period : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Rotation period</strong>
					</p>
					<p> {details ? details.rotation_period : ""}</p>
				</div>
				<div className="col-md-2">
					<p>
						<strong>Diameter</strong>
					</p>
					<p>{details ? details.diameter : ""}</p>
				</div>
			</div>
		</div>
	);
};
