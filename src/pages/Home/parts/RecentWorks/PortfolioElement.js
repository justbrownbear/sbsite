import * as React from "react";



export function PortfolioElement( props )
{
	const { image } = props;
	const style = { backgroundImage: "url(" + image + ")" };


	return (
		<div className="col-lg-3">
			<div className="bw-recent-works__slider-item" style={ style }></div>
		</div>
	);
}
