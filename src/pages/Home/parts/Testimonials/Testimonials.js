import * as React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { Feedback } from "./Feedback";
import { testimonials } from "../../../../model/testimonials";

import "../../../../sass/components/testimonials.scss";



export default function Testimonials()
{
	const slickSettings = 
	{
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive:
		[
			{
				breakpoint: 992,
				settings:
				{
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings:
				{
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		  ]
	};

	let slick;


	return (
		<div id="testimonials" className="bw-testimonials">
			<div className="bw-testimonials__wrap">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="bw-section__subtitle">Testimonials</div>
							<div className="bw-section__title bw-section__title-accent">
								What our clients say
							</div>
						</div>
						<div className="col-lg-5">
							<div className="bw-testimonials__slider-controls">
								<div className="bw-testimonials__slider-buttons">
									<span className="bw-icon icon-left-arrow" onClick={ () => slick.slickPrev() }></span>
									<span className="bw-icon icon-right-arrow" onClick={ () => slick.slickNext() }></span>
								</div>
							</div>
						</div>
					</div>
					<div className="bw-testimonials__slider">
						<div className="container">
							<Slider ref={ c => ( slick = c ) } { ...slickSettings }>
								{
									testimonials.map( ( element ) => <Feedback key={ element.id } { ...element } /> )
								}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}