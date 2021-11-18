import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/firebase";
const Header = () => {
	const { logOut, user } = useFirebase();
	return (
		<div>
			<nav>
				<div className="logo">
					<Link to="/">
						Doctor-
						<span>
							Care <i class="fas fa-user-md"></i>
						</span>{" "}
					</Link>
				</div>
				<div className="nav-items">
					<div className="item">
						<Link className="active" to="/home">
							Home
						</Link>
						<Link to="/services">Services</Link>
						<Link to="/about">About</Link>
						<Link to="/doctors">Doctors</Link>
						{/* check user logging or not!! */}
						{user.email ? (
							<Link to="/booking">Booking</Link>
						) : <Link to="/login">Booking</Link>}
					</div>
					<div className="login">
						{/* check user logging or not!! */}
						{user.email ? (
							<>
								<p>Hi,{user.email}!</p>
								<button
									className="btn btn-danger text-white btn-sm"
									onClick={logOut}
									type="button"
								>
									Logout
								</button>
							</>
						) : (
							<>
								<Link to="/login">
									{" "}
									<i class="fas fa-sign-in-alt"> Login </i>{" "}
								</Link>
								<Link to="/register">
									{" "}
									<i class="fas fa-sign-in-alt"> Sign Up </i>{" "}
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
