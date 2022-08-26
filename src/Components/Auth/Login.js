import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import useFirebase from "../../hooks/firebase";
import { useHistory } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const auth = getAuth();

	const history = useHistory();
	const { signInWithGoogleAuth, user } = useFirebase();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPass(e.target.value);
	};
	const handleLogin = (e) => {
		if (email != "" && pass != "") {
			signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				
				
			});
		} else {
			alert("please enter your email and password first");
		}
	};

	return (
		<div className="login-container">
			<h1>
				<span>Login</span> Here
			</h1>
			<div className="login-form">
				<div>
					<form action="">
						<input
							onChange={handleEmailChange}
							type="email"
							name="email"
							placeholder="Enter your email"
						/>

						<input
							onBlur={handlePasswordChange}
							type="password"
							name="password"
							placeholder="Enter your Password"
						/>

						<input
							onClick={handleLogin}
							className="btn btn-sm btn-danger text-white"
							type="button"
							value="submit"
						/>
						<div>
							<button
								type="button"
								onClick={signInWithGoogleAuth}
								className="btn btn-sm btn-danger text-white"
							>
								{user.email ? history.push("/") : history.push("/login")}
								<i class="fab fa-google"> google </i>
							</button>

							<div>
								-------------------------- or ------------------------------
							</div>
						</div>
						<p>
							don't have an account <Link to="/register">register here</Link>{" "}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
