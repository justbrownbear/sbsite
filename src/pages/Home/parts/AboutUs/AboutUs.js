import * as React from "react";
import "../../../../sass/components/about-us.scss";



export default function AboutUs()
{
	return (
		<div id="aboutUs" className="bw-about_us">
			<div className="bw-about_us__wrap">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="bw-section__subtitle">About Us</div>
							<div className="bw-section__title bw-section__title-accent">
								Creative Web Design services
							</div>
							<p className="bw-section__description">
								In addition to all the branding and marketing features and benefits, our clients get to enjoy the advantages of a time-tested and refined workflow that is custom-tailored to each project!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}