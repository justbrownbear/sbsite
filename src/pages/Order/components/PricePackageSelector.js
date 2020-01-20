import * as React from "react";
import { useState, useEffect } from "react";
import { pricingPackages } from "../../../model/pricingPackages";



export function PricePackageSelector( props )
{
	const { pricePackage, onChange } = props;
	
	function setPricePackage( id )
	{
		onChange( { pricePackage: id } )
	}


	let className = "bw-order-form__step";

	if( pricePackage )
		className += " completed";


	return (
		<div className={ className }>
			<div className="bw-order-form__step-title">
				<div className="bw-order-form__title-label">
					<i className="bw-icon icon-check"></i>
				</div>
				Choose your service package
				</div>
			<div className="row">
				{
					pricingPackages.map( ( element ) => <Package key={ element.id } isSelected={ element.id === pricePackage } selectPackage={ setPricePackage } { ...element } /> )
				}
			</div>
		</div>
	);
}



// ******************************************
// ******************************************
function Package( props )
{
	const { id, title, cost, services, additionalServices, isSelected, selectPackage } = props;

	let className = "bw-order-form__package-button";

	if( isSelected )
		className += " active";


	return (
		<div className="col-lg mb-4">
			<div className="bw-order-form__package">
				<div className={ className } onClick={ () => selectPackage( id ) }>
					<div className="bw-order-form__package-title">{ title }</div>
					<div className="bw-order-form__package-price">${ cost }</div>
				</div>
				<ul className="bw-order-form__package-list">
					{ services && services.map( ( element ) => <Service key={ element.id } title={ element.title } /> ) }
					{ additionalServices && additionalServices.map( ( element ) => <Service key={ element.id } isAdditionalService={ true } title={ element.title } /> ) }
				</ul>
			</div>
		</div>
	);
}



// ******************************************
// ******************************************
function Service( props )
{
	const { title, isAdditionalService } = props;

	let className = "bw-order-form__package-list-item";

	if( isAdditionalService )
		className += " item-new";


	return (
		<li className={ className }>
			{ title }
		</li>
	);
}