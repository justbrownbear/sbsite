import * as React from "react";


export function Feedback( props )
{
	const { avatar, name, position, feedback } = props;


	return (
		// <div className="col-lg-6 col-md-6 col-sm-12">
			<div className="bw-testimonials__slider-item">
				<div className="bw-testimonials-slider__item-avatar">
					<img src={ avatar } className="bw-testimonials-slider__item-avatar-image" />
				</div>
				<p className="bw-testimonials-slider__item-feedback">{ feedback }</p>
				<div className="bw-testimonials-slider__item-author">
					<div className="bw-testimonials-slider__item-author-name">
						<i className="bw-icon icon-quote-right"></i>
						{ name }
					</div>
					<span className="bw-testimonials-slider__item-author-post">{ position }</span>
				</div>
			</div>
		// </div>
	);
}