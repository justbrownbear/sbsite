import * as React from "react";
import { useState, useEffect } from "react";
import { Input } from "./Input";
import { pricingPackages, hostingCost } from "../../../model/pricingPackages";



export function SummaryFormPart( props )
{
	const { onChange, onSubmit, formData } = props;
	const { pricePackage, needHosting, industry, likedSites, selectedColors, firstName, lastName, email, phone } = formData;

	const [ total, setTotal ] = useState( 0 );

	
	function submitForm()
	{
		if( canSubmitForm )
			onSubmit()
	}

	const canSubmitForm = firstName && lastName && email && phone;

	const className = "bw-order-summary__button" + ( canSubmitForm ? " active" : "" );


	function calculateTotal()
	{
		let newTotal = 0;
		
		if( needHosting )
			newTotal += hostingCost;

		if( pricePackage )
			newTotal += getPricePackageDetails( pricePackage ).cost;

		setTotal( newTotal );
	}


	useEffect( () => calculateTotal(), [ pricePackage, needHosting ] );

	const needToShowClientDetails = pricePackage && industry && likedSites && selectedColors.length > 0;


	return (
		<div className="col-lg-4 col-md-12 col-sm-12">
			<div className="bw-order__summary">
				<div className="bw-order-summary__wrap">
					<div className="bw-order-summary__group">
						<div className="bw-order-summary__group-title">Order Summary</div>

						{ pricePackage && <PricePackage pricePackage={ pricePackage } needHosting={ needHosting } /> }

						<ul className="bw-order-summary__group-list mb-5">
							<div className="bw-order-summary__package">
								<span className="bw-order-summary__package-title total">Total</span>
								<span className="bw-order-summary__package-value total">${ total }</span>
								<div className="clearfix"></div>
							</div>
						</ul>
					</div>

					{ needToShowClientDetails && <ClientDetails onChange={ onChange } /> }

					<div className={ className } onClick={ submitForm }>Order</div>
				</div>
			</div>
		</div>
	);
}



// ******************************************
// ******************************************
function PricePackage( props )
{
	const { pricePackage, needHosting } = props;

	const pricePackageDetails = getPricePackageDetails( pricePackage );


	return (
		<>
			<PricePackageHeader { ...pricePackageDetails } />
			<ul className="bw-order-summary__group-list">
				<span className="bw-order-summary__group-list-subtitle">Selected services</span>
				{ 
					pricePackageDetails.services && pricePackageDetails.services.map( ( element ) => <PricePackageService key={ element.id } { ...element } /> )
				}
				{
					pricePackageDetails.additionalServices && pricePackageDetails.additionalServices.map( ( element ) => <PricePackageService key={ element.id } { ...element } /> )
				}
				{
					needHosting && <HostingInformation />
				}
			</ul>

		</>
	);
}



// ******************************************
// ******************************************
function PricePackageHeader( props )
{
	const { title, cost } = props;


	return (
		<ul className="bw-order-summary__group-list">
			<span className="bw-order-summary__group-list-subtitle">Package</span>
			<div className="bw-order-summary__package">
				<span className="bw-order-summary__package-title">{ title }</span>
				<span className="bw-order-summary__package-value">${ cost }</span>
				<div className="clearfix"></div>
			</div>
		</ul>
	);
}



// ******************************************
// ******************************************
function PricePackageService( props )
{
	const { title } = props;


	return (
		<li className="bw-order-summary__list-item">
			<span className="bw-order-summary__item-title">{ title }</span>
			<div className="clearfix"></div>
		</li>
	);
}



// ******************************************
// ******************************************
function HostingInformation()
{
	return (
		<li className="bw-order-summary__list-item">
			<span className="bw-order-summary__item-title">Hosting 1 Year</span>
			<span className="bw-order-summary__item-value">${ hostingCost }</span>
			<div className="clearfix"></div>
		</li>		
	);
}



// ******************************************
// ******************************************
function ClientDetails( props )
{
	const { onChange } = props;

	const [ firstName, setFirstName ] = useState( "" );
	const [ lastName, setLastName ] = useState( "" );
	const [ email, setEmail ] = useState( "" );
	const [ phone, setPhone ] = useState( "" );

	useEffect( () =>
	{
		onChange( { firstName, lastName, email, phone } );
	}, [ firstName, lastName, email, phone ] );


	return (
		<div className="bw-order-summary__group mb-5">
			<div className="bw-order-summary__group-title">Your Details</div>
			<div className="bw">
				<div className="bw-input">
					<label className="bw-input__label" htmlFor="">First Name</label>
					<Input value={ firstName } onChange={ setFirstName } placeholder="First Name" />
				</div>
				<div className="bw-input">
					<label className="bw-input__label" htmlFor="">Last Name</label>
					<Input value={ lastName } onChange={ setLastName } placeholder="Last Name" />
				</div>
				<div className="bw-input">
					<label className="bw-input__label" htmlFor="">Email Address</label>
					<Input value={ email } onChange={ setEmail } placeholder="Email" />
				</div>
				<div className="bw-input">
					<label className="bw-input__label" htmlFor="">Phone Number</label>
					<Input value={ phone } onChange={ setPhone } placeholder="Phone" />
				</div>
			</div>
		</div>
	);
}


function getPricePackageDetails( id )
{
	return pricingPackages.find( ( element ) => element.id === id );	
}