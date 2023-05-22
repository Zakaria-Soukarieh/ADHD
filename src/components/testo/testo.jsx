import "./testo.css";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "John Doe",
			testimonial:
				"The resources provided on this website have been a game-changer for me and my family. We've gained valuable insights and strategies to better manage ADHD in our daily lives.",
		},
		{
			id: 2,
			name: "Jane Smith",
			testimonial:
				"I'm grateful for this website and the support it offers. The tips and coping strategies have helped me overcome various challenges associated with ADHD, and I feel more confident in managing my symptoms.",
		},
		// Add more testimonials as needed
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<section className="testimonials">
			<h2>Testimonials</h2>
			<Slider {...settings}>
				{testimonials.map((testimonial) => (
					<div key={testimonial.id} className="testimonial">
						<p>{testimonial.testimonial}</p>
						<p className="testimonial-name">{testimonial.name}</p>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default Testimonials;
