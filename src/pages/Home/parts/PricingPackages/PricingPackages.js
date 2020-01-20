import * as React from "react";
import { Package } from "./Package";
import { pricingPackages } from "../../../../model/pricingPackages";
import "../../../../sass/components/pricing-packages.scss";



export function PricingPackages( props )
{
	return (
		<div id="pricing" className="bw-pricing-packages">
			<div className="bw-pricing-packages__wrap">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="bw-section__subtitle">Pricing Packages</div>
							<div className="bw-section__title bw-section__title-accent">
								Check Our Flexible Pricing Packages
							</div>
							<p className="bw-section__description">
								Welcome to our studio! We employ people who have passion for design and marketing. It's a perfect combination of professionalism and creative individual approach to every client or project.
							</p>
						</div>
					</div>
					<div className="bw-pricing-packages__list">
						<div className="row">
							{ pricingPackages.map( ( element ) => <Package key={ element.id } { ...element } /> ) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}