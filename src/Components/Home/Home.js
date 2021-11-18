import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import bannerImg from "../../images/banner-doctor.png";
import "./Home.css";
import Service from "../Service/Service";
import Doctor from "../Home/Feature";
import About from "../Shared/About/About";
const Home = () => {
	return (
		<div>
			
			
			<section className="row banner">
				<div className="col b_image">
					<img src={bannerImg} alt="" />
				</div>
				<div className="col banner-contents">
					<div className="content">
						<h1>A Modern  <span>Clinic</span>  In your City Now,,</h1>
						<h3>
							We are Offering <span>70% Discount</span> in every Medical Test. 
						</h3>
						<button type="button" className='b-btn'>Booking Now</button>
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
