import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div>
			<footer className="row">
				<div className="col-3">
					<div className="logo">
						<p>
							Doctor-
							<span>
								Care <i class="fas fa-user-md"></i>
							</span>{" "}
						</p>
					</div>
				</div>
				<div className="col-3 quick_link">
					<h4>
						Quick <span>Links</span>{" "}
					</h4>
					<i class="fas fa-angle-double-right"> Home</i>
					<i class="fas fa-angle-double-right"> Service</i>
					<i class="fas fa-angle-double-right"> Doctors</i>
					<i class="fas fa-angle-double-right"> About</i>
					<i class="fas fa-angle-double-right"> Booking</i>
					<i class="fas fa-angle-double-right"> Blood-Bank</i>
				</div>
				<div className="col-3 quick_link">
					<h4>
						Service <span>Info</span>{" "}
					</h4>
					<i class="fas fa-angle-double-right"> Sergery</i>
					<i class="fas fa-angle-double-right"> Sejar</i>
					<i class="fas fa-angle-double-right"> Digonistic Lab</i>
					<i class="fas fa-angle-double-right"> Patients Food </i>
					<i class="fas fa-angle-double-right"> Free Blood Donner</i>
				</div>
				<div className="col-3 quick_link">
					<h4>
						{" "}
						Contact<span>Me</span>{" "}
					</h4>
					<i class="fab fa-facebook-f"> Facebook </i>
					<i class="fab fa-github"> github</i>
					<i class="fab fa-google"> Email: rejoanafridi93@gmail.com</i>
					<i class="fas fa-phone"> 01641585416 </i>
				</div>
				<hr />
				<p class="copyright-text">
					Copyright &copy; 2021 All Rights Reserved by <span> Mehedi  </span>
				</p>
			</footer>
		</div>
	);
};

export default Footer;
