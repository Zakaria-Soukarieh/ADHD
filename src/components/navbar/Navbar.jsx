import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Navbar.css";
import logo from "./adhd brain branding -10.svg";

import menu from "./Menu.png";

const Navbar = ({ setMenuBar, menubar }) => {
	return (
		<div className="biggerthing">
			<div className="navbar">
				<div>
					<img src={logo} alt="ADHD" className="navbar-logo" />
				</div>
				{/* <div className="navbar-list">
					<button className="navbar-button">
						<Link to="/">Home</Link>
					</button>
					<button className="navbar-button">
						<Link to="/UnderstandingADHDPage">What it is</Link>
					</button>
					<button className="navbar-button">
						<Link to="/projects">projects</Link>
					</button>
					<button className="navbar-button">
					<Link to="/tools">Helpful tools</Link>
					</button>
				</div>
				<div className="navbar-contact">
					<button className="contact-button">
						<Link to="/contact">
							Contact Us <KeyboardArrowRightIcon />
						</Link>
					</button>
				</div> */}
				<div className="navbar-list">
					<Link to="/" className="navbar-button">
						Home
					</Link>
					<Link to="/UnderstandingADHDPage" className="navbar-button">
						What it is
					</Link>
					<Link to="/projects" className="navbar-button">
						Projects
					</Link>
					<Link to="/tools" className="navbar-button">
						Helpful tools
					</Link>
				</div>
				<div className="navbar-contact">
					<Link to="/contact" className="contact-button">
						Contact Us <KeyboardArrowRightIcon />
					</Link>
				</div>

				<div className="navbar-menu">
					<button className="menu-button" id="menuButton">
						<img
							src={menu}
							alt="menu"
							className="menu"
							onClick={() => setMenuBar(!menubar)}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

const MenuBar = ({ menubar }) => {
	return (
		<div className={!menubar ? "hidden_hidden" : "hidden_show"} menubar>
			<button className="menu-menu">
				<Link to="/">Home</Link>
			</button>
			<button className="menu-menu">
				<Link to="/UnderstandingADHDPage">UnderstandingADHDPage</Link>
			</button>
			<button className="menu-menu">
				<Link to="/projects">Projects</Link>
			</button>
			<button className="menu-menu">
				<Link to="/tools">Helpful tools</Link>
			</button>
			<button className="menu-menu">
				<Link to="/contact">Contact Us</Link>
			</button>
		</div>
	);
};
export { Navbar, MenuBar };
