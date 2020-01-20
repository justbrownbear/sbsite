import * as React from "react";
import "../../../../sass/components/slider.scss";



export function Slider()
{
	return (
		<div className="bw-slider">
			<div className="bw-slider__wrap image_01">
				<div className="container">
					<div className="col-lg-7">
						<div className="bw-slider__content">
							<div className="bw-section__title bw-section__title-accent">
								Helping your business impress clients with a stunning website
							</div>
						</div>
						<a href="/#pricing" className="bw-btn-border">Pricing</a>
						<a href="/order" className="bw-btn">Get Started</a>
					</div>
				</div>
			</div>
		</div>
	);
}