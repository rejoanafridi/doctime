import React, { useEffect, useState } from "react";
import "./Feature.css";
import d_Img from "../../images/doctor.jpg";
import Doctor from "../Doctor/Doctor";
const Feature = () => {
	const [doctor, setDoctor] = useState([]);
	// console.log(doctor);
	useEffect(() => {
		fetch("doctor.json")
			.then((res) => res.json())
			.then((data) => setDoctor(data));
	}, []);

	return (
		<div>
			<div className="d-container">
				<h1>
					Our <span> Doctors </span>{" "}
				</h1>
				<div className="doctors">
							{
								doctor.map((data) => <Doctor key={data.id} doctor={data}></Doctor>)
							}
				
				</div>
			</div>
		</div>
	);
};

export default Feature;
