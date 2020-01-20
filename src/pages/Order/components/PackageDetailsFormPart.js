import * as React from "react";
import { useState, useEffect } from "react";
import { colors } from "../../../model/pricingPackages";
import { Input } from "./Input";



export function PackageDetailsFormPart( props )
{
	const { onChange } = props;

	const [ industry, setIndustry ] = useState( "" );
	const [ likedSites, setLikedSites ] = useState( "" );
	const [ haveDomain, setHaveDomain ] = useState( false );
	const [ needHosting, setNeedHosting ] = useState( false );
	const [ selectedColors, setSelectedColors ] = useState( [] );


	useEffect( 
		() => onChange( { industry, likedSites, haveDomain, needHosting, selectedColors } ),
		[ industry, likedSites, haveDomain, needHosting, selectedColors ] );


	function selectColor( colorId )
	{
		let newSelectedColors;

		if( selectedColors.includes( colorId ) )
			newSelectedColors = selectedColors.filter( ( id ) => id !== colorId );
		else
			newSelectedColors = [ ...selectedColors, colorId ];

		setSelectedColors( newSelectedColors );
	}


	let className = "bw-order-form__step";

	if( industry && likedSites && selectedColors.length > 0 )
		className += " completed";


	return (
		<div className={ className }>
			<div className="bw-order-form__step-title">
				<div className="bw-order-form__title-label">
					<i className="bw-icon icon-check"></i>
				</div>
				Package Details
			</div>
			<div className="bw mb-4">
				<div className="bw-input">
					<label className="bw-input__label" htmlFor="">What Industry Is your business in</label>
					<Input value={ industry } onChange={ setIndustry } placeholder="Start typing..." />
				</div>
				<div className="bw-input">
					<label className="bw-input__label" htmlFor="">List several Websits you like</label>
					<Input value={ likedSites } onChange={ setLikedSites } placeholder="Domain Name" />
				</div>
			</div>
			<div className="bw-order-form__questions">
				<div className="bw-order-form__question">
					<div className="bw-order-form__question-title">Do you Currenty Have a Domian Name and Logo</div>
					<Switch value={ haveDomain } setValue={ setHaveDomain } />
					<div className="clearfix"></div>
				</div>
				<div className="bw-order-form__question">
					<div className="bw-order-form__question-title">Will you need hosting?</div>
					<Switch value={ needHosting } setValue={ setNeedHosting } />
					<div className="clearfix"></div>
				</div>
			</div>
			<div className="bw-order-form__colors">
				<div className="bw-order-form__colors-title">
					Colors You would like used on your website?
					</div>
				<ul className="bw-order-form__colors-group">
					{ 
						colors.map( ( element ) => <ColorSelector key={ element.id } isSelected={ selectedColors.includes( element.id ) } selectColor={ selectColor } { ...element } /> )
					}
				</ul>
			</div>
		</div>
	);
}



// ******************************************
// ******************************************
export function Switch( props )
{
	const { value, setValue } = props;

	const className = "bw-switch " + ( value ? "right" : "left" );

	function onClick()
	{
		setValue( !value );
	}

	return (
		<div className="bw-order-form__question-switch" onClick={ onClick }>
			<div className={ className }>
				<span className="bw-switch__button"></span>
			</div>
		</div>
	);
}



// ******************************************
// ******************************************
export function ColorSelector( props )
{
	const { id, color, isSelected, selectColor } = props;

	let style =
	{
		backgroundColor: color
	};

	let className = "bw-order-form__item-color-out";

	if( isSelected )
		className += " active";


	return (
		<li className={ className } onClick={ () => selectColor( id ) }>
			<span className="bw-order-form__item-color-in" style={ style }></span>
		</li>
	);
}