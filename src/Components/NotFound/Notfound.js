import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";
const Notfound = () => {
	return (
		<div className="n_container">
			<h1>404 Page Not Found</h1>
			<Link to="/">
				<button type="button" className="btn btn-danger btn-sm btn-white">
					Go Back
				</button>
			</Link>
		</div>
	);
};

export default Notfound;
