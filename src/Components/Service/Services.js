import React from "react";
import { Link } from "react-router-dom";

const Services = ({ serv }) => {
	const { id, name, short, image } = serv;
	// console.log(image);
	return (
		
		<div className="item">
			<div>
				<i className={image}></i>
				<h3>{name}</h3>
				<p>{short}</p>

				<Link to={`/service-details/${id}`}>
					<button className="btn btn-sm btn-danger text-white">
						Learn More <i className="fas fa-arrow-right"></i>
					</button>

				</Link>
			</div>
		</div>
	);
};

export default Services;
