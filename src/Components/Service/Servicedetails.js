import React, { useEffect, useState } from "react";
import "./Servicedetails.css";
// import s_Img from "../../images/doctor.jpg";
import { useParams } from "react-router";
import Details from "./Details";
const Servicedetails = () => {
	const { id } = useParams();
	console.log(id)
	const [service, setService] = useState([]);
	console.log("we", service);
	const [single, setSingle] = useState([]);
	useEffect(() => {
		fetch("service.json")
			.then((res) => res.json())
			.then((service) => setService(service));
	}, []);
	// useEffect(() => {
	// 	const value = service.find((d) => d.id == id);
	// 	setSingle(value);
	// 	console.log(single)
	// }, [service]);
	return (
		<div>
			<div className="">
				<div className="service-details">
					{single.map((data) => (
						<Details key={data.id} data={data}></Details>
					))}
					
					<p>afridi{id}</p>
				</div>
			</div>
		</div>
	);
};

export default Servicedetails;
