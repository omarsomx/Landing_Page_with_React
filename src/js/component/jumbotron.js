import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import disneyLogo from "../../img/disneyLogo.png";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4 text-center">
				Mis videos favoritos de{" "}
				<img src={disneyLogo} height="30%" width="30%" />
			</h1>
			<p className="lead">
				Quiero compartir mis videos favoritos que he encontrado en YT
				acerca de las canciones de Disney
			</p>
			<p className="lead">
				<a
					className="btn btn-primary btn-lg"
					href="https://disney.es/"
					role="button">
					Learn more
				</a>
			</p>
		</div>
	);
}
