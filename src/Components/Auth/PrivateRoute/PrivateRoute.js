import React, { useState } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { css } from "@emotion/react";

import ClipLoader from "react-spinners/ClipLoader";
const PrivateRoute = ({ children, ...rest }) => {
	const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
	`;
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#ffffff");
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return (
			<div className="sweet-loading">
				<button onClick={() => setLoading(!loading)}>Toggle Loader</button>
				<input
					value={color}
					onChange={(input) => setColor(input.target.value)}
					placeholder="Color of the loader"
				/>

				<ClipLoader color={color} loading={loading} css={override} size={150} />
			</div>
		);
	} else {
		return (
			<Route
				{...rest}
				render={({ location }) =>
					user.email ? (
						children
					) : (
						<Redirect
							to={{ pathname: "/login", state: { form: location } }}
						></Redirect>
					)
				}
			></Route>
		);
	}
};

export default PrivateRoute;

// Can be a string as well. Need to ensure each key-value pair ends with ;
