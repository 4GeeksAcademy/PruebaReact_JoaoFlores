import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Contactos } from "./Contactos";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Contactos/> 

		</div>
	);
};

export default Home;