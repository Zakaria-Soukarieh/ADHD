import "./tools.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import React from "react";
// import Timer1 from "../../components/timer/Timer1";
// import Footer from "../../components/footer/Footer";
// import Contact from "../contact/contact";
const Tools = () => {
	return (
		<section>
			<h1>List of posts go here!</h1>
			<Link to="/tools/timer">timer</Link>
			<Link to="/tools/to-do">To Do list</Link>
			<Outlet />
		</section>
	);
};

export default Tools;
