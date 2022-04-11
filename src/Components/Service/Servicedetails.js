import React, { useEffect, useState } from "react";
import "./Servicedetails.css";
// import s_Img from "../../images/doctor.jpg";
import { useParams } from "react-router-dom";
import Details from "./Details";
const Servicedetails = () => {
	const { serviceId } = useParams();

	const [service, setService] = useState([]);

	// const [single, setSingle] = useState([]);

	useEffect(  () => {
		fetch("service.json")
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);

	// useEffect(() => {
	// 	const value = service.find((d) => d.id == serviceId);
	// 	setService(value);
	// 	// console.log(single);
	// }, [service]);
	return (
		<div>
			<div className="">
				<div className="service-details">
					{service.map((data) => (
						<Details key={data.id} data={data}></Details>
					))}

					<p>ServiceDetails Page{serviceId}</p>
				</div>
			</div>
		</div>
	);
};

export default Servicedetails;
