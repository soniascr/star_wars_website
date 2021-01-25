import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {PlanetCard} from "../component/planetCard";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

  const listPlanets = elements.map((value, index) => {
        return <PlanetCard key={index} data={value}/>
      });

  //const listPeople;
  //const listVehicules;

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			
			 {/* Here is a list of planets */}
       {listPlanets}
       {/* Here is a list of people */}

       {/* Here is a list of vehicules */}
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
