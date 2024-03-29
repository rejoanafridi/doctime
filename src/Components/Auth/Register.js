import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useHistory } from "react-router";
import useFirebase from "../../hooks/firebase";

const Register = () => {
	const history = useHistory();
	const { signInWithGoogleAuth, user } = useFirebase();
	const auth = getAuth();
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange1 = (e) => {
		setPass(e.target.value);
	};
	// const handlePasswordChange2 = (e) => {
	// 	console.log(e.target.value);
	// };
	const handleRegister = (e) => {
		console.log("wow", email, pass);
		if (email != "" && pass != "") {
			createUserWithEmailAndPassword(auth, email, pass).then((result) => {
				const user = result.user;

				{
					email ? history.push("/login") : history.push("/register");
				}
			});
		} else {
			alert("Please check ur email and password");
		}

		e.preventDefault();
	};

	return (
		<div className="register-container">
			<h1>
				<span>Register </span> Here
			</h1>
			<div className="register-form">
				<div>
					<form>
						<input
							onChange={handleEmailChange}
							type="email"
							name="email"
							placeholder="Enter your email"
							required
						/>

						<input
							onBlur={handlePasswordChange1}
							type="password"
							name="password"
							placeholder="Enter your Password"
							required
						/>
						{/* <input
							onBlur={handlePasswordChange2}
							type="password"
							name="password"
							placeholder="Enter  Password again"
						/> */}

						<input
							onClick={handleRegister}
							className="btn btn-sm btn-danger text-white"
							type="button"
							value="Sign Up"
						/>

						<div>
							<button
								type="button"
								className="btn btn-sm btn-danger text-white"
							>
								<i class="fab fa-google"></i> google{" "}
							</button>
						</div>
						<div>------------------------- or ----------------------------</div>
						<p>
							already registered <Link to="/login">Login here</Link>{" "}
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
