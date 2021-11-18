import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Components/Service/Service";
import About from "./Components/Shared/About/About";
import Book from "./Components/Booking/Book";
import Login from "./Components/Auth/Login";
import Feature from "./Components/Home/Feature";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Servicedetails from "./Components/Service/Servicedetails";
import Notfound from "./Components/NotFound/Notfound";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import AuthProvider from "./Components/contexts/AuthProvider";

const App = () => {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header></Header>

					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>

						<Route path="/services">
							<Service></Service>
						</Route>
						{/* set Private Route */}
						<PrivateRoute path="/service-details/:serviceId">
							<Servicedetails></Servicedetails>
						</PrivateRoute>
						<Route path="/about">
							<About></About>
						</Route>
						<Route path="/doctors">
							<Feature></Feature>
						</Route>
						<Route path="/booking">
							<Book></Book>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route path="/service-details">
							<Servicedetails></Servicedetails>
						</Route>
						<Route path="*">
							<Notfound></Notfound>
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
			<Footer></Footer>
		</div>
	);
};

export default App;
