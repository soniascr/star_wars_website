import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/planetCard";
import { PersonCard } from "../component/personCard";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const listPeople = store.people.map((value, index) => {
		return (
			<div key={index} className="col-md-4">
				<PersonCard data={value} />
			</div>
		);
	});

	const listPlanets = store.planets.map((value, index) => {
		return (
			<div key={index} className="col-md-4">
				<PlanetCard data={value} />
			</div>
		);
	});

	return (
		<div className="container m-3">
			<h2 className="text-danger">Characters</h2>
			{/* Here is a list of people */}
			<div className="row">{listPeople}</div>
			<h2 className="text-danger">Planets</h2>
			{/*list of planets*/}
			<div className="row">{listPlanets}</div>
		</div>
	);
};
