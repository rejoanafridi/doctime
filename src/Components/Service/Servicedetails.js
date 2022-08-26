import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Servicedetails.css";

const ServiceDetails = () => {
	const { serviceId } = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/api_data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	const filter = data.find((d) => d.id == serviceId);

	return (
		<div>
			<div className="">
				<div className="service-details">
					<div className="service-detail">
						<h1>{filter?.name}</h1>
						<i className={filter?.image} alt="" />

						<p>{filter?.description}</p>
						<Link to="/">
							{" "}
							<button className="btn btn-sm btn-danger text-white">
								back to home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ServiceDetails;
