import * as React from "react";
import { Service } from "./Service";
import { AdditionalService } from "./AdditionalService";
import { HashLink as Link } from "react-router-hash-link";



export function Package( props )
{
	const { id, title, subtitle, cost, services, additionalServices } = props;

	return (
		<div className="col-lg-4">
			<div className="bw-pricing-packages__package">
				<div className="bw-pricing-packages__package-title">{ title }</div>
				<span className="bw-pricing-packages__package-subtitle">{ subtitle }</span>
				<div className="bw-pricing-packages__package-price">
					<div className="bw-pricing-packages__package-price-value">
						<span className="bw-pricing-packages__package-currency">$</span>
						{ cost }
						</div>
				</div>
				<ul className="bw-pricing-packages__package-list-services">
					{ services && services.map( ( element ) => <Service key={ element.id } title={ element.title } /> ) }
					{ additionalServices && additionalServices.map( ( element ) => <AdditionalService key={ element.id } title={ element.title } /> ) }
				</ul>
				<Link to={ "/order?package=" + id } className="bw-btn-border">Get Started</Link>
			</div>
		</div>
	);
}