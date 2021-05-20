import React from "react";
import Proptypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card(props) {
	return (
		<div className="card">
			<div width="100%" height="100%">
				<iframe
					width="100%"
					height="100%"
					src={props.videoUrl}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			</div>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	videoUrl: Proptypes.string,
	imgUrl: Proptypes.string,
	title: Proptypes.string,
	text: Proptypes.string,
	buttonUrl: Proptypes.string,
	buttonLabel: Proptypes.string
};
