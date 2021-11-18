import React from "react";
import "./Book.css";
const Book = () => {
	return (
		<div>
			<div className="booking-container">
				<div className="books">
					<div className="book">
						<div>
							<div className="title">
								<h2>Book <span> Appointment</span></h2>
								<h5>More Information</h5>
							</div>
							<div className="information">
								<span>
									<i className="fas fa-map-pin fa-3x"></i>
								</span>
								<span>
									<p>Address</p>
									<p>Agargoan - Dhaka 1216</p>
								</span>
							</div>
							<div className="information">
								<span>
									<i className="fas fa-envelope fa-3x"></i>
								</span>
								<span>
									<p>Email</p>
									<p>doctor.care@gmail.com</p>
								</span>
							</div>
							<div className="information">
								<span>
									<i className="fas fa-phone fa-3x"></i>
								</span>
								<span>
									<p>Phone Number ----------</p>
									<p>01725198827</p>
								</span>
							</div>
						</div>
					</div>
					<div className="book">
						<div>
							<div>
								<input type="text" placeholder="name" />
								<input type="email" placeholder="email" />
							</div>
							<div>
								<input type="number" placeholder="phone number" />
								<select className="option">
									<option value="0">Doctor Ahsan</option>
									<option value="1">Md Ahsan</option>
								</select>
							</div>
							<textarea placeholder="Message"></textarea>
							<button class="btn btn-danger text-white" type="button">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
