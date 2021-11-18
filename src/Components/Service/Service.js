import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Service.css";
import Services from "./Services";
const Service = () => {
	const [data, setData] = useState([]);
	// console.log(data)

	useEffect(() => {
		fetch("service.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div>
			<section className="service-container">
				<h1 className="service-title">
					Our <span>Service</span>{" "}
				</h1>
				<div className="items">
					{data.map((s) => (
						<Services key={s.id} serv={s}></Services>
					))}
				</div>
			</section>
		</div>
	);
};

export default Service;
