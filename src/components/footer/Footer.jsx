import React from "react";
import { Link } from "react-router-dom";
import logo from "./adhd brain branding -10.svg";
import "./Footer.css";
let FBurl = "https://www.facebook.com/LLumarWindowFilm/";
let INurl = "https://www.instagram.com/jonco.trading/?igshid=YmMyMTA2M2Y%3D";
let Turl = "https://twitter.com/llumarfilms?lang=en";

const Footer = () => {
	return (
		<div className="footer">
			<div className="firstBig">
				<div className="firstSmall">
					<div className="logo">
						<button className="logo-button">
							<Link to="/">
								<img src={logo} alt="logo-pic" className="logo-pic" />
							</Link>
						</button>
					</div>
				</div>

				<div className="secondSmall">
					<div className="res-div">
						<div className="res">RESOURCES</div>
						<div className="HSCPC">
							<ul className="allul">
								<li className="routes">
									<Link to="/">Home</Link>
								</li>
								<li className="routes">
									<Link to="/UnderstandingADHDPage">What it is</Link>
								</li>
								<li className="routes">
									<Link to="/tools">Helpful tools</Link>
								</li>
								<li className="routes">
									<Link to="/projects">Projects</Link>
								</li>
								<li className="routes-contact">
									<Link to="/contact">Contact us</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="fus-div">
						<div className="fus">FOLLOW US</div>
						<div className="Socials">
							<ul className="allul">
								<li className="Social-FI">
									<a
										href="https://www.facebook.com/LLumarWindowFilm/"
										target="_blank"
										rel="noopener noreferrer">
										Facebook
									</a>
								</li>
								<li className="Social-FI">
									<a
										href="https://www.instagram.com/jonco.trading/?igshid=YmMyMTA2M2Y%3D"
										target="_blank"
										rel="noopener noreferrer">
										Instagram
									</a>
								</li>
								<li className="Social-T">
									<a
										href="https://twitter.com/llumarfilms?lang=en"
										target="_blank"
										rel="noopener noreferrer">
										Twitter
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="legal-div">
						<div className="legal">LEGAL</div>
						<div className="PPTC">
							<ul className="allul">
								<li className="PP">
									<a
										href="https://www.eastman.com/privacy/pages/policy.aspx"
										target="_blank"
										rel="noopener noreferrer">
										Privacy Policy
									</a>
								</li>
								<li className="TC">
									<a
										href="https://www.eastman.com/Pages/Legal_Information.aspx"
										target="_blank"
										rel="noopener noreferrer">
										Terms & Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="line"></div>

			<div className="secondBig">
				<div className="rights">
					&#169; 2023 &nbsp; <div className="bold">Zakaria Soukarieh</div>
					.All Rights Reserved.
				</div>
				<div className="S-icons">
					<button
						className="BTFB"
						onClick={() => {
							window.open(FBurl, "_blank");
						}}></button>
					<button
						className="BTIN"
						onClick={() => {
							window.open(INurl, "_blank");
						}}></button>
					<button
						className="BTT"
						onClick={() => {
							window.open(Turl, "_blank");
						}}></button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./JONCO_logo.png";
// import "./Footer.css";

// const socialMediaUrls = {
// 	facebook: "https://www.facebook.com/LLumarWindowFilm/",
// 	instagram: "https://www.instagram.com/jonco.trading/?igshid=YmMyMTA2M2Y%3D",
// 	twitter: "https://twitter.com/llumarfilms?lang=en",
// };

// const Footer = () => {
// 	const handleSocialMediaClick = (url) => {
// 		window.open(url, "_blank");
// 	};

// 	return (
// 		<div className="footer">
// 			<div className="firstBig">
// 				<div className="firstSmall">
// 					<div className="logo">
// 						<button className="logo-button">
// 							<Link to="/">
// 								<img src={logo} alt="logo-pic" className="logo-pic" />
// 							</Link>
// 						</button>
// 					</div>
// 				</div>

// 				<div className="secondSmall">
// 					<div className="res-div">
// 						<div className="res">RESOURCES</div>
// 						<div className="HSCPC">
// 							<ul className="allul">
// 								<li className="routes">
// 									<Link to="/">Home</Link>
// 								</li>
// 								<li className="routes">
// 									<Link to="/services">Services</Link>
// 								</li>
// 								<li className="routes">
// 									<Link to="/clients">Clients</Link>
// 								</li>
// 								<li className="routes">
// 									<Link to="/projects">Projects</Link>
// 								</li>
// 								<li className="routes-contact">
// 									<Link to="/contact">Contact us</Link>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>

// 					<div className="fus-div">
// 						<div className="fus">FOLLOW US</div>
// 						<div className="Socials">
// 							<ul className="allul">
// 								<li className="Social-FI">
// 									<a
// 										href={socialMediaUrls.facebook}
// 										target="_blank"
// 										rel="noopener noreferrer">
// 										Facebook
// 									</a>
// 								</li>
// 								<li className="Social-FI">
// 									<a
// 										href={socialMediaUrls.instagram}
// 										target="_blank"
// 										rel="noopener noreferrer">
// 										Instagram
// 									</a>
// 								</li>
// 								<li className="Social-T">
// 									<a
// 										href={socialMediaUrls.twitter}
// 										target="_blank"
// 										rel="noopener noreferrer">
// 										Twitter
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>

// 					<div className="legal-div">
// 						<div className="legal">LEGAL</div>
// 						<div className="PPTC">
// 							<ul className="allul">
// 								<li className="PP">
// 									<a
// 										href="https://www.eastman.com/privacy/pages/policy.aspx"
// 										target="_blank"
// 										rel="noopener noreferrer">
// 										Privacy Policy
// 									</a>
// 								</li>
// 								<li className="TC">
// 									<a
// 										href="https://www.eastman.com/Pages/Legal_Information.aspx"
// 										target="_blank"
// 										rel="noopener noreferrer">
// 										Terms & Conditions
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="line"></div>

// 			<div className="secondBig">
// 				<div className="rights">
// 					&#169;
// 					{new Date().getFullYear()} &nbsp;{" "}
// 					<div className="bold">JONCO M.E. Trading</div>
// 					.All Rights Reserved.
// 				</div>
// 				<div className="S-icons">
// 					<button
// 						className="BTFB"
// 						onClick={() =>
// 							handleSocialMediaClick(socialMediaUrls.facebook)
// 						}></button>
// 					<button
// 						className="BTIN"
// 						onClick={() =>
// 							handleSocialMediaClick(socialMediaUrls.instagram)
// 						}></button>
// 					<button
// 						className="BTT"
// 						onClick={() =>
// 							handleSocialMediaClick(socialMediaUrls.twitter)
// 						}></button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Footer;
