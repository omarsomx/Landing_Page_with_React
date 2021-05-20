import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let loremIpsum =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.";
	return (
		<div>
			<Navbar />
			<div className="container-fluid pt-5 mt-5">
				<div className="row">
					<div className="col-8 mx-auto">
						<Jumbotron />
						<div className="card-deck">
							<Card
								videoUrl={
									"https://www.youtube.com/embed/xr80mdJByB8"
								}
								title="Disney Mariachi"
								text={loremIpsum}
								buttonUrl={"https://youtu.be/xr80mdJByB8"}
								buttonLabel="Go"
							/>
							<Card
								videoUrl={
									"https://www.youtube.com/embed/p8MpvbLTY-Q"
								}
								title="Princesas Disney 1"
								text={loremIpsum}
								buttonUrl={"https://youtu.be/p8MpvbLTY-Q"}
								buttonLabel="Go"
							/>
							<Card
								videoUrl={
									"https://www.youtube.com/embed/mGwsXZUB4Wo"
								}
								title="Princesas Disney 2"
								text={loremIpsum}
								buttonUrl={
									"https://www.youtube.com/mGwsXZUB4Wo"
								}
								buttonLabel="Go"
							/>
							<Card
								videoUrl={
									"https://www.youtube.com/embed/IOoMztym1LU"
								}
								title="Disney a Cappella Ingles"
								text={loremIpsum}
								buttonUrl={"https://youtu.be/IOoMztym1LU"}
								buttonLabel="Go"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
