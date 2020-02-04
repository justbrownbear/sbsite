import * as React from "react";
import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { getQueryVariable } from "../../utils/getQuery";


const Header = loadable( () => import( /* webpackChunkName: "Header" */ "../../components/Header/Header" ) );
const Breadcrumbs = loadable( () => import( /* webpackChunkName: "Breadcrumbs" */ "../../components/Breadcrumbs/Breadcrumbs" ) );
const OrderForm = loadable( () => import( /* webpackChunkName: "OrderForm" */ "./components/OrderForm" ) );
const Footer = loadable( () => import( /* webpackChunkName: "Footer" */ "../../components/Footer/Footer" ) );

import "../../sass/components/order.scss";



const TITLE = "Order form";



export default function Order()
{
	const [ formData, setFormData ] = useState( {} );

	useEffect( () =>
	{
		const pricePackage = getQueryVariable( "package" );

		if( typeof( pricePackage ) != "undefined" )
			setFormData( { pricePackage: +pricePackage } );
	}, [] );



	function onSubmit()
	{
		function onSuccess()
		{
			alert( "From successfully sent" );
		}


		function onError()
		{
			alert( "Form sending error!" );
		}

		alert( "trying to send form" );
		//sendQuery( "/some_url", formData, onSuccess, onError );
	}


	return (
		<>
			<Header />
			<Breadcrumbs title={ TITLE }/>
			<OrderForm formData={ formData } setFormData={ setFormData } onSubmit={ onSubmit }/>
			<Footer />
		</>
	);
}