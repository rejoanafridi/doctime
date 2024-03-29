import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="container">
			<footer className="footer">
				<div className="">
					<div className="logo">
						<p>
							Doctor-
							<span>
								Care <i className="fas fa-user-md"></i>
							</span>{" "}
						</p>
					</div>
				</div>
				<div className=" quick_link">
					<h4>
						Quick <span>Links</span>{" "}
					</h4>
					<i className="fas fa-angle-double-right"> Home</i>
					<i className="fas fa-angle-double-right"> Service</i>
					<i className="fas fa-angle-double-right"> Doctors</i>
					<i className="fas fa-angle-double-right"> About</i>
					<i className="fas fa-angle-double-right"> Booking</i>
					<i className="fas fa-angle-double-right"> Blood-Bank</i>
				</div>
				<div className=" quick_link">
					<h4>
						Service <span>Info</span>{" "}
					</h4>
					<i className="fas fa-angle-double-right"> Sergery</i>
					<i className="fas fa-angle-double-right"> Sejar</i>
					<i className="fas fa-angle-double-right"> Digonistic Lab</i>
					<i className="fas fa-angle-double-right"> Patients Food </i>
					<i className="fas fa-angle-double-right"> Free Blood Donner</i>
				</div>
				<div className=" quick_link">
					<h4>
						{" "}
						Contact<span>Me</span>{" "}
					</h4>
					<i className="fab fa-facebook-f"> Facebook </i>
					<i className="fab fa-github"> github</i>
					<i className="fab fa-google"> Email: rejoanafridi93@gmail.com</i>
					<i className="fas fa-phone"> 01641585416 </i>
				</div>
			</footer>
			<hr />
			<p className="copyright-text">
				Copyright &copy; 2021 All Rights Reserved By <span> Rejoan </span>
			</p>
		</div>
	);
};

export default Footer;
