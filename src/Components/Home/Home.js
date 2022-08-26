import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import bannerImg from "../../images/banner-doctor.png";
import "./Home.css";
import Service from "../Service/Service";
import Doctor from "../Home/Feature";
import About from "../Shared/About/About";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<section className="banner">
				<div className="b_image">
					<img className="img-fluid" src={bannerImg} alt="" />
				</div>
				<div className="container banner-contents">
					<div className="content">
						<h1>
							A Modern <span>Clinic</span> In your City Now,
						</h1>
						<h3>
							We are Offering <span>70% Discount</span> in every Medical Test.
						</h3>
						<Link to="/doctors"> <button type="button" className="b-btn">
							Booking Now
						</button> </Link>
					</div>
				</div>
			</section>

			{/* Service */}
			<Service></Service>

			{/* Doctors */}
			<Doctor> </Doctor>
			{/* About us */}
			<About></About>
		</div>
	);
};

export default Home;
