import React from "react";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
	const { id, name, image, short, schedule } = doctor;
	return (
		<div className="doctor">
			<div className="">
				<img src={image} alt="doctor_image" />
				<h3>{name}</h3>
				<p>{short} </p>
				<h5>{schedule}</h5>

				<Link to={`/booking/${id}`}>
					<button className="btn btn-sm btn-danger text-white">
						Booking Now 
					</button>
				</Link>
				<div className="icons">
					<i class="fab  fa-facebook fa-3x"></i>
					<i class="fab  fa-twitter fa-3x"></i>
					<i class="fab  fa-whatsapp fa-3x"></i>
				</div>
			</div>
		</div>
	);
};

export default Doctor;
