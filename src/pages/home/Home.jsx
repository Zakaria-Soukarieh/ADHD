import "./home.css";
import Testo from "../../components/testo/testo";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<section className="hero">
				<div className="hero-background"></div>
				<div className="hero-content">
					<h1 className="hero-title">
						Empowering those with ADHD to thrive
					</h1>
					<p className="hero-description">
						Discover practical tips and strategies to manage ADHD symptoms
						and unlock your full potential.
					</p>
					<a href="/#about" className="hero-button">
						Get Started
					</a>
				</div>
			</section>
			<section className="introduction">
				<h2>Understanding ADHD</h2>
				<p>
					ADHD (Attention-Deficit/Hyperactivity Disorder) is a
					neurodevelopmental disorder that affects both children and
					adults. It is characterized by persistent patterns of
					inattention, hyperactivity, and impulsivity that can impact
					various aspects of life.
				</p>
				<p>
					Our website aims to provide valuable information and resources
					about ADHD, helping individuals and their families gain a better
					understanding of the condition.
				</p>
			</section>
			<section className="informative-content">
				<h2>Informative Content</h2>
				<p>
					Our website offers a wide range of informative articles,
					statistics, and insights about ADHD. Explore our content to learn
					more about the symptoms, diagnosis, treatment options, and
					strategies for managing ADHD effectively.
				</p>
			</section>
			<section className="helpful-tools-preview">
				<h2>Helpful Tools</h2>
				<p>
					Discover our collection of helpful tools designed to assist
					individuals with ADHD in their daily lives. From organization
					techniques to productivity strategies, our tools can help improve
					focus, time management, and overall well-being.
				</p>
				<Link to='/tools' className="cta-button">Explore Tools </Link>
				{/* <a href="/tools" className="cta-button">Explore Tools</a> */}
			</section>
			<section className="call-to-action">
				<h2>Ready to Learn More?</h2>
				<p>Start your journey towards understanding and managing ADHD.</p>
				<a href="/learn-more" className="cta-button">
					Learn More
				</a>
			</section>
			{<Testo />}
		</div>
	);
};

export default Home;
