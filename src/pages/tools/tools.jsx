import "./tools.css";
import { Link, Outlet } from "react-router-dom";
import React from "react";

const Tools = () => {
	return (
		<section className="tools-section">
			<h1 className="tools-heading">Some Helpful Tools That Will Help!</h1>
			<div className="tools-links-container">
			<Link to="/tools/timer" className="tools-link">Timer</Link>
			<Link to="/tools/to-do" className="tools-link">To-Do List</Link>
			</div>
			<Outlet />
		</section>
	);
};

export default Tools;
