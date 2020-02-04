import * as React from "react";
import "../../../../sass/components/slider.scss";
import { HashLink as Link } from "react-router-hash-link";



export default function Slider()
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
						<Link to="/#pricing" className="bw-btn-border">Pricing</Link>
						<Link to="/order" className="bw-btn">Get Started</Link>
					</div>
				</div>
			</div>
		</div>
	);
}