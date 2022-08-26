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
			<section>
				<h1 className="service-title">
					Our <span>Service</span>{" "}
				</h1>
				<div className=" container items">
					{data.map((s) => (
						<Services data={data} key={s.id} serv={s}></Services>
					))}
				</div>
			</section>
		</div>
	);
};

export default Service;
