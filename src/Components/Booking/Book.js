import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

import "./Book.css";
const Book = () => {
	const history = useHistory();
	const { user } = useAuth();
	// const id = window.location.pathname;
	const { bookingId } = useParams();

	const [single, setSingle] = useState([]);

	const [date, setDate] = useState("");

	const [booking, setBooking] = useState({});
	console.log(booking);

	const handleDate = (e) => {
		setDate(e.target.value);
	};

	const handleBooking = (e) => {
		if (date != "") {
			const books = {
				name: value?.name,
				email: user?.email,
				date: date,
				info: value?.short,
			};
			setBooking({ ...booking, ...books });
			alert("Booking Succesfully Completed!!");
			history.push("/");
		} else {
			alert("select appointment date first!!");
		}

		e.preventDefault();
	};

	useEffect(() => {
		fetch("/doctor.json")
			.then((response) => response.json())
			.then((data) => setSingle(data));
	}, []);

	const value = single.find((d) => d.id == bookingId);

	return (
		<div>
			<div className="booking-container">
				<div className="books">
					<div className="book">
						<div>
							<div className="title">
								<h2>
									Book <span> Appointment</span>
								</h2>
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
						{/* <Appoinment data={data}></Appoinment> */}
						<div>
							<div>
								<input type="text" placeholder="name" value={value?.name} />
								<input type="email" placeholder="email" value={user?.email} />
							</div>
							<div>
								<input
									onChange={handleDate}
									type="date"
									placeholder=""
									required
								/>
								<input type="text" value={value?.short} />
							</div>
							<div className="d-flex ">
								<textarea placeholder="Message"></textarea>
								<button
									className="btn btn-danger text-white mb-5"
									onClick={handleBooking}
									type="submit"
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
