import React from "react";

const Details = ({ data }) => {
	const { name, image, short, description } = data;
	console.log(name);
	return (
		<div>
			<div>
				{/* <img src={} alt="" /> */}
				<h3>{name}</h3>
				<p>{short}</p>
				<h5>Description : </h5>
				<p>{description}</p>
				<button className="btn btn-sm btn-danger text-white ">
					Appointment
				</button>
			</div>
		</div>
	);
};

export default Details;
