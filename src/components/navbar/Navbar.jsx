import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Navbar.css";
// import logo from "./JONCO_logo.png";
import logo2 from "./JONCO_logo2.png";
import menu from "./Menu.png";

const Navbar = ({ setMenuBar, menubar }) => {
	return (
		<div className="biggerthing">
			<div className="navbar">
				<div>
					<img src={logo2} alt="JoncoMET" className="navbar-logo" />
				</div>
				<div className="navbar-list">
					<button className="navbar-button">
						<Link to="/">Home</Link>
					</button>
					<button className="navbar-button">
						<Link to="/services">Services</Link>
					</button>
					<button className="navbar-button">
						<Link to="/projects">Projects</Link>
					</button>
					<button className="navbar-button">
						<Link to="/clients">Clients</Link>
					</button>
				</div>
				<div className="navbar-contact">
					<button className="contact-button">
						<Link to="/contact">
							Contact Us <KeyboardArrowRightIcon />
						</Link>
					</button>
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
				<Link to="/services">Services</Link>
			</button>
			<button className="menu-menu">
				<Link to="/projects">Projects</Link>
			</button>
			<button className="menu-menu">
				<Link to="/clients">Clients</Link>
			</button>
			<button className="menu-menu">
				<Link to="/contact">Contact Us</Link>
			</button>
		</div>
	);
};
export { Navbar, MenuBar };
